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
    public class AppCategoryController : BaseHaloController
    {
        #region Fields
        private readonly IAppService _appService;
        private readonly IAppCategoryService _appCategoryService;
        private string _result = string.Empty;
        #endregion

        #region Constructors

        public AppCategoryController(IAppService appService, IAppCategoryService roleAppService)
        {
            this._appService = appService;
            this._appCategoryService = roleAppService;
        }

        #endregion

        #region Utitilies

        #endregion

        #region AppCategory
        public ActionResult Index()
        {
            return RedirectToAction("List");
        }
        public ActionResult List(int pageIndex = 1, int pageSize = 20)
        {
            IPagedList<AppCategory> list = null;
            list = this._appCategoryService.GetPagedList(pageIndex, pageSize);
            var gridModel = new
            {
                Data = list.List.Select(x =>
                {
                    var m = x.ToModel();
                    return m;
                }),
                TotalCount = list.TotalCount
            };
            return Content(JsonConvert.SerializeObject(gridModel));

        }
        [HttpPost]
        public ActionResult Create(AppCategoryModel model)
        {
            if (_appCategoryService.List().Count(m => m.Name == model.Name) > 0)
            {
                _result = "failed";
                return Content(_result);
            }
            var app = model.ToEntity();
            model.AddTime = DateTime.Now;
            _appCategoryService.Add(app);
            _result = "success";
            return Content(_result);
        }
        public ActionResult Detail(int id)
        {
            var app = this._appCategoryService.Get(id);
            var model = app.ToModel();
            model.AddTime = app.AddTime;
            return Content(JsonConvert.SerializeObject(model));
        }
        public ActionResult Edit(AppCategoryModel model)
        {
            var app = this._appCategoryService.Get(model.Id);
            app = model.ToEntity(app);
            this._appCategoryService.Update(app); ;
            _result = "success";
            return Content(_result);
        }
        public ActionResult Delete(int id)
        {
            var app = _appCategoryService.Get(id);
            _appCategoryService.Delete(app);
            _result = "success";
            return Content(_result);
        }
        #endregion

    }
}
