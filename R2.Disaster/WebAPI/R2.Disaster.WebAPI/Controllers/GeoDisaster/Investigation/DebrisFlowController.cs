using AutoMapper;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using R2.Disaster.Service.GeoDisaster.Investigation;
using R2.Disaster.WebAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.Investigation
{
    /// <summary>
    /// 泥石流接口
    /// </summary>
    public class DebrisFlowController : EntityControllerBase<DebrisFlow, int>
    {
        private IDebrisFlowService _debrisFlowService;

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="debirsFlowService"></param>
        public DebrisFlowController(IDebrisFlowService debirsFlowService)
            : base(debirsFlowService)
        {
            this._debrisFlowService = debirsFlowService;
        }

        /// <summary>
        /// 通过主键编号获取实体模型
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public DebrisFlowModel GetById(int id)
        {
            if (id <= 0)
                throw new Exception("主键编号不应该为负数或者0");
            DebrisFlow debris = this._debrisFlowService.Get(id);
            DebrisFlowModel model = Mapper.Map<DebrisFlow, DebrisFlowModel>(debris);
            return model;
        }
        // GET api/debrisflow

    }
}
