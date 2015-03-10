using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using R2.Disaster.Core;
using R2.Halo.CoreEntities.Users;
using R2.Halo.Data;

namespace R2.Halo.Service.Users
{
    public class UserProfileService :  IUserProfileService
    {
        #region 字段
        private readonly IRepository<UserProfile> _userProfileRepository; 
        #endregion

        #region 构造函数
        public UserProfileService(IRepository<UserProfile> userProfileRepository)
        {
            this._userProfileRepository = userProfileRepository;
        } 
        #endregion
        #region basic
        public void Update(UserProfile entity)
        {
            this._userProfileRepository.Update(entity);
        }

        public UserProfile Get(object id)
        {
            return this._userProfileRepository.GetById(id);
        }

        public void Delete(UserProfile entity)
        {
            this._userProfileRepository.Delete(entity);
        }

        public void Delete(object id)
        {
            this._userProfileRepository.Delete(id);
        }

        public void Add(UserProfile entity)
        {
            this._userProfileRepository.Insert(entity);
        }


        public void Update(IList<UserProfile> entities)
        {
            this._userProfileRepository.Update(entities);
        }

        public void Delete(IList<UserProfile> entities)
        {
            this._userProfileRepository.Delete(entities);
        }

        public void Delete(IList<object> ids)
        {
            this._userProfileRepository.Delete(ids);
        }

        public void Add(IList<UserProfile> entities)
        {
            this._userProfileRepository.Insert(entities);
        }

        public IQueryable<UserProfile> List()
        {
            return this._userProfileRepository.Table;
        }
        public IPagedList<UserProfile> GetPagedList(int pageIndex, int pageSize)
        {
            var list = this._userProfileRepository.Table;
            return new PagedList<UserProfile>(list.OrderByDescending(m => m.AddTime), pageIndex, pageSize);
        }
        #endregion
    }
}
