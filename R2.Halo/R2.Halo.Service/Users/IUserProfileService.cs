using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.Core;
using R2.Halo.CoreEntities.Users;

namespace R2.Halo.Service.Users
{
    public interface IUserProfileService 
    {
        #region basic 
        void Update(UserProfile entity);

        void Update(IList<UserProfile> entities);

        void Delete(UserProfile entity);

        void Delete(IList<UserProfile> entities);

        void Delete(object id);

        void Delete(IList<object> ids);

        void Add(UserProfile entity);

        void Add(IList<UserProfile> entities);

        UserProfile Get(object id);

        IQueryable<UserProfile> List();
        IPagedList<UserProfile> GetPagedList(int pageIndex, int pageSize);
        #endregion
    }
}
