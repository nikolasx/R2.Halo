using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres
{
    /// <summary>
    /// 地质灾害调查，群测群防实体，不合理，不能用作标准，根据实际情况调整
    /// </summary>
    public class MassPre : PhyRelationEntity
    {
        public virtual PhyGeoDisaster PhyGeoDisaster { get; set; }

        //public int Id { get; set; }



        public string 统一编号 { get; set; }
        public string 名称 { get; set; }
        public string 县名 { get; set; }

        public string 经度 { get; set; }
        public string 纬度 { get; set; }
        public double 规模 { get; set; }
        public double 长度 { get; set; }
        public double 宽度 { get; set; }
        public double 厚度 { get; set; }
        public int 威胁人口 { get; set; }
        public double 威胁财产 { get; set; }
        public string 危胁程度等级 { get; set; }
        public string 险情预测 { get; set; }
        public string 地质条件 { get; set; }
        public string 历史活动情况 { get; set; }
        public string 发展趋势预测 { get; set; }
        public string 可能诱发因素 { get; set; }
        public string 监测重点 { get; set; }
        public string 监测手段 { get; set; }
        public string 应急防御措施 { get; set; }
        public string 预定报警方式 { get; set; }
        public string 预定避灾地点 { get; set; }
        public string 预定疏散路线 { get; set; }
        public string 防灾责任单位及责任人 { get; set; }
        public string 防灾责任人电话 { get; set; }
        public string 监测责任人 { get; set; }
        public string 监测责任人电话 { get; set; }
    }
}
