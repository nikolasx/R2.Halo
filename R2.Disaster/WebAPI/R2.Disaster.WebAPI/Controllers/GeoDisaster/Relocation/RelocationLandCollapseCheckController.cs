using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;
using R2.Disaster.Service.GeoDisaster.Relocation;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁核查结果认定表（地面塌陷）
    /// </summary>
    public class RelocationLandCollapseCheckController : PhyRelationEntityController<RelocationLandCollapseCheck>
    {

        private IRelocationLandCollapseCheckService _landCollapseService;

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="landCollapseService"></param>
        public RelocationLandCollapseCheckController(IRelocationLandCollapseCheckService landCollapseService)
            : base(landCollapseService)
        {
            this._landCollapseService = landCollapseService;
        }
    }
}