using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.JnDbDeleteAndEdit
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.D2Map.index", "Apps/D2Map/Index",
                new { controller = "D2Map", action = "Index" },
                new[] { "R2.Halo.Apps.D2Map.Controllers" });
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
