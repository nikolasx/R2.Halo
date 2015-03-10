using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;

namespace R2.Disaster.WebFramework.Controllers
{
    /// <summary>
    /// 登陆filter
    /// </summary>
    public class LoginAttribute : ActionFilterAttribute
    {
        public string CookiesName { get; set; }
        public string ViewName { get; set; }
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.Request.Cookies["userinfo"] == null)
            {
                filterContext.Result = new RedirectResult("~/Login/login");
            }
            base.OnActionExecuting(filterContext);
        }
    }
}
