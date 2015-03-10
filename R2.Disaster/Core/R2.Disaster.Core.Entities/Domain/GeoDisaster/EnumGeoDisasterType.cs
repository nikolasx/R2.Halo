using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster
{
    /// <summary>
    /// 地质灾害类型
    /// </summary>
    public enum EnumGeoDisasterType
    {
        /// <summary>
        /// 泥石流
        /// </summary>
         DebrisFlow=0x01,

        /// <summary>
        /// 地面塌陷
        /// </summary>
         LandCollapse=0x02,

        /// <summary>
        /// 地裂缝
        /// </summary>
        LandFracture=0x04,

        /// <summary>
        /// 滑坡
        /// </summary>
        LandSlide=0x8,

        /// <summary>
        /// 崩塌
        /// </summary>
        LandSlip=0x10,

        /// <summary>
        /// 地面沉降
        /// </summary>
        LandSubsidence=0x20,

        /// <summary>
        /// 斜坡
        /// </summary>
        Slope=0x40,
    }
}
