using R2.Disaster.CoreEntities.Domain.GeoDisaster;
using System;

namespace R2.Disaster.WebAPI.Model
{
    /// <summary>
    /// 地质灾害物理点简要信息
    /// </summary>
    public class PhyGeoDisasterSimplify
    {
        public int Id { get; set; }
        /// <summary>
        /// 地理位置描述，必要属性，不允许Null
        /// </summary>
        public String Location { get; set; }

        /// <summary>
        /// 行政区编码，必要属性，不允许Null
        /// </summary>
        public GBCode GBCode { get; set; }

        /// <summary>
        /// 灾害类型
        /// </summary>
        public EnumGeoDisasterType DisasterType { get; set; }

        ///// <summary>
        ///// 是否已进行了基础调查，并包含有地质调查的数据，必要属性，不允许为null
        ///// </summary>
        //public bool? Investigated { get; set; }

        /// 标示一个灾害点是否被删除（大部分的删除操作只修改此状态，不做物理删除）
        /// </summary>
        public bool Deleted { get; set; }
    }
}
