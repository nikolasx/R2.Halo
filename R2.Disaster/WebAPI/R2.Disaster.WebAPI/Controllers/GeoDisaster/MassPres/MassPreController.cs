using R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres;
using R2.Disaster.Service.GeoDisaster.MassPres;
using System;
using System.Collections.Generic;
using System.Linq;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster.MassPres
{
    /// <summary>
    /// 群测群防基本信息服务
    /// </summary>
    public class MassPreController :PhyRelationEntityController<MassPre>
    {
        private IMassPreService _massPreService;

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="massPreService"></param>
        public MassPreController(IMassPreService massPreService)
            :base(massPreService)
        {
            this._massPreService = massPreService;
        }

       /// <summary>
       /// 根据统一编号查询
       /// </summary>
       /// <param name="uid">统一编号</param>
       /// <returns>满足条件的群测群防基本信息实体</returns>
        public IList<MassPre> GetByUid(string uid)
        {
            if (String.IsNullOrEmpty(uid))
                throw new Exception("不存在这样的主键编号");
            IList<MassPre> masses =this._massPreService.GetByUid(uid).ToList();
            return masses;
        }

        /// <summary>
        /// 关键字查询，关键字将检索名称和统一编号
        /// </summary>
        /// <param name="keyword">关键字</param>
        /// <returns>一组满足条件的实体</returns>
        public IList<MassPre> GetByKeyWord(string keyword)
        {
            if (String.IsNullOrEmpty(keyword))
                throw new Exception("关键字不能为Null");
            IList<MassPre> masses = this._massPreService.GetByKeyWord(keyword).ToList();
            return masses;
        }
    }
}
