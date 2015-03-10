using R2.Disaster.CoreEntities.Domain.GeoDisaster;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.WebAPI.ServiceModel.GeoDisaster
{
    public class PhyGeoDisasterQueryCondition
    {
        public List<EnumGeoDisasterType?> Types { get; set; }
        public List<String> GBCodes { get; set; }
    }
}
