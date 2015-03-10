using System.Data.Entity.ModelConfiguration;
using R2.Disaster.CoreEntities;

namespace R2.Disaster.Data.Mapping
{
    public class ComputerMap : EntityTypeConfiguration<Computer>
    {
        public ComputerMap()
        {
            this.ToTable("Computers");
            this.HasKey(c => c.Id);
            this.Property(c => c.Name).IsRequired();
            //    this.Property(bp => bp.Category).IsRequired();
            this.Property(c => c.Name).HasMaxLength(400);
            this.HasRequired(bc => bc.Category);
            this.HasRequired(c => c.Category)
                .WithMany()
                .HasForeignKey(c => c.CagetoryId);
        }
    }
}
