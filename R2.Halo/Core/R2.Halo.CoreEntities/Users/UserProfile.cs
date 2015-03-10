using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Apps;

namespace R2.Halo.CoreEntities.Users
{
   public   class UserProfile
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Account { get; set; }
        public virtual string Password { get; set; }
        public virtual DateTime? AddTime { get; set; }
        public virtual int RoleId { get; set; }
        public virtual Role Role { get; set; }
        public virtual ICollection<UserFancyApp> FancyAppUsers { get; set; }
       

    }
}
