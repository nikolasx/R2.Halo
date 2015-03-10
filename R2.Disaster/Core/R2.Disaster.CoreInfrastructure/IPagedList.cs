using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace R2.Disaster.Core
{
    public interface IPagedList<T>
    {
        int PageIndex { get; }
        int PageSize { get; }
        int TotalCount { get; }
        int TotalPages { get; }
        IList<T> List { get;}
    }
}
