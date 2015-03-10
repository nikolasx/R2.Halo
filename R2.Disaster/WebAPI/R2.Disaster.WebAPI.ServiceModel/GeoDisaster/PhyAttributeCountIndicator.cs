using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.WebAPI.ServiceModel.GeoDisaster
{
    /// <summary>
    /// 物理点的属性指示器，每个字段表明物理点每个属性值的数量（1对1属性为1个）
    /// </summary>
    public class PhyAttributeCountIndicator
    {
        public int Investigations { get; set; }
        public int MassPatrols { get; set; }
        public int EmergencySurveys { get; set; }
        public int DamageReports { get; set; }
        public int Threats { get; set; }
        public int PrePlans { get; set; }
        public int WorkingGuideCards { get; set; }
        public int AvoidRiskCards { get; set; }
        public int MassPres { get; set; }
        public int EmergencySurveyReports { get; set; }
        public int RelocationComprehensives { get; set; }
        public int RelocationLandSlipChecks { get; set; }
        public int RelocationLandSlideChecks { get; set; }
        public int RelocationDebrisFlowChecks { get; set; }
        public int RelocationSlopeChecks { get; set; }
        public int RelocationLandCollapseChecks { get; set; }
        public int RelocationPlaceEvaluations { get; set; }
        public int MonthlyReports { get; set; }
    }
}
