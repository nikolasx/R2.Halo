using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace R2.Halo.Service
{
    public interface IEntityServiceBase<T> where T:class
    {

        void Update(T entity);

        void Update(IList<T> entities);

        void Delete(T entity);

        void Delete(IList<T> entities);

         void Delete(object id);

         void Delete(IList<object> ids);

         void Add(T entity);

         void Add(IList<T> entities);

         T Get(object id);

         IQueryable<T> List();
    }
}
