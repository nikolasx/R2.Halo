using System.Data.Entity.ModelConfiguration;
using R2.Disaster.CoreEntities;

namespace R2.Disaster.Data.Mapping
{
    public class ProductMap:EntityTypeConfiguration<Product>
    {
        public ProductMap()
        {
            this.ToTable("Products");
            this.HasKey(c => c.Id);
            this.Property(c => c.Name).IsRequired();
            //    this.Property(bp => bp.Category).IsRequired();
            this.Property(c => c.Name).HasMaxLength(400);
            this.HasRequired(c => c.Category)
                .WithMany()
                .HasForeignKey(c => c.CagetoryId);
        }
    }
}
