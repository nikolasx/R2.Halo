using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Web;
using Autofac;
using Autofac.Builder;
using Autofac.Core;
//using Autofac.Integration.Mvc;
using Autofac.Integration.Mvc;
using R2.Disaster.Core.DependencyManagement;
using R2.Disaster.Core.Infrastructure;
using R2.Disaster.WebFramework.EmbeddedViews;
using R2.Disaster.WebFramework.Mvc.Routes;
using R2.Halo.Data;
using R2.Halo.Service;
using R2.Halo.Service.Logging;
using R2.Halo.Service.Users;


namespace R2.Disaster.WebFramework
{
    public class DependencyRegistrar : IDependencyRegistrar
    {
        public virtual void Register(ContainerBuilder builder, ITypeFinder typeFinder)
        {
            builder.RegisterControllers(typeFinder.GetAssemblies().ToArray());
            builder.RegisterType<R2HaloContext>().As<IDbContext>().InstancePerRequest();
            builder.RegisterGeneric(typeof(EFRepository<>)).As(typeof(IRepository<>)).InstancePerRequest();
            builder.RegisterType<DefaultLogger>().As<ILogger>().InstancePerHttpRequest();
            builder.RegisterAssemblyTypes(Assembly.GetAssembly(typeof(EntityServiceBase<>))).Where(t => t.Name.EndsWith("Service")).AsImplementedInterfaces().InstancePerRequest();       
            //以上为黄圣所加 
            builder.RegisterType<EmbeddedViewResolver>().As<IEmbeddedViewResolver>().SingleInstance();
            builder.RegisterType<RoutePublisher>().As<IRoutePublisher>().SingleInstance();

        }

        public int Order
        {
            get { return 0; }
        }
    }

}
