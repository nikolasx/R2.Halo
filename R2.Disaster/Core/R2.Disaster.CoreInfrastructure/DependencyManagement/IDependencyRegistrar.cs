using Autofac;
using R2.Disaster.Core.Infrastructure;

namespace R2.Disaster.Core.DependencyManagement
{
    public interface IDependencyRegistrar
    {
        void Register(ContainerBuilder builder, ITypeFinder typeFinder);

        int Order { get; }
    }
}
