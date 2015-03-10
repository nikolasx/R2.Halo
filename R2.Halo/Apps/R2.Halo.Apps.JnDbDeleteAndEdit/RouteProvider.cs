using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.JnDbDeleteAndEdit
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.JnDbDeleteAndEdit.index", "Apps/JnDbDeleteAndEdit/index",
                new { controller = "JnDbDeleteAndEdit", action = "Index" },
                new[] { "R2.Halo.Apps.JnDbDeleteAndEdit.Controllers" });

            routes.MapRoute("Apps.JnDbDeleteAndEdit.index1", "Apps/JnDbDeleteAndEdit/EditLandSlide",
    new { controller = "JnDbDeleteAndEdit", action = "EditLandSlide" },
    new[] { "R2.Halo.Apps.JnDbDeleteAndEdit.Controllers" });

            routes.MapRoute("Apps.JnDbDeleteAndEdit.index2", "Apps/JnDbDeleteAndEdit/EditCollapse",
    new { controller = "JnDbDeleteAndEdit", action = "EditCollapse" },
    new[] { "R2.Halo.Apps.JnDbDeleteAndEdit.Controllers" });

            routes.MapRoute("Apps.JnDbDeleteAndEdit.index3", "Apps/JnDbDeleteAndEdit/EditMudFlow",
    new { controller = "JnDbDeleteAndEdit", action = "EditMudFlow" },
    new[] { "R2.Halo.Apps.JnDbDeleteAndEdit.Controllers" });
            routes.MapRoute("Apps.JnDbDeleteAndEdit.index4", "Apps/JnDbDeleteAndEdit/EditLandCrack",
    new { controller = "JnDbDeleteAndEdit", action = "EditLandCrack" },
    new[] { "R2.Halo.Apps.JnDbDeleteAndEdit.Controllers" });
            routes.MapRoute("Apps.JnDbDeleteAndEdit.index5", "Apps/JnDbDeleteAndEdit/EditGroundSubside",
    new { controller = "JnDbDeleteAndEdit", action = "EditGroundSubside" },
    new[] { "R2.Halo.Apps.JnDbDeleteAndEdit.Controllers" });
            routes.MapRoute("Apps.JnDbDeleteAndEdit.index6", "Apps/JnDbDeleteAndEdit/EditGroundSettle",
    new { controller = "JnDbDeleteAndEdit", action = "EditGroundSettle" },
    new[] { "R2.Halo.Apps.JnDbDeleteAndEdit.Controllers" });
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
