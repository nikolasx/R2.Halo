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
    public class RoleService : IRoleService
    {
        
        #region 字段
        private readonly IRepository<Role> _roleProfileRepository; 
        #endregion

        #region 构造函数
        public RoleService(IRepository<Role> userProfileRepository)
        {
            this._roleProfileRepository = userProfileRepository;
        } 
        #endregion
        #region basic
        public void Update(Role entity)
        {
            this._roleProfileRepository.Update(entity);
        }

        public Role Get(object id)
        {
            return this._roleProfileRepository.GetById(id);
        }

        public void Delete(Role entity)
        {
            this._roleProfileRepository.Delete(entity);
        }

        public void Delete(object id)
        {
            this._roleProfileRepository.Delete(id);
        }

        public void Add(Role entity)
        {
            this._roleProfileRepository.Insert(entity);
        }


        public void Update(IList<Role> entities)
        {
            this._roleProfileRepository.Update(entities);
        }

        public void Delete(IList<Role> entities)
        {
            this._roleProfileRepository.Delete(entities);
        }

        public void Delete(IList<object> ids)
        {
            this._roleProfileRepository.Delete(ids);
        }

        public void Add(IList<Role> entities)
        {
            this._roleProfileRepository.Insert(entities);
        }

        public IQueryable<Role> List()
        {
            return this._roleProfileRepository.Table;
        }
        public IPagedList<Role> GetPagedList(int pageIndex, int pageSize)
        {
            var list = this._roleProfileRepository.Table;
            return new PagedList<Role>(list.OrderByDescending(m => m.AddTime), pageIndex, pageSize);
        }
        #endregion
    }
}
