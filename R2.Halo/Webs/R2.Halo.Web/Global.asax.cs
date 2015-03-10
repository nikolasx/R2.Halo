
using R2.Disaster.Core.Infrastructure;
using R2.Disaster.WebFramework.EmbeddedViews;
using R2.Disaster.WebFramework.mvc;
using R2.Disaster.WebFramework.Mvc.Routes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;
using System.Web.Routing;

namespace R2.Halo.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            EngineContext.Initialize(false);
            
            var dependencyResolver = new HaloDependencyResolver();
            DependencyResolver.SetResolver(dependencyResolver);

            AreaRegistration.RegisterAllAreas();
            
            RegisterPluginRoute(RouteTable.Routes);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

           
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);

            var embeddedViewResolver = EngineContext.Current.Resolve<IEmbeddedViewResolver>();
            var embeddedProvider = new EmbeddedViewVirtualPathProvider(embeddedViewResolver.GetEmbeddedViews());
            HostingEnvironment.RegisterVirtualPathProvider(embeddedProvider);
        }

        public static void RegisterPluginRoute(RouteCollection routes)
        {
            RoutePublisher routePublisher = new RoutePublisher(new WebAppTypeFinder());
            routePublisher.RegisterRoutes(routes);
        }
    }
}
