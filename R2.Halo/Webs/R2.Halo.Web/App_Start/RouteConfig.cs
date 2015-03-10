using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Login", action = "Login", id = UrlParameter.Optional },
                namespaces: new[] { "R2.Halo.Web.Controllers" }
            );

            //routes.MapRoute(
            //    "Default", // Route name
            //    "{controller}/{action}/{id}", // URL with parameters
            //    new { controller = "Home", action = "Index", id = UrlParameter.Optional },
            //    new[] { "Nop.Web.Controllers" }
            //);

    //        routes.MapRoute(
    //name: "Apps",
    //url: "Apps/TestApp/ConfigureGet",
    //defaults: new { controller = "Test", action = "Configure"},
    //namespaces: new[] { "R2.Halo.Apps.Controllers" }
//);

        }
    }
}
