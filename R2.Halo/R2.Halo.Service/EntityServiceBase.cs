
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using R2.Halo.Data;

namespace R2.Halo.Service
{
    public class EntityServiceBase<T> : IEntityServiceBase<T> where T:class
    {
        protected IRepository<T> _repository;

        public EntityServiceBase(IRepository<T> repository)
        {
            this._repository = repository;
        }
        /// <summary>
        /// 根据条件，返回符合条件的集合
        /// </summary>
        /// <param name="condition"></param>
        /// <returns></returns>
        public IQueryable<T> ExecuteConditions(Expression<Func<T, bool>> condition)
        {
            return this._repository.Table.Where(condition.Compile()).AsQueryable<T>();
        }

        public void Update(T entity)
        {
            this._repository.Update(entity);
        }

        public T Get(object id)
        {
            return this._repository.GetById(id);
        }

        public void Delete(T entity)
        {
            this._repository.Delete(entity);
        }

        public void Delete(object id)
        {
            this._repository.Delete(id);
        }

        public void Add(T entity)
        {
            this._repository.Insert(entity);
        }


        public void Update(IList<T> entities)
        {
            this._repository.Update(entities);
        }

        public void Delete(IList<T> entities)
        {
            this._repository.Delete(entities);
        }

        public void Delete(IList<object> ids)
        {
            this._repository.Delete(ids);
        }

        public void Add(IList<T> entities)
        {
            this._repository.Insert(entities);
        }

        public IQueryable<T> List()
        {
            return this._repository.Table;
        }
    }
}
