using System.Data.Entity.ModelConfiguration;
using R2.Disaster.CoreEntities;

namespace R2.Disaster.Data.Mapping
{
    public class CategoryMap : EntityTypeConfiguration<Category>
    {
        public CategoryMap()
        {
            this.ToTable("Categorys");
            this.HasKey(c => c.Id);
            this.Property(c => c.Name).IsRequired();
            //    this.Property(bp => bp.Category).IsRequired();
            this.Property(c => c.Name).HasMaxLength(400);
        }
    }
}
