using R2.Disaster.CoreEntities.Domain.GeoDisaster.Monitor;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.Data.Mapping.Monitor
{
    public class RainfallMap : EntityTypeConfiguration<Rainfall>
    {
        public RainfallMap()
        {
            this.ToTable("Rainfalls");
            this.HasKey(r => r.Id);

            this.HasRequired(r => r.RainfallStation)
                .WithMany()
                .HasForeignKey(r => r.RallfallStationId);
        }
    }
}
