using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Emergency
{

    /// <summary>
    /// 应急调查报告实体
    /// </summary>
    public class EmergencySurveyReport:PhyRelationEntity
    {
        public PhyGeoDisaster PhyGeoDisaster { get; set; }
        //public int PhyGeoDisasterId { get; set; }

        /// <summary>
        /// 行政区编码
        /// </summary>
        public string GBCodeId { get; set; }

        public int 报告年份 { get; set; }
        public string 报告名称 { get; set; }
        public string 统一编号 { get; set; }
        public string 灾点名称 { get; set; }
        public EnumGeoDisasterType 灾害类型 { get; set; }
        public string 设区市 { get; set; }
        public string 县 { get; set; }
        public string 乡镇 { get; set; }
        public string 村 { get; set; }
        public string 组 { get; set; }
        public string 经度 { get; set; }
        public string 纬度 { get; set; }
        public double X坐标 { get; set; }
        public double Y坐标 { get; set; }
        public string 调查单位 { get; set; }
        public DateTime? 调查时间 { get; set; }
        public string 图件文件夹名称 { get; set; }
        public bool? 是否历史数据 { get; set; }
        public string 文档位置 { get; set; }
    }
}
