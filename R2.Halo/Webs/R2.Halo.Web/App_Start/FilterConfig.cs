using System.Web;
using System.Web.Mvc;
using R2.Disaster.WebFramework.Controllers;

namespace R2.Halo.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new GlobalExcetionHandleAttribute());
        }
    }
}