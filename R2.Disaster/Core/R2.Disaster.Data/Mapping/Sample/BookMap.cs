using System.Data.Entity.ModelConfiguration;
using R2.Disaster.CoreEntities;

namespace R2.Disaster.Data.Mapping
{
    public class BookMap:EntityTypeConfiguration<Book>
    {
        public BookMap()
        {
            this.ToTable("Books");
            this.HasKey(c => c.Id);
            this.Property(c => c.Name).IsRequired();
            //    this.Property(bp => bp.Category).IsRequired();
            this.Property(c => c.Name).HasMaxLength(400);
            this.HasRequired(b => b.Category)
                .WithRequiredDependent(b => b.Book);
        }
    }
}
