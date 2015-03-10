using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Apps;

namespace R2.Halo.Data.Mapping.Apps
{
    public class AppMap : EntityTypeConfiguration<App>
    {
        public AppMap()
        {
            this.HasKey(bp => bp.Id);
            this.HasRequired(bp => bp.AppCategory)
                .WithMany(bp=>bp.Apps)
                .HasForeignKey(bp => bp.AppCategoryId);
        }
    }
}
