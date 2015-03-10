using R2.Disaster.CoreEntities.Domain.GeoDisaster.PotentialThreats;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.Data.Mapping.GeoDisaster.PotentialThreats
{
    public class ThreatMap : EntityTypeConfiguration<Threat>
    {
       public ThreatMap()
        {
            this.ToTable("Threats");
            this.HasKey(t => t.Id);

            this.Property(t=> t.Name).IsRequired();
            this.Property(t => t.DisasterType).IsRequired();

            this.HasRequired(c => c.GBCode)
       .WithMany().HasForeignKey(g => g.GBCodeId);
        }
    }
}
