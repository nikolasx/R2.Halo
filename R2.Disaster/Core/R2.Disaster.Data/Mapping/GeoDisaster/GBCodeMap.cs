using R2.Disaster.CoreEntities.Domain.GeoDisaster;
using System.Data.Entity.ModelConfiguration;

namespace R2.Disaster.Data.Mapping.GeoDisaster
{
    public class GBCodeMap : EntityTypeConfiguration<GBCode>
    {
        public GBCodeMap()
        {
            this.ToTable("GBCodes");
            this.HasKey(g => g.Code);

            this.Property(g => g.Name).IsRequired();
        }
    }
}
