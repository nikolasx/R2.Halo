using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.JnDbInsert
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.JnDbInserting.index", "Apps/JnDbInserting/index",
                new { controller = "JnDbInserting", action = "Index" },
                new[] { "R2.Halo.Apps.JnDbInsert.Controllers" });

            routes.MapRoute("Apps.JnDbInserting.AddDisaster", "Apps/JnDbInserting/AddDisaster",
                new { controller = "JnDbInserting", action = "AddDisaster" },
                new[] { "R2.Halo.Apps.JnDbInsert.Controllers" });
        }


        public int Priority
        {
            get
            {
                return 0;
            }
        }
    }
}
