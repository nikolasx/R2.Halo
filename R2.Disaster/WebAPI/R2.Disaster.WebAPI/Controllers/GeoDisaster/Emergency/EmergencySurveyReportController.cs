using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Emergency;
using R2.Disaster.Service.GeoDisaster.Emergency;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.Emergency
{
    /// <summary>
    /// 应急调查报告
    /// </summary>
    public class EmergencySurveyReportController :PhyRelationEntityController<EmergencySurveyReport>
    {
        private IEmergencySurveyReportService _emergencyReportService;


        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="emergencyReportService"></param>
        public EmergencySurveyReportController(IEmergencySurveyReportService emergencyReportService)
            : base(emergencyReportService)
        {
            this._emergencyReportService = emergencyReportService;
        }
    }
}