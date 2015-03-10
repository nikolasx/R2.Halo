using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation
{
    public class RelocationLandCollapseCheck : PhyRelationEntity
    {
        public virtual PhyGeoDisaster phyGeoDisaster { get; set; }
        //public int PhyGeoDisasterId { get; set; }

        public string 统一编号 { get; set; }
        public string 野外编号 { get; set; }
        public string 点类型 { get; set; }
        public string 设区市 { get; set; }
        public string 县市区 { get; set; }
        public string 乡镇场 { get; set; }
        public string 村组及地名 { get; set; }
        public string X { get; set; }
        public string Y { get; set; }
        public string 高程 { get; set; }
        public string 地层代号 { get; set; }
        public string 基岩岩性 { get; set; }
        public string 覆盖层厚度 { get; set; }
        public string 覆盖层结构 { get; set; }
        public string 覆盖层上部岩性 { get; set; }
        public string 覆盖层下部岩性 { get; set; }
        public string 地下水类型 { get; set; }
        public string 地下水埋深 { get; set; }
        public string 已发生地质灾害发生时间 { get; set; }
        public string 已发生地质灾害坑数 { get; set; }
        public string 已发生地质灾害面积 { get; set; }
        public string 已发生地质灾害规模等级 { get; set; }
        public string 已发生地质灾害伤人 { get; set; }
        public string 已发生地质灾害亡人 { get; set; }
        public string 已发生地质灾害损失万元 { get; set; }
        public string 已发生地质灾害灾情等级 { get; set; }
        public string 潜在地质灾害稳定等级 { get; set; }
        public string 潜在地质灾害面积 { get; set; }
        public string 潜在地质灾害规模等级 { get; set; }
        public string 潜在地质灾害威胁户 { get; set; }
        public string 潜在地质灾害人 { get; set; }
        public string 潜在地质灾害威胁资产 { get; set; }
        public string 潜在地质灾害危害等级 { get; set; }
        public string 原来上报搬迁户 { get; set; }
        public string 原来上报搬迁人 { get; set; }
        public string 防治工程现状 { get; set; }
        public string 防治工程建议 { get; set; }
    }
}
