using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation
{
    public class RelocationSlopeCheck:PhyRelationEntity
    {

        public virtual PhyGeoDisaster phyGeoDisaster { get; set; }
        //public int PhyGeoDisasterId { get; set; }

        public string 统一编号 { get; set; }
        public string 野外编号 { get; set; }
        public string 设区市 { get; set; }
        public string 县市区 { get; set; }
        public string 乡镇场 { get; set; }
        public string 村组及地名 { get; set; }
        public string x { get; set; }
        public string y { get; set; }
        public string 高程 { get; set; }
        public string 斜坡类型 { get; set; }
        public string 地层岩浆岩代号 { get; set; }
        public string 地层岩浆岩岩性 { get; set; }
        public string 覆盖层岩性 { get; set; }
        public string 覆盖层厚度 { get; set; }
        public string 原始斜坡坡高 { get; set; }
        public string 原始斜坡坡度 { get; set; }
        public string 人工切坡坡高 { get; set; }
        public string 人工切坡坡度 { get; set; }
        public string 潜在地质灾害灾害类型 { get; set; }
        public string 潜在地质灾害稳定等级 { get; set; }
        public string 潜在地质灾害体积 { get; set; }
        public string 潜在地质灾害规模等级 { get; set; }
        public string 潜在地质灾害威胁户 { get; set; }
        public string 潜在地质灾害威胁人 { get; set; }
        public string 潜在地质灾害威胁财产 { get; set; }
        public string 潜在地质灾害危害等级 { get; set; }
        public string 原来上报搬迁户 { get; set; }
        public string 原来上报搬迁人 { get; set; }
        public string 防治工程现状 { get; set; }
        public string 防治工程建议 { get; set; }
    }
}
