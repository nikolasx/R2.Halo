using Autofac;
using R2.Disaster.Core.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;

namespace R2.Disaster.Core.DependencyManagement
{
    /// <summary>
    /// Configures the inversion of control container with services used by Nop.
    /// </summary>
    public class ContainerConfigurer
    {
        public virtual void Configure(IEngine engine, ContainerManager containerManager)
        {
            //other dependencies
            //containerManager.AddComponentInstance<NopConfig>(configuration, "nop.configuration");
            //containerManager.AddComponentInstance<IEngine>(engine, "nop.engine");
            //containerManager.AddComponentInstance<ContainerConfigurer>(this, "nop.containerConfigurer");

            //type finder
            containerManager.AddComponent<ITypeFinder, WebAppTypeFinder>("nop.typeFinder");
            //ContainerBuilder builder = new ContainerBuilder();
            //builder.RegisterType<WebAppTypeFinder>().As<ITypeFinder>();
            //IContainer container=builder.Build();

            //register dependencies provided by other assemblies
            var typeFinder = containerManager.Resolve<ITypeFinder>();
            containerManager.UpdateContainer(x =>
            {
                var drTypes = typeFinder.FindClassesOfType<IDependencyRegistrar>();
                var drInstances = new List<IDependencyRegistrar>();
                foreach (var drType in drTypes)
                    drInstances.Add((IDependencyRegistrar)Activator.CreateInstance(drType));
                //sort
                drInstances = drInstances.AsQueryable().OrderBy(t => t.Order).ToList();
                foreach (var dependencyRegistrar in drInstances)
                    dependencyRegistrar.Register(x, typeFinder);
            });
        }
    }
}
