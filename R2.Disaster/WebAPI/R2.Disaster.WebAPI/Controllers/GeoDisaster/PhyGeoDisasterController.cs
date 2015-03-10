using AutoMapper;
using ExpressionSerialization;
using R2.Disaster.CoreEntities.Domain.GeoDisaster;
using R2.Disaster.Service.GeoDisaster;
using R2.Disaster.WebAPI.Model;
using R2.Disaster.WebAPI.ServiceModel.GeoDisaster;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Hosting;
using System.Web.Http;
using System.Xml.Linq;

namespace R2.Disaster.WebAPI.Controllers.GeoDisaster
{
    /// <summary>
    /// 地质灾害物理点实体控制器
    /// </summary>
    public class PhyGeoDisasterController :EntityControllerBase<PhyGeoDisaster>
    {
        private IPhyGeoDisasterService _phyService;

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="phyService"></param>
        public PhyGeoDisasterController(IPhyGeoDisasterService phyService)
            :base(phyService)
        {
            this._phyService = phyService;
        }

        /// <summary>
        /// 通过编号获取物理点简要信息
        /// </summary>
        /// <param name="id">物理点编号</param>
        /// <returns></returns>
        public PhyGeoDisasterSimplify GetById(int id)
        {
            if (id <= 0)
                throw new Exception("不存在这样的物理点信息主键编号");
            PhyGeoDisaster phy = this._phyService.GetById(id);
            PhyGeoDisasterSimplify phyModel = Mapper.Map<PhyGeoDisasterSimplify>(phy);
            return phyModel;
        }

        /// <summary>
        /// 根据自定义编号查询物理点简要信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// lx 2014年8月4日15:39:22
        public PhyGeoDisasterSimplify GetByCustomizeId(string cusolizeId)
        {
            if (string.IsNullOrWhiteSpace(cusolizeId))
                throw new Exception(@"查询的自定义编号不允许时类型“null”或者空字符串");
            PhyGeoDisaster phy = this._phyService.GetByCustomizeId(cusolizeId);
            PhyGeoDisasterSimplify phyModel = Mapper.Map<PhyGeoDisasterSimplify>(phy);
            return phyModel;
        }

        /// <summary>
        /// 根据一组物理点Id，获取一组物理点简要信息
        /// </summary>
        /// <param name="ids">多个物理点的Id，使用“，”分隔</param>
        /// <returns></returns>
        public IList<PhyGeoDisasterSimplify> GetByIds(String ids)
        {
            if (String.IsNullOrEmpty(ids))
                throw new Exception("参数非法");
            String[] phyIds = ids.Split(',');
           // TODO:RRDL
           int[] phyIdsInt = Array.ConvertAll<String,int>(phyIds,id=>Convert.ToInt32(id));
           IQueryable<PhyGeoDisaster> query = this._phyService.GetByIds(phyIdsInt);
           List<PhyGeoDisaster> lists = query.ToList();
           IList<PhyGeoDisasterSimplify> phyModels = Mapper.Map<IQueryable<PhyGeoDisaster>,
 IList<PhyGeoDisasterSimplify>>(query);
           return phyModels;
        }

        /// <summary>
        /// 自定义查询条件，建议高级用户及服务无法满足查询条件时使用
        /// 自定义查询条件以动态表达式树（Dynamic ExpresstionTree）的形式组合
        /// </summary>
        /// <param name="x">由ExpressionSerilizer序列化得到，相关使用方法请参考RRDL</param>
        /// <returns>物理点完整信息</returns>
        [HttpPost]
        public IList<PhyGeoDisasterSimplify> GetByExpressionDynamic([FromBody]XElement x)
        {
            //TODO:后期回顾整理
            //var serializer = new ExpressionSerializer(HostingEnvironment.MapPath("~/bin/R2.Disaster.CoreEntities.dll"));
         //   var newPredicate = serializer.Deserialize<Func<PhyGeoDisaster, bool>>(x);
            var newPredicate = SerializeHelper.DeserializeExpression<PhyGeoDisaster, bool>(x);
            IQueryable<PhyGeoDisaster> query= this._phyService.ExecuteConditions(newPredicate);
            IList<PhyGeoDisaster> phyGeos = query.ToList();
            IList<PhyGeoDisasterSimplify> phyModels = Mapper.Map<IQueryable<PhyGeoDisaster>,
    IList<PhyGeoDisasterSimplify>>(query);
            return phyModels;
        }

