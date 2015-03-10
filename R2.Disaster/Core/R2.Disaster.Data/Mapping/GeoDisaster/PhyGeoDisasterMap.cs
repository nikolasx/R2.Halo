using R2.Disaster.CoreEntities.Domain.GeoDisaster;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.Data.Mapping.GeoDisaster
{
    public class PhyGeoDisasterMap : EntityTypeConfiguration<PhyGeoDisaster>
    {
        public PhyGeoDisasterMap()
        {
            this.ToTable("PhyGeoDisasters");
            this.HasKey(p => p.Id);

            //this.Property(c => c.名称).IsRequired();
            //this.Property(c => c.DisasterType).IsRequired();
            //this.Property(c => c.Location).IsRequired();
            //this.Property(p => p.Investigated).IsRequired();

            //配置同GBCode的关系
            
            this.HasOptional(c => c.GBCode)
             .WithMany().HasForeignKey(g => g.GBCodeId).WillCascadeOnDelete(false);

            //配置同Comprehensive综合表的关系
            this.HasMany(p => p.Comprehensives)
                .WithRequired(c => c.PhyGeoDisaster)
                .HasForeignKey(c => c.PhyGeoDisasterId);
            //this.HasRequired(p => p.Comprehensive).WithRequiredPrincipal();

            //  .WithRequiredPrincipal(c => c.PhyGeoDisaster);


            //配置同PrePlan实体的关系，1对多，PrePlan的主键也是其外键
            this.HasMany(p => p.PrePlans)
           .WithRequired(pre => pre.PhyGeoDisaster)
           .HasForeignKey(pre => pre.PhyGeoDisasterId);
            //this.HasRequired(p => p.PrePlan).WithRequiredPrincipal();

            //配置Threat实体的关系，1对多，PrePlan的主键也是其外键
            this.HasMany(p => p.Threats)
            .WithRequired(pre => pre.PhyGeoDisaster)
             .HasForeignKey(pre => pre.PhyGeoDisasterId);
            //this.HasRequired(p => p.Threat).WithRequiredPrincipal();

            //配置同MassPre实体的关系，1对多，MassPre的主键也是其外键
            //this.HasRequired(p => p.MassPre).WithRequiredPrincipal();
            this.HasMany(p => p.MassPres)
             .WithRequired(m => m.PhyGeoDisaster)
             .HasForeignKey(m => m.PhyGeoDisasterId);

            //配置一对多关系，既可以在一方配置，也可以在另外一方配置
            this.HasMany(p => p.DamageReports)
                .WithRequired(d => d.PhyGeoDisaster)
                .HasForeignKey(d => d.PhyGeoDisasterId);

            this.HasMany(p => p.EmergencySurveys)
                .WithRequired(e => e.PhyGeoDisaster)
                 .HasForeignKey(e => e.PhyGeoDisasterId);


        }
    }
}
