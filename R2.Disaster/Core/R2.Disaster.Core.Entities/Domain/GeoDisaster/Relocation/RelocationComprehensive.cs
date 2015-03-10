using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation 
{
    /// <summary>
    /// 移民搬迁工程综合表
    /// </summary>
    public class RelocationComprehensive:PhyRelationEntity
    {



        //public virtual PhyGeoDisaster PhyGeoDisaster { get; set; }
        public int PhyGeoDisasterId { get; set; }

        /// <summary>
        /// 泥石流
        /// </summary>
        public virtual RelocationDebrisFlow DebrisFlow { get; set; }
        /// <summary>
        /// 地面沉降
        /// </summary>
        public virtual RelocationLandSubsidence LandSubsidence { get; set; }

        /// <summary>
        /// 崩塌
        /// </summary>
        public virtual RelocationLandSlip LandSlip { get; set; }

        /// <summary>
        /// 斜坡
        /// </summary>
        public virtual RelocationSlope Slope { get; set; }

        /// <summary>
        /// 滑坡
        /// </summary>
        public virtual RelocationLandSlide LandSlide { get; set; }

        /// <summary>
        /// 地面塌陷
        /// </summary>
        public virtual RelocationLandCollapse LandCollapse { get; set; }

        /// <summary>
        /// 地裂缝
        /// </summary>
        public virtual RelocationLandFracture LandFracture { get; set; }


        ///// <summary>
        ///// 主键编号
        ///// </summary>
        //public int Id { get; set; }

        /// <summary>
        /// 统一编号
        /// </summary>
        public string 统一编号 { get; set; }

        /// <summary>
        /// 灾害类型
        /// </summary>
        public virtual EnumGeoDisasterType 灾害类型 { get; set; }

        /// <summary>
        /// 行政区编码
        /// </summary>
        public virtual GBCode GBCode { get; set; }

        /// <summary>
        /// 行政区编码外键标示
        /// </summary>
        public string GBCodeId { get; set; }




        public string 地理位置 { get; set; }

        public string 名称 { get; set; }
        public string 经度 { get; set; }
        public string 纬度 { get; set; }
        public int 死亡人数 { get; set; }
        public int 威胁人口 { get; set; }

        public double 直接经济损失 { get; set; }
        public double 威胁财产 { get; set; }
        public string 目前稳定状态 { get; set; }
        public string 规模等级 { get; set; }

        public string 灾情等级 { get; set; }
        public string 险情等级 { get; set; }
        public double X坐标 { get; set; }
        public double Y坐标 { get; set; }
        public double 灾害体积 { get; set; }
        public double 灾害面积 { get; set; }
        public double 标高 { get; set; }
        public string 今后变化趋势 { get; set; }
        public string 危害程度 { get; set; }
    }
}
