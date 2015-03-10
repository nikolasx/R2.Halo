using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.JnDbDeleteAndEdit
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.ZHGLstatistics.index", "Apps/ZHGLstatistics/index",
                new { controller = "ZHGLstatistics", action = "Index" },
                new[] { "R2.Halo.Apps.DisasterBaseInfoStatistic.Controllers" });

 
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
