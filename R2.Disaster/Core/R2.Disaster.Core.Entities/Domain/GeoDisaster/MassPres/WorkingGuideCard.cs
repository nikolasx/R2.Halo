using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using System;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres
{
    /// <summary>
    /// 地质灾害调查，群测群防工作卡
    /// </summary>
    public class WorkingGuideCard : PhyRelationEntity
    {

        public virtual PhyGeoDisaster PhyGeoDisaster { get; set; }
        //public int Id { get; set; }
        public string 名称 { get; set; }
        public string 野外编号 { get; set; }
        public string 统一编号 { get; set; }
        public string 灾害位置 { get; set; }
        public string 类型及规模 { get; set; }
        public string 诱发因素 { get; set; }
        public string 威胁对象 { get; set; }
        public string 监测负责人 { get; set; }
        public string 监测负责人联系电话 { get; set; }
        public string 监测的主要迹象 { get; set; }
        public string 监测的主要手段和方法 { get; set; }
        public string 临灾预报的判据 { get; set; }
        public string 预定避灾地点 { get; set; }
        public string 预定疏散路线 { get; set; }
        public string 预定报警信号 { get; set; }
        public string 疏散命令发布人 { get; set; }
        public string 疏散值班电话 { get; set; }
        public string 抢排险单位及负责人 { get; set; }
        public string 抢排险值班电话 { get; set; }
        public string 治安保卫单位及负责人 { get; set; }
        public string 治安保卫值班电话 { get; set; }
        public string 医疗救护单位及负责人 { get; set; }
        public string 医疗救护值班电话 { get; set; }
        public string 本卡发放单位 { get; set; }
        public string 本卡发放单位联系电话 { get; set; }
        public DateTime  发放日期 { get; set; }
        public string 持卡单位或个人 { get; set; }
        public string 持卡单位或个人联系电话 { get; set; }
        public DateTime 持卡日期 { get; set; }
    }
}
