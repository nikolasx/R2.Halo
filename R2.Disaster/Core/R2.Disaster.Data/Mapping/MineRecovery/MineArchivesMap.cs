using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.CoreEntities.Domain.MineRecovery;

namespace R2.Disaster.Data.Mapping.MineRecovery
{
    public class MineArchivesMap : EntityTypeConfiguration<MineArchive>
    {

        public MineArchivesMap()
        {
            this.ToTable("MineArchives");
            this.HasKey(r => r.Id);
        }
    }
}
