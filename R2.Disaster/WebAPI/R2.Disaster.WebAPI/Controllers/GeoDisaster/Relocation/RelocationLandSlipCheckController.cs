using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;
using R2.Disaster.Service.GeoDisaster.Relocation;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁核查结果认定表（崩塌）
    /// </summary>
    public class RelocationLandSlipCheckController : PhyRelationEntityController<RelocationLandSlipCheck>
    {
        private IRelocationLandSlipCheckService _landSlipService;

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="landSlipService"></param>
        public RelocationLandSlipCheckController(IRelocationLandSlipCheckService landSlipService)
            : base(landSlipService)
        {
            this._landSlipService = landSlipService;
        }
    }
}