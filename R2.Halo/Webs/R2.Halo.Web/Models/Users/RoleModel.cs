using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.CoreEntities.Users;

namespace R2.Halo.Web.Models.Users
{
    public class RoleModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public  DateTime? AddTime { get; set; }
        public virtual bool IsSystem { get; set; }
        //用于前台添加角色app，使用逗号分开
        public string RoleAppTag { get; set; }
        //用于前台添加角色app，使用逗号分开
        public string UserTag { get; set; }

        public List<UserProfileModel> AddedUser { get; set; }
        public List<UserProfileModel> NoAddedUser { get; set; }
        public List<RoleAppModel> AddedApp { get; set; }
        public List<RoleAppModel> NoAddedApp { get; set; }
        #region 内部类
        public class RoleAppModel
        {
            public virtual int Id { get; set; }
            public virtual int AppId { get; set; }
            public virtual int RoleId { get; set; }
            public virtual string AppName { get; set; }
            public virtual string AppUrl { get; set; }           
            #region 由多对多关系产生的其他数据
            public virtual int DisplayOrder { get; set; }
            #endregion

        }
        #endregion

    }
}
