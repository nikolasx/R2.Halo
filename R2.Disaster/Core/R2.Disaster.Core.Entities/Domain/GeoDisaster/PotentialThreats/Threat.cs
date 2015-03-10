using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.PotentialThreats
{
    /// <summary>
    /// 隐患点相关信息，江西地灾设定属性，其他项目可忽略
    /// </summary>
    public class Threat : PhyRelationEntity
    {
        //public int Id { get; set; }

        public virtual PhyGeoDisaster PhyGeoDisaster { get; set; }
        /// <summary>
        /// 隐患点来源
        /// </summary>
        public String ThreatSource { get; set; }

        public String SourceId { get; set; }

        /// <summary>
        /// 当前隐患点是否处于激活状态（隐患点有可能治理消除，也有可能再次成为隐患点）
        /// </summary>
        public bool IsActive { get; set; }

        /// <summary>
        /// 隐患状态，开放属性，自定义需要存储的信息
        /// </summary>
        public String ThreatStatus { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public String Memo { get; set; }

        /// <summary>
        /// 名称，不允许Null
        /// </summary>
        public String Name { get; set; }

        /// <summary>
        /// 灾害类型，不允许Null
        /// </summary>
        public EnumGeoDisasterType DisasterType { get; set; }

        public virtual GBCode GBCode { get; set; }
        public string GBCodeId { get; set; }

        /// <summary>
        /// 乡镇
        /// </summary>
        public String Towns { get; set; }

        /// <summary>
        /// 村
        /// </summary>
        public String Village { get; set; }

        /// <summary>
        /// 组
        /// </summary>
        public String Group { get; set; }

        /// <summary>
        /// 经度
        /// </summary>
        public double X { get; set; }

        /// <summary>
        /// 纬度
        /// </summary>
        public double Y { get; set; }

        public String 经度 { get; set; }
        public String 纬度 { get; set; }

        public int 规模 { get; set; }

        public int 威胁人口 { get; set; }

        public double 威胁财产 { get; set; }

        public String 监测人员 { get; set; }

        public String 监测人员手机 { get; set; }

        public String 村级责任人 { get; set; }

        public String 村级责任人手机 { get; set; }

        public String 潜在危害 { get; set; }

        public String 地质环境条件 { get; set; }

        public String 变形特征及活动历史 { get; set; }

        public String 稳定性分析 { get; set; }

        public String 诱发因素 { get; set; }

        public String 监测方法 { get; set; }

        public String 防止建议{get;set;}

        public String 报警方法{get;set;}

        public String 预定避灾地点{get;set;}

        public String 人员撤离路线{get;set;}

        public String 搬迁或治理现状 { get; set; }

        public String 相关图件照片 { get; set; }
    }
}
