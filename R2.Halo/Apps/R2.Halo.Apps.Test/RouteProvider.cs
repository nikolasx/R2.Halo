
using R2.Disaster.WebFramework.Mvc.Routes;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Apps
{
    public partial class RouteProvider : IRouteProvider
    {
        public void RegisterRoutes(RouteCollection routes)
        {
            //routes.MapRoute("Plugin.Shipping.ByWeight.SaveGeneralSettings",
            //     "Plugins/ShippingByWeight/SaveGeneralSettings",
            //     new { controller = "ShippingByWeight", action = "SaveGeneralSettings", },
            //     new[] { "Nop.Plugin.Shipping.ByWeight.Controllers" }
            //);

            //routes.MapRoute("Plugin.Shipping.ByWeight.AddPopup",
            //     "Plugins/ShippingByWeight/AddPopup",
            //     new { controller = "ShippingByWeight", action = "AddPopup" },
            //     new[] { "Nop.Plugin.Shipping.ByWeight.Controllers" }
            //);
            //routes.MapRoute("Plugin.Shipping.ByWeight.EditPopup",
            //     "Plugins/ShippingByWeight/EditPopup",
            //     new { controller = "ShippingByWeight", action = "EditPopup" },
            //     new[] { "Nop.Plugin.Shipping.ByWeight.Controllers" }
            //);

            routes.MapRoute("R2.Halo.Apps.Test", "Apps/TestApp/Configure",
                new { controller = "Test", action = "Configure" },
                new[] { " R2.Halo.Apps.Controllers" });
    //        routes.MapRoute(
    //            name:"Apps",
    //            url:"Apps/TestApp/ConfigureGet/Get",
    //            defaults: new { controller = "Test", action = "ConfigureGet"},
    //            namespaces: new[] { "R2.Halo.Apps.Controllers" }
    //);
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
