using R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres;
using R2.Disaster.Service.GeoDisaster.MassPres;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.MassPres
{
    /// <summary>
    /// 防灾预案相关服务
    /// </summary>
    public class PrePlanController :PhyRelationEntityController<PrePlan>
    {
        private IPrePlanService _preplanService;

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="preplanService"></param>
        public PrePlanController(IPrePlanService preplanService )
            :base(preplanService)
        {
            this._preplanService = preplanService;
        }

        /// <summary>
        /// 通过主键编号查询
        /// <param name="id">主键编号</param>
        /// </summary>
        /// <returns></returns>
        public PrePlan Get(int id)
        {
                 if (id <= 0)
                throw new Exception("不存在这样的主键编号");
            //return new string[] { "value1", "value2" };
                 PrePlan plan=this._preplanService.Get(id);
                 return plan;
        }

        /// <summary>
        /// 通过Phy物理点编号查询
        /// </summary>
        /// <param name="id">物理点相关唯一编号</param>
        /// <returns></returns>
        public PrePlan GetByPhyId(int id)
        {
            if (id <= 0)
                throw new Exception("不存在这样的主键编号");
            PrePlan plan = this._preplanService.GetByPhyId(id);
            return plan;
        }

        /// <summary>
        /// 通过统一编号查询
        /// </summary>
        /// <param name="uid">统一编号编码</param>
        /// <returns></returns>
        public IList<PrePlan> GetByUId(string uid)
        {
            if (String.IsNullOrEmpty(uid))
                throw new Exception("防灾预案的统一编号不能是“ ”或者Null");
            List<PrePlan> plans = this._preplanService.GetByUId(uid).ToList();
            return plans;
        }

        /// <summary>
        /// 通过关键字检索
        /// </summary>
        /// <param name="keyword"></param>
        /// <returns></returns>
        public IList<PrePlan> GetByKeyWords(string keyword)
        {
            if (String.IsNullOrEmpty(keyword))
                throw new Exception("防灾预案的统一编号不能是“ ”或者Null");
            List<PrePlan> plans = this._preplanService.GetByKeyWord(keyword).ToList();
            return plans;
        }

        /// <summary>
        /// 更新
        /// </summary>
        /// <param name="preplan">需要更新的实体对象</param>
        [HttpPost]
        public void Update([FromBody]PrePlan preplan)
        {
            if(preplan==null)
                throw new ArgumentNullException("preplan");
            this._preplanService.Update(preplan);
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="preplan">需要删除的实体对象</param>
        [HttpPost]
        public void Delete([FromBody]PrePlan preplan)
        {
            if (preplan == null)
                throw new ArgumentNullException("preplan");
            this._preplanService.Delete(preplan);
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="id">需要删除的实体对象的主键</param>
        [HttpGet]
        public void Delete(int id)
        {
            if (id <= 0)
                throw new Exception("参数不合法，没有这样的防灾预案编号");
            this._preplanService.Delete(id);
        }

        /// <summary>
        /// 新增
        /// 被新增的实体，必须有其相对应的PhyGeoDiaster信息存在，且PrePlan的主键（外键）
        /// 必须同PhyGeoDiaster主键相同；
        /// 如果新增的PrePlan实体没有对应的PhyGeoDiaster，则应当调用PhyGeoDiaster的New接口
        /// 并给PhyGeoDiaster的PrePlan导航属性赋值，以完成在新增PrePlan的信息的同时，PhyGeoDiaster
        /// 物理点信息也同样有相应的信息
        /// </summary>
        /// <param name="preplan">需要新增的防灾预案实体</param>
        [HttpPost]
        public void New([FromBody]PrePlan preplan)
        {
            if (preplan == null)
                throw new ArgumentNullException("preplan");
            this._preplanService.New(preplan);
        }
    }
}
