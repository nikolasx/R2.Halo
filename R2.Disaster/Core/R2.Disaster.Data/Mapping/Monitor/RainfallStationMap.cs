using R2.Disaster.CoreEntities.Domain.GeoDisaster.Monitor;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.Data.Mapping.Monitor
{
    public class RainfallStationMap : EntityTypeConfiguration<RainfallStation>
    {
        public RainfallStationMap()
        {
            this.ToTable("RainfallStations");
            this.HasKey(r => r.Id);

            this.HasRequired(r => r.GBCode)
           .WithMany().HasForeignKey(r => r.GBCodeId);
        }
    }
}
