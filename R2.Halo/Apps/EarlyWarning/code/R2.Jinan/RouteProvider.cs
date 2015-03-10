using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.EarlyWarning
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.EarlyWarning.index", "Apps/EarlyWarning/index",
                new { controller = "EarlyWarning", action = "Index" },
                new[] { "R2.Halo.Apps.EarlyWarning.Controllers" });

 
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
