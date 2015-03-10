using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Monitor
{
    public class Rainfall:BaseEntity
    {
        //public long Id { get; set; }
        public int RallfallStationId { get; set; }
        public DateTime CollectTime { get; set; }
        public double Value { get; set; }
        public virtual RainfallStation RainfallStation { get; set; }
    }
}
