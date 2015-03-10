using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using R2.Disaster.Core;
using R2.Disaster.WebFramework.Controllers;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.CoreEntities.Users;
using R2.Halo.Service.Apps;
using R2.Halo.Service.Users;
using R2.Halo.Web.Models.Apps;
using R2.Halo.Web.Models.Users;

namespace R2.Halo.Web.Controllers
{
    [AdminAuthorize(Order = 10)]
    public class AppController : BaseHaloController
    {
        #region Fields
        private readonly IAppService _appService;
        private readonly IRoleAppService _roleAppService;
        private string _result = string.Empty;
        #endregion

        #region Constructors
        public AppController(IAppService appService, IRoleAppService roleAppService)
        {
            this._appService = appService;
            this._roleAppService = roleAppService;
        }

        #endregion

        #region Utitilies

        [NonAction]
        public int GetUserRole()
        {
            var cookie = Request.Cookies["userinfo"];
            if (cookie == null) return 0;
            string[] cookieValue = cookie.Value.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            return int.Parse(cookieValue.Last());
        }
        #endregion

        #region App
        public ActionResult Index()
        {
            return RedirectToAction("List");
        }
        public ActionResult List(int pageIndex = 1, int pageSize = 20)
        {
            IPagedList<App> list = null;
            list = this._appService.GetPagedList(pageIndex, pageSize);
            var gridModel = new
            {
                Data = list.List.Select(x =>
                {
                    var m = x.ToModel();
                    m.AppName = m.Name;
                    m.AppId = m.Id;
                    return m;
                }),
                TotalCount = list.TotalCount
            };
            return Content(JsonConvert.SerializeObject(gridModel));

        }
        [HttpPost]
        public ActionResult Create(AppModel model)
        {
            if (_appService.List().Count(m => m.Name == model.Name) > 0)
            {
                _result = "failed";
                return Content(_result);
            }
            var app = model.ToEntity();
            model.AddTime = DateTime.Now;
            _appService.Add(app);
            _roleAppService.Add(new RoleApp {  AppId = app.Id, RoleId = GetUserRole(), DisplayOrder = 0  });
            _result = "success";
            return Content(_result);
        }
        public ActionResult Detail(int id)
        {
            var app = this._appService.Get(id);
            var model = app.ToModel();
            model.AddTime = app.AddTime;
            return Content(JsonConvert.SerializeObject(model));
        }
        public ActionResult Edit(AppModel model)
        {
            var app = this._appService.Get(model.Id);
            app = model.ToEntity(app);
            this._appService.Update(app); ;
            _result = "success";
            return Content(_result);
        }
        public ActionResult Delete(int id)
        {
            var app = _appService.Get(id);
            _appService.Delete(app);
            _result = "success";
            return Content(_result);
        }
        #endregion

    }
}
