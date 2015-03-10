using R2.Disaster.CoreEntities.Domain.GeoDisaster.Emergency;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.PotentialThreats;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster
{
    /// <summary>
    /// 地质灾害物理点
    /// </summary>
    public class PhyGeoDisaster:BaseEntity
    {
        private bool _deleted = false;

        //public int Id { get; set; }

        /// <summary>
        /// 物理点表示名称
        /// 这个名称和地质调查综合表中的名称可以不同
        /// </summary>
        public String Name { get; set; }

        /// <summary>
        /// 地理位置描述，必要属性，不允许Null
        /// </summary>
        public String Location { get; set; }

        /// <summary>
        /// 经度，X
        /// </summary>
        public double Lon { get; set; }

        /// <summary>
        /// 纬度，Y
        /// </summary>
        public double Lat { get; set; }

        /// <summary>
        /// 行政区编码，必要属性，不允许Null
        /// </summary>
        public virtual GBCode GBCode { get; set; }
        public string GBCodeId { get; set; }

        /// <summary>
        /// 灾害类型，必要属性，不允许Null
        /// </summary>
        public EnumGeoDisasterType DisasterType { get; set; }

        ///// <summary>
        ///// 是否已进行了基础调查，并包含有地质调查的数据，默认为已进行地质调查
        ///// </summary>
        //public bool? Investigated { get; set; }

        /// 标示一个灾害点是否被删除（大部分的删除操作只修改此状态，不做物理删除）
        /// </summary>
        public bool Deleted
        {
            get { return _deleted; }
            set { _deleted = value; }
        }

        /// <summary>
        /// 群测群防基本信息
        /// </summary>
        public virtual ICollection<MassPre> MassPres { get; set; }

        /// <summary>
        /// 避险明白卡
        /// </summary>
        public virtual ICollection<AvoidRiskCard> AvoidRiskCards { get; set; }

        /// <summary>
        /// 工作明白卡
        /// </summary>
        public virtual ICollection<WorkingGuideCard> WorkingGuideCards { get; set; }


        /// <summary>
        /// 防灾预案
        /// </summary>
        public virtual ICollection<PrePlan> PrePlans { get; set; }

        /// <summary>
        /// 隐患
        /// </summary>
        public virtual ICollection<Threat> Threats { get; set; }

        /// <summary>
        /// 灾情速报
        /// </summary>
        public virtual ICollection<DamageReport> DamageReports { get; set; }

        /// <summary>
        /// 应急调查
        /// </summary>
        public virtual ICollection<EmergencySurvey> EmergencySurveys { get; set; }

        /// <summary>
        /// 群测群防巡查记录
        /// </summary>
        public virtual ICollection<MassPatrol> MassPatrols { get; set; }

        /// <summary>
        /// 基础调查信息
        /// </summary>
        public virtual ICollection<Comprehensive> Comprehensives { get; set; }

        /// <summary>
        /// 应急调查报告
        /// </summary>
        public virtual ICollection<EmergencySurveyReport> EmergencySurveyReports { get; set; }

        /// <summary>
        /// 移民搬迁信息综合表
        /// </summary>
        public virtual ICollection<RelocationComprehensive> RelocationComprehensives { get; set; }

        /// <summary>
        /// 移民搬迁核查结果认定表（崩塌）
        /// </summary>
        public virtual ICollection<RelocationLandSlipCheck> RelocationLandSlipChecks { get; set; }

        /// <summary>
        /// 移民搬迁核查结果认定表（滑坡）
        /// </summary>
        public virtual ICollection<RelocationLandSlideCheck> RelocationLandSlideChecks { get; set; }

        /// <summary>
        /// 移民搬迁核查结果认定表（泥石流）
        /// </summary>
        public virtual ICollection<RelocationDebrisFlowCheck> RelocationDebrisFlowChecks { get; set; }

        /// <summary>
        /// 移民搬迁核查结果认定表（斜坡）
        /// </summary>
        public virtual ICollection<RelocationSlopeCheck> RelocationSlopeChecks { get; set; }

        /// <summary>
        /// 移民搬迁核查结果认定表（地面塌陷）
        /// </summary>
        public virtual ICollection<RelocationLandCollapseCheck> RelocationLandCollapseChecks { get; set; }

        /// <summary>
        /// 移民搬迁安置地评价表
        /// </summary>
        public virtual ICollection<RelocationPlaceEvaluation> RelocationPlaceEvaluations { set; get; }

        /// <summary>
        /// 月报速报
        /// </summary>
        public virtual ICollection<MonthlyReport> MonthlyReports { get; set; }
    }
}
