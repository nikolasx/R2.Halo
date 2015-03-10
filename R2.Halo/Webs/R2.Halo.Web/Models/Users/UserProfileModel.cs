using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Apps;

namespace R2.Halo.Web.Models.Users
{
   public   class UserProfileModel
    {

        public  int Id { get; set; }
        public  string Name { get; set; }
        public  string Password { get; set; }
        public  DateTime? AddTime { get; set; }
        public virtual string Account { get; set; }
        public  int RoleId { get; set; }
        public string  RoleName { get; set; }

        #region 内部类
        public class UserFancyAppModel
        {
            public int Id { get; set; }
            public int AppId { get; set; }
            public int UserId { get; set; }
            public int DisplayOrder { get; set; }
            public string AppName { get; set; }
            public string AppUrl { get; set; }

        }
        #endregion

    }
}
