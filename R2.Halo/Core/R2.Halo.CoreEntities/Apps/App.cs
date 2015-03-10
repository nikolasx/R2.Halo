using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Users;

namespace R2.Halo.CoreEntities.Apps
{
    public class App
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Key { get; set; }
        public virtual string Desc { get; set; }
        public virtual string RouteUrl { get; set; }
        public virtual ICollection<RoleApp> RoleApps { get; set; }
        public virtual ICollection<UserFancyApp> FancyAppUsers { get; set; }
        public virtual DateTime? AddTime { get; set; }
        public virtual int AppCategoryId { get; set; }
        public virtual AppCategory AppCategory { get; set; }
        public virtual  bool IsActive { get; set; }
        public virtual bool IsPublic { get; set; }
    }
}
