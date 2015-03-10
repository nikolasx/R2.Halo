using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace R2.Halo.Apps.WorkCardInput.Controllers
{
    public class DisasterCardController : Controller
    {

        public ActionResult Index()
        {
            return View("R2.Halo.Apps.WorkCardInput.Views.DisasterCard.Index");
        }

        
    }
}
