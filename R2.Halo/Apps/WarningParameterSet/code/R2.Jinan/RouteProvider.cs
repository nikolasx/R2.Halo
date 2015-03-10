using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.WarningParameterSet
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.WarningParameterSet.index", "Apps/WarningParameterSet/index",
                new { controller = "WarningParameterSet", action = "Index" },
                new[] { "R2.Halo.Apps.WarningParameterSet.Controllers" });
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
