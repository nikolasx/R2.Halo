using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁核查表
    /// </summary>
    public class RelocationDebrisFlowCheck:PhyRelationEntity
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
        public string 已发生地质灾害发生时间 { get; set; }
        public string 已发生地质灾害体积 { get; set; }
        public string 已发生地质灾害规模等级 { get; set; }
        public string 已发生地质灾害伤人 { get; set; }
        public string 已发生地质灾害亡人 { get; set; }
        public string 已发生地质灾害损失万元 { get; set; }
        public string 已发生地质灾害灾情等级 { get; set; }
        public string 主要评价因子不良地质现象 { get; set; }
        public string 主要评价因子沟口扇形地 { get; set; }
        public string 主要评价因子主沟纵坡 { get; set; }
        public string 主要评价因子植被覆盖率 { get; set; }
        public string 主要评价因子冲淤变幅 { get; set; }
        public string 主要评价因子地层岩浆岩代号 { get; set; }
        public string 主要评价因子地层岩浆岩岩性 { get; set; }
        public string 主要评价因子松散物平均厚 { get; set; }
        public string 主要评价因子松散物储量 { get; set; }
        public string 主要评价因子山坡坡度 { get; set; }
        public string 主要评价因子流域面积 { get; set; }
        public string 主要评价因子堵塞程度 { get; set; }
        public string 潜在地质灾害易发程度 { get; set; }
        public string 潜在地质灾害体积 { get; set; }
        public string 潜在地质灾害规模等级 { get; set; }
        public string 潜在地质灾害威胁户 { get; set; }
        public string 潜在地质灾害威胁人 { get; set; }
        public string 潜在地质灾害威胁资产 { get; set; }
        public string 潜在地质灾害危害等级 { get; set; }
        public string 原来上报搬迁户 { get; set; }
        public string 原来上报搬迁人 { get; set; }
        public string 防治工程现状 { get; set; }
        public string 防治工程建议 { get; set; }
    }
}
