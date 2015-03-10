using R2.Halo.CoreEntities;
using R2.Halo.CoreEntities.Sample;
using R2.Halo.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Halo.Repository
{
    public interface IBookRepository:IRepository<Book>
    {
        string GetByName(string name);
    }
}
