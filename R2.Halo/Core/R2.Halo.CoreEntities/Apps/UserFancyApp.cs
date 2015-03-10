using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.CoreEntities.Users;

namespace R2.Halo.CoreEntities.Apps
{
    /// <summary>
    /// 此表用于表示用户喜好app与user之间的多对多关系，通过此表把多对多分解成了两个一对多
    /// </summary>
    public  class UserFancyApp
    {
        public UserFancyApp()
        {
            this.AddTime = DateTime.Now;
        }
        public virtual int Id { get; set; }
        public virtual int AppId { get; set; }
        public virtual App App { get; set; }
        public virtual int UserId { get; set; }
        public virtual UserProfile UserProfile { get; set; }

        #region 由多对多关系产生的其他数据
        public virtual DateTime? AddTime { get; set; }
        public virtual int DisplayOrder { get; set; }
        #endregion
    }
}
