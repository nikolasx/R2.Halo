using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres
{
    /// <summary>
    /// 地质灾害调查，群测群防避险卡
    /// </summary>
    public class AvoidRiskCard : PhyRelationEntity
    {
        public virtual PhyGeoDisaster PhyGeoDisaster { get; set; }

        //public int Id { get; set; }
        public string 统一编号 { get; set; }
        public string 名称 { get; set; }
        public string 野外编号 { get; set; }
        public string 规模 { get; set; }
        public string 位置关系 { get; set; }
        public string 诱发因素 { get; set; }
        public string 本住户注意事项 { get; set; }
        public string 监测人 { get; set; }
        public string 监测人联系电话 { get; set; }
        public string 预警信号 { get; set; }
        public string 预警信号发布人 { get; set; }
        public string 预警信号发布人联系电话 { get; set; }
        public string 撤离路线 { get; set; }
        public string 安置单位地点 { get; set; }
        public string 安置单位负责人 { get; set; }
        public string 安置单位联系电话 { get; set; }
        public string 救护单位 { get; set; }
        public string 救护单位负责人 { get; set; }
        public string 救护单位联系电话 { get; set; }
        public string 本卡发放单位 { get; set; }
        public string 本卡发放单位负责人 { get; set; }
        public string 本卡发放单位联系电话 { get; set; }
        public string 户主姓名 { get; set; }
        public int 家庭人数 { get; set; }
        public string 房屋类型 { get; set; }
        public string 家庭住址 { get; set; }
        public string 姓名1 { get; set; }
        public string 性别1 { get; set; }
        public string 年龄1 { get; set; }
        public string 姓名2 { get; set; }
        public string 性别2 { get; set; }
        public string 年龄2 { get; set; }
        public string 姓名3 { get; set; }
        public string 性别3 { get; set; }
        public string 年龄3 { get; set; }
        public string 姓名4 { get; set; }
        public string 性别4 { get; set; }
        public string 年龄4 { get; set; }
        public string 姓名5 { get; set; }
        public string 性别5 { get; set; }
        public string 年龄5 { get; set; }
        public string 姓名6 { get; set; }
        public string 性别6 { get; set; }
        public string 年龄6 { get; set; }
        public string 姓名7 { get; set; }
        public string 性别7 { get; set; }
        public string 年龄7 { get; set; }
        public string 姓名8 { get; set; }
        public string 性别8 { get; set; }
        public string 年龄8 { get; set; }
        public string 户主签名 { get; set; }
        public string 联系电话 { get; set; }
        public string 日期年 { get; set; }
        public string 日期月 { get; set; }
        public string 日期日 { get; set; }
        public string 编号 { get; set; }
    }
}
