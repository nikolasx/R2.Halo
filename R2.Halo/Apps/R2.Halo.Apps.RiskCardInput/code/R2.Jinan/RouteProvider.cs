using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.JnDbInsert
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.RiskCardInput.index", "Apps/RiskCardInput/index",
                new { controller = "DisasterCard", action = "EscapseCard" },
                new[] { "R2.Halo.Apps.RiskCardInput.Controllers" });
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
