using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;
using R2.Disaster.Service.GeoDisaster.Relocation;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁安置地评价表
    /// </summary>
    public class RelocationPlaceEvaluationController : PhyRelationEntityController<RelocationPlaceEvaluation>
    {

        private IRelocationPlaceEvaluationService _evaluationService;


        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="evaluationService"></param>
        public RelocationPlaceEvaluationController(IRelocationPlaceEvaluationService evaluationService)
            : base(evaluationService)
        {
            this._evaluationService = evaluationService;
        }
    }
}