using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Users;


namespace R2.Halo.Data.Mapping.Users
{
    public  class UserProfileMap : EntityTypeConfiguration<UserProfile>
    {
        public UserProfileMap()
        {
            this.HasKey(bp => bp.Id);
            this.HasRequired(bp => bp.Role)
                .WithMany(c=>c.Users)
                .HasForeignKey(bp => bp.RoleId);
        }
    }
}
