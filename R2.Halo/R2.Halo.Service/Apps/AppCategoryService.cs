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
    public class AppCategoryService : EntityServiceBase<AppCategory>, IAppCategoryService
    {
        #region 字段
        private readonly IRepository<AppCategory> _appCategoryRepository;
        #endregion
        #region 构造函数
        public AppCategoryService(IRepository<AppCategory> appCategoryRepository)
            :base(appCategoryRepository)
        {
            this._appCategoryRepository = appCategoryRepository;
        }
        #endregion
        #region 方法
        public IPagedList<AppCategory> GetPagedList(int pageIndex, int pageSize)
        {
            var list = this._appCategoryRepository.Table;
            return new PagedList<AppCategory>(list.OrderByDescending(m => m.AddTime), pageIndex, pageSize);
        }
        #endregion
    }
}
