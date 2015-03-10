using System.Web.Routing;

namespace R2.Disaster.WebFramework.Mvc.Routes
{
    public interface IRouteProvider
    {
        void RegisterRoutes(RouteCollection routes);

        int Priority { get; }
    }
}
