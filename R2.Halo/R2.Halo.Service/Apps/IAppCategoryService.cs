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
    public interface IAppCategoryService : IEntityServiceBase<AppCategory>
    {
        IPagedList<AppCategory> GetPagedList(int pageIndex, int pageSize);
    }
}
