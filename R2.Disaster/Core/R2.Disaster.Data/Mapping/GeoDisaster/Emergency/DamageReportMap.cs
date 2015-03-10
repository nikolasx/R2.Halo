using R2.Disaster.CoreEntities.Domain.GeoDisaster.Emergency;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.Data.Mapping.GeoDisaster.Investigation.Emergency
{
    public class DamageReportMap : EntityTypeConfiguration<DamageReport>
    {
        public DamageReportMap()
        {
            this.ToTable("DamageReports");
            this.HasKey(d => d.Id);

            this.Property(d=>d.灾险情地点).IsRequired();
            this.Property(d => d.发生时间).IsRequired();

            //this.HasRequired(d => d.PhyGeoDisaster)
            //    .WithMany(p=> p.DamageReports)
            //    .HasForeignKey(d => d.PhyGeoDisasterId);
        }
    }
}
