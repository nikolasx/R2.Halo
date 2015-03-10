using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using R2.Disaster.WebFramework.Controllers;
using R2.Halo.Service.Apps;
using R2.Halo.Service.Users;
 using R2.Halo.Web.Models.Apps;

namespace R2.Halo.Web.Controllers
{
    public class HomeController : Controller
    {

        private readonly IUserProfileService _userProfileService;
        private readonly IAppService _appService;

        public HomeController(IUserProfileService userProfileService, IAppService appService)
        {          
            this._userProfileService = userProfileService;
            this._appService = appService;
        }

        //
        // GET: /Home/Details/5

        public ActionResult Index()
        {           
            //var model = _userProfileService.List().FirstOrDefault();

            //return Content("hello halo"+model.Name);
            return View();
        }


        public ActionResult GetPublicApp()
        {
            var s =this._appService.List().Where(m => m.IsPublic == true).Select(m => m.AppCategoryId).Distinct().ToList();
            return Content(JsonConvert.SerializeObject(s.GetGroupedApp(_appService)));
        }

    }
}
