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
    public class AppService : EntityServiceBase<App>, IAppService
    {
        #region 字段
        private readonly IRepository<App> _appRepository;
        #endregion

        #region 构造函数
        public AppService(IRepository<App> appRepository)
            : base(appRepository)
        {
            this._appRepository = appRepository;
        } 
        #endregion
        #region 方法
        public IPagedList<App> GetPagedList(int pageIndex, int pageSize)
        {
            var list = this._appRepository.Table;
            return new PagedList<App>(list.OrderByDescending(m => m.AddTime), pageIndex, pageSize);
        } 
        #endregion
    }
}
