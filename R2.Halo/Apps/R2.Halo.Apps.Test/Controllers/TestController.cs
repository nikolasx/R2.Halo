using System;
using System.Text;
using System.Web.Mvc;

namespace R2.Halo.Apps.Controllers
{
    //[AdminAuthorize]
    public class TestController:Controller
    {
        //private readonly UPSSettings _upsSettings;
        //private readonly ISettingService _settingService;

        //public ShippingUPSController(UPSSettings upsSettings, ISettingService settingService)
        //{
        //    this._upsSettings = upsSettings;
        //    this._settingService = settingService;
        //dddddd}

        //[ChildActionOnly]
        public ActionResult Configure()
        {
            return View("R2.Halo.Apps.Test.Views.Test.Configuer");
        }

        //[HttpPost]
        ////[ChildActionOnly]
        //public ActionResult Configure()
        //{
        //    //return View(
        //    return ConfigureGet();
        //}

    }
}
