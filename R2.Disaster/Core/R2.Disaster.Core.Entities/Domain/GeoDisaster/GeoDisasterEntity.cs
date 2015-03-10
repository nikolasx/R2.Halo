using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster
{
    /// <summary>
    /// 灾害相关的实体基类
    /// </summary>
    public class GeoDisasterEntity:BaseEntity
    {
        /// <summary>
        /// 数据录入时间
        /// </summary>
        public DateTime? RecordTime { get; set; }

        /// <summary>
        /// 数据是否已通过审核
        /// </summary>
        public bool Examined { get; set; }
    }
}
