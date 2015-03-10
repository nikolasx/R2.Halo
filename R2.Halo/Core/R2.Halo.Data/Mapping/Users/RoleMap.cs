using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Users;


namespace R2.Halo.Data.Mapping.Users
{
    public  class RoleMap : EntityTypeConfiguration<Role>
    {
        public RoleMap()
        {
            this.HasKey(bp => bp.Id);
        }
    }
}
