using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.Data.Mapping.GeoDisaster.MassPres
{
    public class PrePlanMap : EntityTypeConfiguration<PrePlan>
    {
        public PrePlanMap()
        {
            this.ToTable("PrePlans");
            this.HasKey(p => p.Id);

            this.Property(m => m.名称).IsRequired();

            //this.HasOptional(p => p.PhyGeoDisaster)
            //    .WithOptionalDependent(c => c.PrePlan)
            //    .Map(p => p.MapKey("PhyGeoDisasterId"));
            
        }
    }
}
