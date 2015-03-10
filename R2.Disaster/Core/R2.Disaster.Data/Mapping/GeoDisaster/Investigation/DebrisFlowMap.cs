using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.Data.Mapping.GeoDisaster.Investigation
{
    public class DebrisFlowMap : EntityTypeConfiguration<DebrisFlow>
    {
        public DebrisFlowMap()
        {
            this.ToTable("DebrisFlows");
            this.HasKey(c => c.Id);

            //this.Property(c => c.统一编号).IsRequired();
            //this.Property(c => c.名称).IsRequired();

            //this.HasRequired(c => c.Comprehensive)
            //    .WithRequiredDependent(c => c.DebrisFlow);
            
        }
    }
}
