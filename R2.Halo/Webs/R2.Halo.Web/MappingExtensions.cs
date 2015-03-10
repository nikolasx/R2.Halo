using AutoMapper;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.CoreEntities.Logging;
using R2.Halo.CoreEntities.Users;
using R2.Halo.Web.Models.Apps;
using R2.Halo.Web.Models.Logging;
using R2.Halo.Web.Models.Users;


namespace R2.Halo.Web
{
    public static class MappingExtensions
    {
        #region App

        public static AppModel ToModel(this App entity)
        {
            return Mapper.Map<App, AppModel>(entity);
        }

        public static App ToEntity(this AppModel model)
        {
            return Mapper.Map<AppModel, App>(model);
        }
        public static App ToEntity(this AppModel model, App destination)
        {
            return Mapper.Map(model, destination);
        }
        #endregion

        #region Log

        public static LogModel ToModel(this Log entity)
        {
            return Mapper.Map<Log, LogModel>(entity);
        }

        public static Log ToEntity(this LogModel model)
        {
            return Mapper.Map<LogModel, Log>(model);
        }
        public static Log ToEntity(this LogModel model, Log destination)
        {
            return Mapper.Map(model, destination);
        }
        #endregion

        #region Appcategory

        public static AppCategoryModel ToModel(this AppCategory entity)
        {
            return Mapper.Map<AppCategory, AppCategoryModel>(entity);
        }

        public static AppCategory ToEntity(this AppCategoryModel model)
        {
            return Mapper.Map<AppCategoryModel, AppCategory>(model);
        }
        public static AppCategory ToEntity(this AppCategoryModel model, AppCategory destination)
        {
            return Mapper.Map(model, destination);
        }
        #endregion

        #region Role

        public static RoleModel ToModel(this Role entity)
        {
            return Mapper.Map<Role, RoleModel>(entity);
        }

        public static Role ToEntity(this RoleModel model)
        {
            return Mapper.Map<RoleModel, Role>(model);
        }
        public static Role ToEntity(this RoleModel model, Role destination)
        {
            return Mapper.Map(model, destination);
        }

        #endregion
        #region UserProfile

        public static UserProfileModel ToModel(this UserProfile entity)
        {
            return Mapper.Map<UserProfile, UserProfileModel>(entity);
        }

        public static UserProfile ToEntity(this UserProfileModel model)
        {
            return Mapper.Map<UserProfileModel, UserProfile>(model);
        }
        public static UserProfile ToEntity(this UserProfileModel model, UserProfile destination)
        {
            return Mapper.Map(model, destination);
        }

        #endregion


    }
}