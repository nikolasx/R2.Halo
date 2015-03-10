using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres;
using R2.Disaster.Service.GeoDisaster.MassPres;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.MassPres
{
    /// <summary>
    /// 月报速报基本服务
    /// </summary>
    public class MonthlyReportController:PhyRelationEntityController<MonthlyReport>
    {
        private IMonthlyReportService _monthlyReportService;



        /// <summary>
        /// 构造函数
        /// </summary>
        public MonthlyReportController(IMonthlyReportService monthlyReportService)
            : base(monthlyReportService)
        {
            this._monthlyReportService = monthlyReportService;
        }
    }
}