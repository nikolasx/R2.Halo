using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;

namespace R2.Disaster.Data.Mapping.GeoDisaster.Relocation
{
    class RelocationLandSlipCheckMap : EntityTypeConfiguration<RelocationLandSlipCheck>
    {

        public RelocationLandSlipCheckMap()
        {
            this.ToTable("RelocationLandSlipChecks");
            this.HasKey(c=>c.Id);

            this.HasRequired(d => d.phyGeoDisaster)
                .WithMany(p => p.RelocationLandSlipChecks)
                .HasForeignKey(d => d.PhyGeoDisasterId);
        }
    }
}
