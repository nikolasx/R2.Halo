using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.JnDbInsert
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.WorkCardInput.index", "Apps/WorkCardInput/index",
                new { controller = "DisasterCard", action = "Index" },
                new[] { "R2.Halo.Apps.WorkCardInput.Controllers" });
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
