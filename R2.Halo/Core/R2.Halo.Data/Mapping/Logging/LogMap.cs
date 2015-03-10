using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Logging;

namespace R2.Halo.Data.Mapping.Logging
{
    public class LogMap : EntityTypeConfiguration<Log>
    {
        public LogMap()
        {
            this.HasKey(bp => bp.Id);
            this.HasOptional(l => l.UserProfile)
                .WithMany()
                .HasForeignKey(l => l.UserProfileId)
                .WillCascadeOnDelete(true);
        }
    }
}
