using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.Core;
using R2.Halo.CoreEntities.Users;

namespace R2.Halo.Service.Users
{
    public interface IRoleService 
    {
        #region basic
        void Update(Role entity);

        void Update(IList<Role> entities);

        void Delete(Role entity);

        void Delete(IList<Role> entities);

        void Delete(object id);

        void Delete(IList<object> ids);

        void Add(Role entity);

        void Add(IList<Role> entities);

        Role Get(object id);

        IQueryable<Role> List();
        IPagedList<Role> GetPagedList(int pageIndex, int pageSize);
        #endregion



    }
}
