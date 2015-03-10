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
    public class RoleAppService : EntityServiceBase<RoleApp>, IRoleAppService
    {
        #region 字段
        private readonly IRepository<RoleApp> _roleAppRepository; 
        #endregion

        #region 构造函数
        public RoleAppService(IRepository<RoleApp> roleAppRepository)
            : base(roleAppRepository)
        {
            this._roleAppRepository = roleAppRepository;
        } 
        #endregion
        #region Method
        public IPagedList<RoleApp> GetPagedList(int pageIndex, int pageSize)
        {
            var list = this._roleAppRepository.Table;
            return new PagedList<RoleApp>(list.OrderByDescending(m => m.DisplayOrder), pageIndex, pageSize);
        }
        public IQueryable<RoleApp> GetRoleAppByRoleId(int roleId)
        {
            return base.List().Where(m => m.RoleId == roleId);
        }
        #endregion
    }
}
