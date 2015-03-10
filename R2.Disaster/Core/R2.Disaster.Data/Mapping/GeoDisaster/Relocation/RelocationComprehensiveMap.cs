using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;

namespace R2.Disaster.Data.Mapping.GeoDisaster.Relocation
{
    public class RelocationComprehensiveMap : EntityTypeConfiguration<RelocationComprehensive>
    {


        public RelocationComprehensiveMap()
        {
            this.ToTable("RelocationComprehensives");
            this.HasKey(c => c.Id);

            //this.Property(c => c.名称).IsRequired();
            //this.Property(c => c.灾害类型).IsRequired();
            //this.Property(c => c.地理位置).IsRequired();

            this.HasRequired(c => c.GBCode)
           .WithMany().HasForeignKey(g => g.GBCodeId);

            this.HasRequired(c => c.DebrisFlow).WithRequiredPrincipal();

            this.HasRequired(c => c.LandCollapse).WithRequiredPrincipal();

            this.HasRequired(c => c.LandFracture).WithRequiredPrincipal();

            this.HasRequired(c => c.LandSlide).WithRequiredPrincipal();

            this.HasRequired(c => c.LandSlip).WithRequiredPrincipal();

            this.HasRequired(c => c.LandSubsidence).WithRequiredPrincipal();

            this.HasRequired(c => c.Slope).WithRequiredPrincipal();
        }
    }
}
