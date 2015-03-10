using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using R2.Disaster.Core.Infrastructure;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.CoreEntities.Logging;
using R2.Halo.CoreEntities.Users;
using R2.Halo.Web.Models.Apps;
using R2.Halo.Web.Models.Logging;
using R2.Halo.Web.Models.Users;

namespace R2.Halo.Web.Infrastructure
{
    public class AutoMapperStartupTask : IStartupTask
    {
        public void Execute()
        {
            //App
            Mapper.CreateMap<App, AppModel>()
            .ForMember(dest => dest.AddTime, mo => mo.Ignore()); 
            Mapper.CreateMap<AppModel, App>()
            .ForMember(dest => dest.AddTime, mo => mo.Ignore());
            //log
            Mapper.CreateMap<Log, LogModel>();
            Mapper.CreateMap<LogModel, Log>();
            // AppCategory
            Mapper.CreateMap<AppCategory, AppCategoryModel>()
            .ForMember(dest => dest.AddTime, mo => mo.Ignore()); 
            Mapper.CreateMap<AppCategoryModel, AppCategory>()
            .ForMember(dest => dest.AddTime, mo => mo.Ignore());
            //Role
            Mapper.CreateMap<Role, RoleModel>()
            .ForMember(dest => dest.AddTime, mo => mo.Ignore())
            .ForMember(dest => dest.IsSystem, mo => mo.Ignore()); 
            Mapper.CreateMap<RoleModel, Role>()
           .ForMember(dest => dest.AddTime, mo => mo.Ignore())
           .ForMember(dest => dest.IsSystem, mo => mo.Ignore());
            //UserProfile
            Mapper.CreateMap<UserProfile, UserProfileModel>()
            .ForMember(dest => dest.AddTime, mo => mo.Ignore());
            Mapper.CreateMap<UserProfileModel, UserProfile>()
             .ForMember(dest => dest.AddTime, mo => mo.Ignore());




        }

        public int Order
        {
            get { return 0; }
        }
    }
}