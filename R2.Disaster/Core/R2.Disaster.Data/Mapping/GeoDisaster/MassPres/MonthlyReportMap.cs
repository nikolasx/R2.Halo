using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres;

namespace R2.Disaster.Data.Mapping.GeoDisaster.MassPres
{
    public class MonthlyReportMap : EntityTypeConfiguration<MonthlyReport>
    {
        public MonthlyReportMap()
        {
            this.ToTable("MonthlyReports");
            this.HasKey(d => d.Id);

            //this.Property(d => d.地理位置).IsRequired();
            //this.Property(d => d.灾害类型).IsRequired();

            this.HasRequired(d => d.PhyGeoDisaster)
                .WithMany(p => p.MonthlyReports)
                .HasForeignKey(d => d.PhyGeoDisasterId);
        }
    }
}
