using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.Core;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.CoreEntities.Users;
using R2.Halo.Data;

namespace R2.Halo.Service.Apps
{
    public class UserFancyAppService : EntityServiceBase<UserFancyApp>, IUserFancyAppService
    {
        #region 字段
        private readonly IRepository<UserFancyApp> _userFancyAppRepository; 
        #endregion

        #region 构造函数
        public UserFancyAppService(IRepository<UserFancyApp> userFancyAppRepository)
            : base(userFancyAppRepository)
        {
            this._userFancyAppRepository = userFancyAppRepository;
        } 
        #endregion
        #region Method
        public IPagedList<UserFancyApp> GetPagedList(int pageIndex, int pageSize)
        {
            var list = this._userFancyAppRepository.Table;
            return new PagedList<UserFancyApp>(list.OrderByDescending(m => m.DisplayOrder), pageIndex, pageSize);
        }
        public List<UserFancyApp> GetUserFancyAppByUserId(int usetid)
        {
            return base.List().Where(m => m.UserId == usetid).ToList();
        }
        #endregion
    }
}
