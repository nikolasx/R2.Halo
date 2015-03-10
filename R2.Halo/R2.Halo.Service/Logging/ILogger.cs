using System;
using R2.Disaster.Core;
using R2.Halo.CoreEntities.Logging;
using R2.Halo.CoreEntities.Users;

namespace R2.Halo.Service.Logging
{
    public partial interface ILogger : IEntityServiceBase<Log>
    {
        void ClearLog();
        IPagedList<Log> GetPagedList(int pageIndex, int pageSize);
        Log InsertLog(LogLevel logLevel, string shortMessage, string fullMessage = "", UserProfile customer = null);
    }
}
