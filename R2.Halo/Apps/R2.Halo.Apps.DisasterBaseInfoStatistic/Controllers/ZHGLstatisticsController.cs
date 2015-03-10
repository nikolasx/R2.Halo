using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace R2.Halo.Apps.DisasterBaseInfoStatistic.Controllers
{
    public class ZHGLstatisticsController : Controller
    {
        //
        // GET: /ZHGLstatistics/

        public ActionResult Index()
        {
            return View("R2.Halo.Apps.DisasterBaseInfoStatistic.Views.ZHGLstatistics.Index");
        }

    }
}
