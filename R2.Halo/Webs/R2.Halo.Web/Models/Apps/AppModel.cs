using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.CoreEntities.Users;

namespace R2.Halo.Web.Models.Apps
{
    public class AppModel
    {
        public int  Id { get; set; }
        public string  Name { get; set; }
        public string Key { get; set; }
        public string Desc { get; set; }
        public string  RouteUrl { get; set; }
        public DateTime? AddTime { get; set; }
        public int AppCategoryId { get; set; }
        public bool IsActive { get; set; }
        public string AppCategoryName { get; set; }
        public string AppName { get; set; }
        public int  AppId { get; set; }
       
    }
}
