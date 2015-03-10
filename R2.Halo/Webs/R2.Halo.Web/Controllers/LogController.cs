using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using R2.Disaster.Core;
using R2.Disaster.WebFramework.Controllers;
using R2.Halo.CoreEntities.Logging;
using R2.Halo.Service.Logging;

namespace R2.Halo.Web.Controllers
{
    [AdminAuthorize(Order = 10)]
    public class LogController : BaseHaloController
    {
               #region Fields
        private readonly ILogger _logService;
        private string _result = string.Empty;
        #endregion

        #region Constructors

        public LogController(ILogger logService)
        {
            this._logService = logService;
        }

        #endregion

        #region Utitilies
        #endregion

        #region log
        public ActionResult Index()
        {
            return RedirectToAction("List");
        }
        public ActionResult List(int pageIndex = 1, int pageSize = 20)
        {
            IPagedList<Log> list = null;
            list = this._logService.GetPagedList(pageIndex, pageSize);
            var gridModel = new
            {
                Data = list.List.Select(x =>
                {
                    var m = x.ToModel();
                    m.CreateTime = x.AddTime;
                    m.LogLevel = x.LogLevel.ToString();
                    return m;
                }),
                TotalCount = list.TotalCount
            };
            return Content(JsonConvert.SerializeObject(gridModel));

        }
        public ActionResult Detail(int id)
        {
            var log = this._logService.Get(id);
            var model = log.ToModel();
            model.CreateTime = log.AddTime;
            model.LogLevel = log.LogLevel.ToString();
            return Content(JsonConvert.SerializeObject(model));
        }

        public ActionResult Delete(int id)
        {
            var log = _logService.Get(id);
            _logService.Delete(log);
            _result = "success";
            return Content(_result);
        }
        public ActionResult ClearAll()
        {
            _logService.ClearLog();
            _result = "success";
            return Content(_result);
        }
        #endregion
    }
}
