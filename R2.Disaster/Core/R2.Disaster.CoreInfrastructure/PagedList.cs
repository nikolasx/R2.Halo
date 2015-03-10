using System;
using System.Collections.Generic;
using System.Linq;

namespace R2.Disaster.Core
{
    public class PagedList<T>:IPagedList<T> where T:class
    {
        public PagedList(IQueryable<T> source, int pageIndex, int pageSize)
        {
            this.TotalCount = source.Count();
            this.TotalPages = TotalCount / pageSize;
            if (TotalCount % pageSize > 0)
                TotalPages++;
            this.PageSize = pageSize;
            this.PageIndex = pageIndex;
            List = source.Skip((pageIndex-1) * pageSize).Take(pageSize).ToList();
        }
   
        public int PageIndex { get; private set; }
        public int PageSize { get; private set; }
        public int TotalCount { get; private set; }
        public int TotalPages { get; private set; }
        public IList<T> List { get; private set; }
    }
}
