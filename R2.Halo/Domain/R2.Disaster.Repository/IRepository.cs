using System.Collections.Generic;
using System.Linq;

namespace R2.Halo.Repository
{
    /// <summary>
    /// Repository
    /// </summary>
    public partial interface IRepository<T>
    {
        T GetById(object id);

        void Insert(T entity,bool saved=true);

        void Insert(IList<T> entities);
        void Update(T entity,bool saved=true);

        void Update(IList<T> entities);
        void Delete(T entity,bool saved=true);

        void Delete(IList<T> entities);

        void Delete(object id,bool saved=true);

        void Delete(IList<object> id);

        IQueryable<T> Table { get; }
    }
}
