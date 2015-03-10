using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;



namespace R2.Halo.Apps.EarlyWarning.Controllers
{
    public class EarlyWarningController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View("R2.Halo.Apps.EarlyWarning.Views.Home.Index");
        }


        public void DownImg()
        {
            string filePath = Server.MapPath("~/Apps/Apps.EarlyWarning/Content/images/img");
            string downFileName = "济南预警图.jpg";
            Response.Clear();
            Response.Buffer = false;
            Response.AddHeader("Content-Disposition", "attachment;filename=" + HttpUtility.UrlEncode(downFileName, Encoding.UTF8));
            Response.WriteFile(Path.Combine(filePath,downFileName));
            Response.Flush();
            Response.End();
        }


        

    }
}
