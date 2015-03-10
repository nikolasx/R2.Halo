using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.Core;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.CoreEntities.Users;

namespace R2.Halo.Service.Apps
{
    public interface IRoleAppService : IEntityServiceBase<RoleApp>
    {
        IPagedList<RoleApp> GetPagedList(int pageIndex, int pageSize);
        IQueryable<RoleApp> GetRoleAppByRoleId(int roleId);
    }
}
