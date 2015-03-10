
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using R2.Disaster.Core.Infrastructure;
using R2.Halo.CoreEntities.Logging;
using R2.Halo.Data;
using R2.Halo.Service.Logging;

namespace R2.Disaster.WebFramework.Controllers
{
    /// <summary>
    /// 全局异常处理，写入日志
    /// </summary>
    public class GlobalExcetionHandleAttribute : FilterAttribute, IExceptionFilter
    {
        readonly ILogger _logger =null; 

        public GlobalExcetionHandleAttribute()
        {
            _logger = EngineContext.Current.Resolve<ILogger>(); ;
        }


        public void OnException(ExceptionContext filterContext)
        {
            if (!filterContext.ExceptionHandled && filterContext.Exception!=null)
            {
                _logger.Error(filterContext.Exception.Message, filterContext.Exception);
            }
        }


    }

}