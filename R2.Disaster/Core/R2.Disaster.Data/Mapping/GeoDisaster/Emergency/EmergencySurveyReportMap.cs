using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Emergency;

namespace R2.Disaster.Data.Mapping.GeoDisaster.Emergency
{
    public class EmergencySurveyReportMap : EntityTypeConfiguration<EmergencySurveyReport>
    {
        public EmergencySurveyReportMap()
        {
            this.ToTable("EmergencySurveyReports");
            this.HasKey(d => d.Id);



            this.HasRequired(d => d.PhyGeoDisaster)
                .WithMany(p => p.EmergencySurveyReports)
                .HasForeignKey(d => d.PhyGeoDisasterId);
        }
    }
}
