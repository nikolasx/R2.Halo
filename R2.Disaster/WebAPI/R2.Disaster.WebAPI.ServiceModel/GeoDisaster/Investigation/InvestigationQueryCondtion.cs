using R2.Disaster.CoreEntities.Domain.GeoDisaster;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.WebAPI.ServiceModel.GeoDisaster.Investigation
{
    /// <summary>
    /// 用于多条件查询的Http Body类别
    /// </summary>
    public class InvestigationQueryCondition
    {
        public List<EnumGeoDisasterType?> Types { get; set; }
        public List<String> GbCodes { get; set; }
        public List<String> DangerLevs { get; set; }
        public List<String> SituationLevs { get; set; }
    }
}
