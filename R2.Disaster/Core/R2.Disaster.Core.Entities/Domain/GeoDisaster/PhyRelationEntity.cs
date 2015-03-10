using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster
{
    /// <summary>
    /// 表示同物理点相关的所有地质灾害实体基类
    /// </summary>
    public class PhyRelationEntity:GeoDisasterEntity
    {
        //public  PhyGeoDisaster PhyGeoDisaster { get; set; }
        public int PhyGeoDisasterId { get; set; }
    }
}
