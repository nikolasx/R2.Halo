using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Monitor
{
    public class ForecastRainfall:BaseEntity
    {
        //public int Id { get; set; }
        /// <summary>
        /// 24H，48H，72H
        /// </summary>
        public String DayFlag { get; set; }
        public DateTime Time { get; set; }
        public String StationId { get; set; }
        public double Value { get; set; }
    }
}
