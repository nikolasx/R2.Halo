using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Apps;

namespace R2.Halo.Data.Mapping.Apps
{
    public  class AppCategoryMap :EntityTypeConfiguration<AppCategory>
    {
        public AppCategoryMap()
        {
            this.HasKey(bp => bp.Id);
        }
    }
}
