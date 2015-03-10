﻿using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.Data.Mapping.GeoDisaster.MassPres
{
    public class MassPatrolMap : EntityTypeConfiguration<MassPatrol>
    {
        public MassPatrolMap()
        {
            this.ToTable("MassPatrols");
            this.HasKey(m => m.Id);

            this.Property(m => m.PatrolTime).IsRequired();

            this.HasRequired(m => m.PhyGeoDisaster)
                .WithMany(p => p.MassPatrols)
                .HasForeignKey(m => m.PhyGeoDisasterId);
        }
    }
}