        /// <summary>
        /// 自定义查询条件，建议高级用户及服务无法满足查询条件时使用
        /// 自定义查询条件以表达式树（ExpresstionTree）的形式组合
        /// </summary>
        /// <param name="x">由ExpressionSerilizer序列化得到，相关使用方法请参考RRDL</param>
        /// <returns>物理点完整信息</returns>
        [HttpPost]
        public IList<PhyGeoDisasterSimplify> GetByExpression([FromBody]XElement x)
        {
            //TODO:后期回顾整理(重要)
            var creator = new QueryCreator(this.FnGetDatabaseObjects);

            var assemblies = new Assembly[]
            { 
                typeof(PhyGeoDisaster).Assembly,
                typeof(ExpressionType).Assembly, 
                typeof(IQueryable).Assembly,
                typeof(Enum).Assembly
            };
            var resolver = new TypeResolver(assemblies, new Type[] 
			{ 
                typeof(PhyGeoDisaster),typeof(Enum)
			});

            CustomExpressionXmlConverter queryconverter = new QueryExpressionXmlConverter(creator, resolver);
            CustomExpressionXmlConverter knowntypeconverter = new KnownTypeExpressionXmlConverter(resolver);
            var serializer = new ExpressionSerializer(resolver, new CustomExpressionXmlConverter[] { queryconverter, knowntypeconverter });

            Expression e = serializer.Deserialize(x);
            MethodCallExpression m = (MethodCallExpression)e;
            LambdaExpression lambda = Expression.Lambda(m);
            Delegate fn = lambda.Compile();
            dynamic result = fn.DynamicInvoke(new object[0]);
            //dynamic array = Enumerable.ToArray(result);			
            var array = Enumerable.ToArray(Enumerable.Cast<PhyGeoDisaster>(result));
            IList<PhyGeoDisasterSimplify> phyModels = Mapper.Map<IEnumerable<PhyGeoDisaster>,
 IList<PhyGeoDisasterSimplify>>(array);
            return phyModels;

    //        IQueryable<PhyGeoDisaster> query = this._phyService.ExecuteConditions(newPredicate);
    //        IList<PhyGeoDisaster> phyGeos = query.ToList();
    //        IList<PhyGeoDisasterSimplify> phyModels = Mapper.Map<IQueryable<PhyGeoDisaster>,
    //IList<PhyGeoDisasterSimplify>>(query);
    //        return phyModels;
        }

        dynamic FnGetDatabaseObjects(Type elementType)
        {
            return this._phyService.FindAll();
        }

        /// <summary>
        /// 根据多个物理点的唯一编号，获取一个指明该物理点各项属性是否存在的指示器
        /// </summary>
        /// <param name="phyIds">多个物理点Id，使用“，”分隔</param>
        /// <returns></returns>
        public IList<PhyAttributeCountIndicator> GetIndicator(String ids)
        {
            if (String.IsNullOrEmpty(ids))
                throw new Exception("参数非法");
            String[] phyIds = ids.Split(','); 
            // TODO:RRDL
            int[] phyIdsInt = Array.ConvertAll<String, int>(phyIds, id => Convert.ToInt32(id));
            IQueryable<PhyGeoDisaster> query = this._phyService.GetByIds(phyIdsInt);
            List<PhyGeoDisaster> phys = query.ToList();
            IList<PhyAttributeCountIndicator> phyIdicators = Mapper.Map<IQueryable<PhyGeoDisaster>,
                IList<PhyAttributeCountIndicator>>(query);
            return phyIdicators;
        }

        /// <summary>
        /// 通过名称、地理位置进行物理点检索
        /// 可以将需要忽略的条件设置为Null
        /// </summary>
        ///<param name="keyword">关键字</param>
        /// <returns>物理点简要信息</returns>
        public IList<PhyGeoDisasterSimplify> Get(string keyword)
        {
            if (String.IsNullOrEmpty(keyword))
                throw new Exception("查询的关键字不允许是类型“null”或者空字符串");
            IQueryable<PhyGeoDisaster> phyGeos = this._phyService.GetByKeyWord(keyword);
            IList<PhyGeoDisasterSimplify> phyModels = Mapper.Map<IQueryable<PhyGeoDisaster>,
                IList<PhyGeoDisasterSimplify>>(phyGeos);
            return phyModels;
        }

        /// <summary>
        /// 通过行政区编码，灾害类型进行查询(Get)
        /// </summary>
        /// <param name="gbcode">行政区编码</param>
        /// <param name="type">灾害类型</param>
        /// <returns>物理点简要信息</returns>
        public IList<PhyGeoDisasterSimplify> Get(string gbcode=null,
            EnumGeoDisasterType? type=null)
        {
            IQueryable<PhyGeoDisaster> phys =
                  this._phyService.GetByConditions(gbcode, type);
            IList<PhyGeoDisasterSimplify> phyModels = Mapper.Map<IQueryable<PhyGeoDisaster>,
            IList<PhyGeoDisasterSimplify>>(phys);
            return phyModels;
        }

        /// <summary>
        /// 通过组合条件查询
        /// </summary>
        /// <param name="conditions">多条件组合</param>
        /// <returns>物理点简要信息</returns>
        [HttpPost]
        public IList<PhyGeoDisasterSimplify> Get([FromBody]PhyGeoDisasterQueryCondition conditions)
        {
            IQueryable<PhyGeoDisaster> phys =
                  this._phyService.GetByConditions(conditions.GBCodes, conditions.Types);
            IList<PhyGeoDisasterSimplify> phyModels = Mapper.Map<IQueryable<PhyGeoDisaster>,
            IList<PhyGeoDisasterSimplify>>(phys);
            return phyModels;
        }
    }
}
