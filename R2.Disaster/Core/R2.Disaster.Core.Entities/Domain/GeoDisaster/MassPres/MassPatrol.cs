using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres
{
    /// <summary>
    /// 地质灾害巡查实体
    /// </summary>
    public class MassPatrol : PhyRelationEntity
    {
        //public int Id { get; set; }
        public virtual PhyGeoDisaster PhyGeoDisaster { get; set; }


        /// <summary>
        ///  巡查时间
        /// </summary>
       public  DateTime PatrolTime { get; set; }
        /// <summary>
        /// 天气情况
        /// </summary>
       public String Weather { get; set; }
        /// <summary>
        /// 巡查单位
        /// </summary>
       public String PatrolUnit { get; set; }
        /// <summary>
        /// 巡查人员
        /// </summary>
       public String PatrolPerson { get; set; }
        /// <summary>
        /// 巡查情况
        /// </summary>
       public String PatrolStatus { get; set; }
        /// <summary>
        /// 出现问题
        /// </summary>
       public String PatrolIssue { get; set; }
        /// <summary>
        /// 处理措施
        /// </summary>
       public String ProcessIssue { get; set; }
    }
}
