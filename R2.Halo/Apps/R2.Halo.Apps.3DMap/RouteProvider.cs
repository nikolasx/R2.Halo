using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.JnDbDeleteAndEdit
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.D3Map.index", "Apps/D3Map/Index",
                new { controller = "D3Map", action = "Index" },
                new[] { "R2.Halo.Apps.D3Map.Controllers" });
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
