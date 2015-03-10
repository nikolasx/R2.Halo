using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Apps;

namespace R2.Halo.Data.Mapping.Apps
{
    public class RoleAppMap : EntityTypeConfiguration<RoleApp>
    {
        public RoleAppMap()
        {
            this.ToTable("Role_App_Mapping");
            this.HasKey(pc => pc.Id);
            
            this.HasRequired(pc => pc.App)
                .WithMany(c => c.RoleApps)
                .HasForeignKey(pc => pc.AppId);


            this.HasRequired(pc => pc.Role)
                .WithMany(p => p.RoleApps)
                .HasForeignKey(pc => pc.RoleId);
        }
    }
}
