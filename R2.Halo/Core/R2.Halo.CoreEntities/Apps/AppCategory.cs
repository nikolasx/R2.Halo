using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Halo.CoreEntities.Apps
{
    public class AppCategory
    {
        public AppCategory()
        {
            this.AddTime = DateTime.Now;
        }
        public virtual int Id { get; set; }
        public virtual string  Name { get; set; }
        public virtual string Desc { get; set; }
        public virtual ICollection<App> Apps { get; set; }
        public virtual DateTime? AddTime { get; set; }

    }
}
