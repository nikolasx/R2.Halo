using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;

namespace R2.Disaster.Data.Mapping.GeoDisaster.Relocation
{
    public class RelocationLandCollapseMap : EntityTypeConfiguration<RelocationLandCollapse>
    {

        public RelocationLandCollapseMap()
        {
            this.ToTable("RelocationLandCollapses");
            this.HasKey(c => c.Id);
        }
    }
}
