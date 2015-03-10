using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using System.Data.Entity.ModelConfiguration;

namespace R2.Disaster.Data.Mapping.GeoDisaster.Investigation
{
    public class LandFractureMap : EntityTypeConfiguration<LandFracture>
    {
        public LandFractureMap()
        {
            this.ToTable("LandFractures");
            this.HasKey(c => c.Id);

            //this.Property(c => c.统一编号).IsRequired();
            //this.Property(c => c.名称).IsRequired();

            //this.HasRequired(c => c.Comprehensive)
            //    .WithRequiredDependent(c => c.LandFracture);
        }
    }
}
