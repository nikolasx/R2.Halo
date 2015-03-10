using R2.Disaster.CoreEntities.Domain.GeoDisaster.Monitor;
using R2.Disaster.Service.Monitor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace R2.Disaster.WebAPI.Controllers.Monitor
{
    /// <summary>
    /// 雨量站点服务
    /// </summary>
    public class RainfallStationController : EntityControllerBase<RainfallStation>
    {
        private IRainfallStationService _rainfallStationService;
        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="rainfallStationService"></param>
        public RainfallStationController(IRainfallStationService rainfallStationService)
            :base(rainfallStationService)
        {
            this._rainfallStationService = rainfallStationService;
        }

        /// <summary>
        /// 根据站点名称查询
        /// </summary>
        /// <param name="name">关键字</param>
        /// <returns></returns>
        [HttpGet]
        public IList<RainfallStation> GetByName([FromUri]string name)
        {
            if (String.IsNullOrEmpty(name))
                throw new Exception("关键字不能为Null或者空字符");
            List<RainfallStation> lists = this._rainfallStationService.GetByName(name).ToList();
            return lists;
        }

        /// <summary>
        /// 根据行政区编号查询
        /// </summary>
        /// <param name="code">编号</param>
        /// <returns></returns>
        public IList<RainfallStation> GetByGBCode(string code)
        {
            if (String.IsNullOrEmpty(code))
                throw new Exception("关键字不能为Null或者空字符");
            List<RainfallStation> lists = this._rainfallStationService.GetByGBCode(code).ToList();
            return lists;
        }

        /// <summary>
        /// 根据空间圆判断位置是否在圆内
        /// </summary>
        /// <param name="x">圆心X</param>
        /// <param name="y">圆心Y</param>
        /// <param name="radius">半径</param>
        /// <returns></returns>
        public IList<RainfallStation> GetByCircle(double x, double y, double radius)
        {
            if (radius <= 0)
                throw new Exception("圆的半径不应为小于或者等于0的数值");
            List<RainfallStation> lists = this._rainfallStationService.GetByCircle(x, y, radius).ToList();
            return lists;
        }

        /// <summary>
        /// 根据空间矩形判断位置是否在矩形内
        /// </summary>
        /// <param name="x1"></param>
        /// <param name="x2"></param>
        /// <param name="y1"></param>
        /// <param name="y2"></param>
        /// <returns></returns>
        public IList<RainfallStation> GetByRect(double x1, double x2, double y1, double y2)
        {
            List<RainfallStation> lists = this._rainfallStationService
                .GetByRect(x1, x2, y1, y2).ToList();
            return lists;
        }
    }
}
