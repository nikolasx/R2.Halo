using AutoMapper;
using R2.Disaster.CoreEntities.Domain.GeoDisaster;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Emergency;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.MassPres;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Monitor;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.PotentialThreats;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation;
using R2.Disaster.WebAPI.Infrastructure.AutoMapperResolvers;
using R2.Disaster.WebAPI.Model;
using R2.Disaster.WebAPI.Model.Investigation;
using R2.Disaster.WebAPI.ServiceModel.GeoDisaster;
using R2.Domain.Model.Monitor;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace R2.Disaster.WebAPI.Infrastructure
{
    public class AutoMapperRegistrar
    {
        public void Register()
        {
            //Mapper.CreateMap<PhyGeoDisaster, ComprehensiveSimplify>();
            Mapper.CreateMap<Comprehensive, ComprehensiveSimplify>();
            Mapper.CreateMap<ComprehensiveSimplify, Comprehensive>();
            Mapper.CreateMap<PhyGeoDisaster, PhyGeoDisasterSimplify>();

            //用于配置一组Rainfall通过StationId分组后向SumRainfall投影
            Mapper.CreateMap<IQueryable<Rainfall>, SumRainfall>()
           .ForMember(s => s.SumValue, opt => opt.MapFrom(a => a.Sum(r => r.Value)))
           .ForMember(s => s.RainfallStation, opt => opt.MapFrom(g => g.FirstOrDefault().RainfallStation));
            //配置一组Rainfall通过StationId分组后向RainfallGroupedByStation类型投影
            Mapper.CreateMap<Rainfall, RainfallTimeAndValue>();
            Mapper.CreateMap<IQueryable<Rainfall>, RainfallGroupedByStation>()
                .ForMember(r => r.RainfallStation, opt => opt.MapFrom(g => g.FirstOrDefault().RainfallStation))
                .ForMember(r => r.RainfallTimeAndValues, opt => opt.MapFrom(g => g));

            //Mapper.CreateMap<Comprehensive,bool>().
            Mapper.CreateMap<PhyGeoDisaster, PhyAttributeCountIndicator>()
                .ForMember(dest => dest.Investigations,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, Comprehensive>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, Comprehensive>("Comprehensives")))
                .ForMember(dest => dest.AvoidRiskCards,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, AvoidRiskCard>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, AvoidRiskCard>("AvoidRiskCards")))
                .ForMember(dest => dest.DamageReports,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, DamageReport>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, DamageReport>("DamageReports")))
                    .ForMember(dest => dest.EmergencySurveys,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, EmergencySurvey>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, EmergencySurvey>("EmergencySurveys")))
                    .ForMember(dest => dest.MassPatrols,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, MassPatrol>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, MassPatrol>("MassPatrols")))
                     .ForMember(dest => dest.MassPres,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, MassPre>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, MassPre>("MassPres")))
                   .ForMember(dest => dest.PrePlans,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, PrePlan>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, PrePlan>("PrePlans")))
                   .ForMember(dest => dest.Threats,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, Threat>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, Threat>("Threats")))
                 .ForMember(dest => dest.WorkingGuideCards,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, WorkingGuideCard>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, WorkingGuideCard>("WorkingGuideCards")))

                .ForMember(dest => dest.EmergencySurveyReports,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, EmergencySurveyReport>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, EmergencySurveyReport>("EmergencySurveyReports")))
                  .ForMember(dest => dest.RelocationComprehensives,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, RelocationComprehensive>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, RelocationComprehensive>("RelocationComprehensives")))
                  .ForMember(dest => dest.RelocationLandSlipChecks,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, RelocationLandSlipCheck>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, RelocationLandSlipCheck>("RelocationLandSlipChecks")))
                  .ForMember(dest => dest.RelocationLandSlideChecks,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, RelocationLandSlideCheck>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, RelocationLandSlideCheck>("RelocationLandSlideChecks")))
                  .ForMember(dest => dest.RelocationDebrisFlowChecks,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, RelocationDebrisFlowCheck>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, RelocationDebrisFlowCheck>("RelocationDebrisFlowChecks")))
                  .ForMember(dest => dest.RelocationSlopeChecks,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, RelocationSlopeCheck>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, RelocationSlopeCheck>("RelocationSlopeChecks")))
                  .ForMember(dest => dest.RelocationLandCollapseChecks,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, RelocationLandCollapseCheck>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, RelocationLandCollapseCheck>("RelocationLandCollapseChecks")))
                  .ForMember(dest => dest.RelocationPlaceEvaluations,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, RelocationPlaceEvaluation>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, RelocationPlaceEvaluation>("RelocationPlaceEvaluations")))
                  .ForMember(dest => dest.MonthlyReports,
                opt => opt.ResolveUsing<AttributeCountResolver<PhyGeoDisaster, MonthlyReport>>().ConstructedBy(() => new AttributeCountResolver<PhyGeoDisaster, MonthlyReport>("MonthlyReports")));

              
                //.ForMember(dest => dest.HasMassPres,
                //    opt => opt.ResolveUsing < AttributeExitedResolver<ICollection<MassPre>>>());
               
            //Mapper.CreateMap<Foo, Bar>()
            //    .ForMember("baz", opt => opt.Condition(src => (src.b >= 0)));
            //配置泥石流到泥石流实体的投影
            //Mapper.CreateMap<DebrisFlow, DebrisFlowModel>()
            //    .ForMember(d => d.ComprehensiveSimplify, opt => opt.MapFrom(d => d.Comprehensive));
        }
    }

    class Foo
    {
        public int baz;
    }

    class Bar
    {
        public uint baz;
    }
}