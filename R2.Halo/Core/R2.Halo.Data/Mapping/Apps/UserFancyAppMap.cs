using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Apps;

namespace R2.Halo.Data.Mapping.Apps
{
    public class UserFancyAppMap : EntityTypeConfiguration<UserFancyApp>
    {
        public UserFancyAppMap()
        {
            this.ToTable("FancyApp_User_Mapping");
            this.HasKey(pc => pc.Id);
            
            this.HasRequired(pc => pc.UserProfile)
                .WithMany(c => c.FancyAppUsers)
                .HasForeignKey(pc => pc.UserId);


            this.HasRequired(pc => pc.App)
                .WithMany(p => p.FancyAppUsers)
                .HasForeignKey(pc => pc.AppId);
        }
    }
}
