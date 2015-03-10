
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace R2.Disaster.WebFramework.Controllers
{
    public class AdminAuthorizeAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var cookie = filterContext.HttpContext.Request.Cookies["userinfo"].Value;
            var roleId = HttpUtility.UrlDecode(cookie).Split('|').Last();
            if (roleId != "1")
                filterContext.Result = new ContentResult { Content = "没有权限" };

            base.OnActionExecuting(filterContext);
        }
    }
}