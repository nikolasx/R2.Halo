using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres
{
    public class MonthlyReport:PhyRelationEntity
    {
        public virtual PhyGeoDisaster PhyGeoDisaster { get; set; }
        //public int PhyGeoDisasterId { get; set; }
        
        /// <summary>
        /// 行政区编码
        /// </summary>
        public string GBCodeId { get; set; }
        /// <summary>
        /// 灾害类型
        /// </summary>
        public EnumGeoDisasterType 灾害类型 { get; set; }

        public string 市 { get; set; }
        public string 县 { get; set; }
        public string 地理位置 { get; set; }
        public string 经度 { get; set; }
        public string 纬度 { get; set; }
        public DateTime? 初始发现时间 { get; set; }
        public DateTime? 上报时间 { get; set; }
        public string 灾情险情类型 { get; set; }
        public string 达标情况 { get; set; }
        public string 灾害级别 { get; set; }
        public string 灾害规模 { get; set; }
        public string 潜在规模 { get; set; }
        public int 死亡人数 { get; set; }
        public int 失踪人数 { get; set; }
        public int 受伤人数 { get; set; }
        public double 直接经济损失万元 { get; set; }
        public int 威胁户数 { get; set; }
        public int 威胁人数 { get; set; }
        public int 撤离户数 { get; set; }
        public int 撤离人数 { get; set; }
        public double 潜在经济损失万元 { get; set; }
        public string 地质灾害发生情况 { get; set; }
        public string 成因及发展趋势 { get; set; }
        public string 防灾措施 { get; set; }
        public string 是否已列入防灾预案 { get; set; }
        public string 备注 { get; set; }
        public string 速报索引 { get; set; }

        public string 填报单位 { get; set; }
        public DateTime? 发生时间 { get;set;}
        public string 引发因素 { get; set; }
        public string 受灾对象 { get; set; }
        public int 受灾人口 { get; set; }
        public string 威胁对象 { get; set; }
        public string 首报人 { get; set; }
        public string 审定人 { get; set; }
        public string 审核人 { get; set; }
        public string 填表人 { get; set; }
        public string 图片路径 { get; set; }

        public bool 审核状态 { get; set; }
        public bool 是否发布 { get; set; }
    }
}
