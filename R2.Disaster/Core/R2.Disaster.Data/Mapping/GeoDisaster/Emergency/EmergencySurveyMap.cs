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
    public class EmergencySurveyMap : EntityTypeConfiguration<EmergencySurvey>
    {
        public EmergencySurveyMap()
        {
            this.ToTable("EmergencySurveys");
            this.HasKey(e => e.Id);

            this.Property(e=>e.应急调查点).IsRequired();

            //this.HasRequired(d => d.Comprehensive)
            //    .WithMany(c => c.DamageReports)
            //    .HasForeignKey(d => d.ComprehensiveId);
        }
    }
}
