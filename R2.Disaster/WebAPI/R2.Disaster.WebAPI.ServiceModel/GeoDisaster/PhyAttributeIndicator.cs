using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.WebAPI.ServiceModel.GeoDisaster
{
    /// <summary>
    /// 物理点的属性指示器，每个字段表明物理点是否拥有该属性
    /// </summary>
    public class PhyAttributeIndicator
    {
        public bool HasInvestigation { get; set; }
        public bool HasMassPatrols { get; set; }
        public bool HasEmergencySurveys { get; set; }
        public bool HasDamageReports { get; set; }
        public bool HasThreats { get; set; }
        public bool HasPrePlans { get; set; }
        public bool HasWorkingGuideCards { get; set; }
        public bool HasAvoidRiskCards { get; set; }
        public bool HasMassPres { get; set; }
    }
}
