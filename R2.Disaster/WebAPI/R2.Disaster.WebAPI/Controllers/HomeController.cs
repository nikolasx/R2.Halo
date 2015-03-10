using StackExchange.Profiling;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.SignalR;
using SignalRChat;

namespace R2.Disaster.WebAPI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var profiler = MiniProfiler.Current;
            using (profiler.Step("Set page title"))
            {
                 ViewBag.Title = "Home Page";
            }
            using (profiler.Step("Doing complex stuff"))
            {
                using (profiler.Step("Step A"))
                { // something more interesting here
                    Thread.Sleep(100);
                }
                using (profiler.Step("Step B"))
                { // and here
                    Thread.Sleep(250);
                }
            }
            SendMessage("Index","Invoke Index");
            return View();
        }

        public ActionResult Chat()
        {
            SendMessage("Chat","Invoke Chat");
            return View();
        }

        public ActionResult Notification()
        {
            //ChatHub
            return View();
        }

        public static void SendMessage(string name,string message)
        {
            GlobalHost.ConnectionManager.
                GetHubContext<NotificationHub>().
                Clients.All.sendMessage(name,message);
        }
    }
}
