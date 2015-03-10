using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁安置地评价表
    /// </summary>
    public class RelocationPlaceEvaluation:PhyRelationEntity
    {
        public virtual PhyGeoDisaster PhyGeoDisaster { get; set; }
        public int PhyGeoDisasterId { get; set; }

        public string 统一编号 { get; set; }
        public string 野外编号 { get; set; }
        public string 区市 { get; set; }
        public string 县市区 { get; set; }
        public string 乡镇场 { get; set; }
        public string 村组及地名 { get; set; }
        public string X { get; set; }
        public string Y { get; set; }
        public string 面积公顷 { get; set; }
        public string 安置规模户 { get; set; }
        public Nullable<double> 安置规模人 { get; set; }
        public string 主要环境地质问题 { get; set; }
        public string 防治建议 { get; set; }
        public string 适宜性 { get; set; }
        public string F16 { get; set; }
        public string F17 { get; set; }
        public string F18 { get; set; }
        public string F19 { get; set; }
        public string F20 { get; set; }
    }
}
