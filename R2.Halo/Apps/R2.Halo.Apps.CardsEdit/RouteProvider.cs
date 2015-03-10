using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps.JnDbDeleteAndEdit
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {

            routes.MapRoute("Apps.DisasterCard.index", "Apps/DisasterCard/DisasterCardList",
                new { controller = "DisasterCard", action = "DisasterCardList" },
                new[] { "R2.Jinan.Controllers" });

            routes.MapRoute("Apps.DisasterCard.index1", "Apps/DisasterCard/EditEscapseCard",
            new { controller = "DisasterCard", action = "EditEscapseCard" },
            new[] { "R2.Jinan.Controllers" });

            routes.MapRoute("Apps.DisasterCard.index2", "Apps/DisasterCard/EditWorkCard",
           new { controller = "DisasterCard", action = "EditWorkCard" },
          new[] { "R2.Jinan.Controllers" });

    //        routes.MapRoute("Apps.DisasterCard.index3", "Apps/JnDbDeleteAndEdit/EditMudFlow",
    //new { controller = "DisasterCard", action = "EditMudFlow" },
    //new[] { "R2.Jinan.Controllers" });
    //        routes.MapRoute("Apps.DisasterCard.index4", "Apps/JnDbDeleteAndEdit/EditLandCrack",
    //new { controller = "DisasterCard", action = "EditLandCrack" },
    //new[] { "R2.Jinan.Controllers" });
    //        routes.MapRoute("Apps.DisasterCard.index5", "Apps/JnDbDeleteAndEdit/EditGroundSubside",
    //new { controller = "DisasterCard", action = "EditGroundSubside" },
    //new[] { "R2.Jinan.Controllers" });
    //        routes.MapRoute("Apps.DisasterCard.index6", "Apps/JnDbDeleteAndEdit/EditGroundSettle",
    //new { controller = "DisasterCard", action = "EditGroundSettle" },
    //new[] { "R2.Jinan.Controllers" });
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
