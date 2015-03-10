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
    public class WorkingGuideCardMap : EntityTypeConfiguration<WorkingGuideCard>
    {
        public WorkingGuideCardMap()
        {
            this.ToTable("WorkingGuideCards");
            this.HasKey(w => w.Id);

            //this.Property(c => c.统一编号).IsRequired();
            this.Property(w=> w.名称).IsRequired();

            this.HasRequired(w => w.PhyGeoDisaster)
                .WithMany(p => p.WorkingGuideCards)
                .HasForeignKey(w => w.PhyGeoDisasterId);
        }
    }
}
