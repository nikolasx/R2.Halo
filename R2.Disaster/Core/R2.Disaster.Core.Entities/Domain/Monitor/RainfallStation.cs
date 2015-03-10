using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Monitor
{
    public class RainfallStation:BaseEntity
    {
        /// <summary>
        /// 雨量站编号
        /// </summary>
        public String StationId { get; set; }

        /// <summary>
        /// 经度
        /// </summary>
        public double Lon { get; set; }

        /// <summary>
        /// 纬度
        /// </summary>
        public double Lat { get; set; }

        /// <summary>
        /// 站点名称
        /// </summary>
        public string StationName { get; set; }

        /// <summary>
        /// 站点地址
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// 站点行政区编号
        /// </summary>
        public virtual GBCode GBCode { get; set; }
        public String GBCodeId { get; set; }
    }
}
