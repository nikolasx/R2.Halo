using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;
using R2.Disaster.Service.GeoDisaster.Relocation;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁核查结果认定表（泥石流）
    /// </summary>
    public class RelocationDebrisFlowCheckController : PhyRelationEntityController<RelocationDebrisFlowCheck>
    {

        private IRelocationDebrisFlowCheckService _debrisFlowService;


        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="debrisFlowService"></param>
        public RelocationDebrisFlowCheckController(IRelocationDebrisFlowCheckService debrisFlowService)
            : base(debrisFlowService)
        {
            this._debrisFlowService = debrisFlowService;
        }
    }
}