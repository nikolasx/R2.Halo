using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;
using R2.Disaster.Service.GeoDisaster.Relocation;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁核查结果认定表（斜坡）
    /// </summary>
    public class RelocationSlopeCheckController:PhyRelationEntityController<RelocationSlopeCheck>
    {
        private IRelocationSlopeCheckService _slopeService;


        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="slopeService"></param>
        public RelocationSlopeCheckController(IRelocationSlopeCheckService slopeService)
            : base(slopeService)
        {
            this._slopeService = slopeService;
        }
    }
}