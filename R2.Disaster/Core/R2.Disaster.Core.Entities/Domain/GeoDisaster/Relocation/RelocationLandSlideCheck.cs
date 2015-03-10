using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation
{
    public class RelocationLandSlideCheck:PhyRelationEntity
    {

        public virtual PhyGeoDisaster phyGeoDisaster { get; set; }
        //public int PhyGeoDisasterId { get; set; }

        //public int ID { get; set; }
        public string 统一编号 { get; set; }
        public string 野外编号 { get; set; }
        public string 设区市 { get; set; }
        public string 县市区 { get; set; }
        public string 乡镇场 { get; set; }
        public string 村组及地名 { get; set; }
        public string X { get; set; }
        public string Y { get; set; }
        public string 高程 { get; set; }
        public string 地层岩浆岩代号 { get; set; }
        public string 地层岩浆岩岩性 { get; set; }
        public string 覆盖层岩性 { get; set; }
        public string 覆盖层厚度 { get; set; }
        public string 原始斜坡坡高 { get; set; }
        public string 原始斜坡坡度 { get; set; }
        public string 人工切坡坡高 { get; set; }
        public string 人工切坡坡度 { get; set; }
        public string 已发生地质灾害_发生日期 { get; set; }
        public string 已发生地质灾害_滑体性质 { get; set; }
        public string 已发生地质灾害_体积 { get; set; }
        public string 已发生地质灾害_规模等级 { get; set; }
        public string 已发生地质灾害_伤人 { get; set; }
        public string 已发生地质灾害_亡人 { get; set; }
        public string 已发生地质灾害_损失万元 { get; set; }
        public string 已发生地质灾害_灾情等级 { get; set; }
        public string 潜在地质灾害_稳定等级 { get; set; }
        public string 潜在地质灾害_体积 { get; set; }
        public string 潜在地质灾害_规模等级 { get; set; }
        public string 潜在地质灾害_威胁户数 { get; set; }
        public string 潜在地质灾害_威胁人数 { get; set; }
        public string 潜在地质灾害_威胁资产 { get; set; }
        public string 潜在地质灾害_危害等级 { get; set; }
        public string 原来上报搬迁_户 { get; set; }
        public string 原来上报搬迁_人 { get; set; }
        public string 防治工程_现状 { get; set; }
        public string 防治工程_建议 { get; set; }
    }
}
