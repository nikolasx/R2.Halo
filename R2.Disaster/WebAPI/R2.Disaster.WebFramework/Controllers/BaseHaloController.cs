using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace R2.Disaster.WebFramework.Controllers
{
    [Login(Order=1)]
    public   class BaseHaloController:Controller
    {
        #region Utitilies 
        [NonAction]
        protected int GetUserRole()
        {
            string [] cookie=GetCookie();
            return int.Parse(cookie.Last());
        }
        [NonAction]
        protected string[] GetCookie()
        {
            var cookie = Request.Cookies["userinfo"];
            if (cookie == null) throw new Exception("cookie is null");
            string[] cookieValue = HttpUtility.UrlDecode(cookie.Value).Split(new char[] { '|' }, StringSplitOptions.RemoveEmptyEntries);
            return cookieValue;           
        }
        [NonAction]
        protected string[] StringToArray(string roleAppTag)
        {
            var result = new List<string>();
            if (!String.IsNullOrWhiteSpace(roleAppTag))
            {
                string[] values = roleAppTag.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
                foreach (string val1 in values)
                    if (!String.IsNullOrEmpty(val1.Trim()))
                        result.Add(val1.Trim());
            }
            return result.ToArray();
        } 
        #endregion
    }
    
}
