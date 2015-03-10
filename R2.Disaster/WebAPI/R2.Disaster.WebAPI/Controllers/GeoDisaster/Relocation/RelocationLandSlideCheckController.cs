using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;
using R2.Disaster.Service.GeoDisaster.Relocation;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁核查结果认定表（滑坡）
    /// </summary>
    public class RelocationLandSlideCheckController : PhyRelationEntityController<RelocationLandSlideCheck>
    {
        private IRelocationLandSlideCheckService _landSlideService;

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="landSlideService"></param>
        public RelocationLandSlideCheckController(IRelocationLandSlideCheckService landSlideService)
            : base(landSlideService)
        {
            this._landSlideService = landSlideService;
        }
    }
}