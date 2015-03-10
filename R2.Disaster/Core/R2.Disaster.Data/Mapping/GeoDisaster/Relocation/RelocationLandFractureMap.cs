using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;

namespace R2.Disaster.Data.Mapping.GeoDisaster.Relocation
{
    public class RelocationLandFractureMap : EntityTypeConfiguration<RelocationLandFracture>
    {


        public RelocationLandFractureMap()
        {
            this.ToTable("RelocationLandFractures");
            this.HasKey(c => c.Id);
        }
    }
}
