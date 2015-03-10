using R2.Halo.CoreEntities;
using R2.Halo.CoreEntities.Sample;
using R2.Halo.Data;
using R2.Halo.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Halo.Repository
{
    public class BookRepository:EFRepository<Book>,IBookRepository
    {
        public BookRepository(IDbContext db):base(db)
        {
            
        }
        public string GetByName(string name)
        {
            throw new NotImplementedException();
        }
    }
}
