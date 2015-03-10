using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.Data.Mapping.GeoDisaster.MassPres
{
    public class MassPreMap : EntityTypeConfiguration<MassPre>
    {
        public MassPreMap()
        {
            this.ToTable("MassPres");
            this.HasKey(m => m.Id);

            this.Property(m => m.名称).IsRequired();

            //this.HasRequired(m => m.PhyGeoDisaster)
            //    .WithRequiredDependent(c => c.MassPre);
        }
    }
}
