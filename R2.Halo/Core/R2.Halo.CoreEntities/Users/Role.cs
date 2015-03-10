using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Apps;

namespace R2.Halo.CoreEntities.Users
{
    public class Role
    {
        public Role()
        {
            this.AddTime = DateTime.Now;
        }
        public virtual int Id { get; set; }
        public string Title { get; set; }
        public virtual ICollection<UserProfile> Users { get; set; }
        public virtual ICollection<RoleApp> RoleApps { get; set; }
        public virtual DateTime? AddTime { get; set; }
        public virtual bool IsSystem { get; set; }
    }
}
