using System;
using System.Linq;
using R2.Disaster.Core;
using R2.Halo.CoreEntities.Logging;
using R2.Halo.CoreEntities.Users;
using R2.Halo.Data;


namespace R2.Halo.Service.Logging
{
    public partial class DefaultLogger : EntityServiceBase<Log>, ILogger
    {
        #region Fields

        private readonly IRepository<Log> _logRepository;
        
        #endregion
        
        #region Ctor
        public DefaultLogger(IRepository<Log> logRepository)
            : base(logRepository)
        {
            this._logRepository = logRepository;
        }

        #endregion

        #region Methods
        public virtual Log InsertLog(LogLevel logLevel, string shortMessage, string fullMessage = "", UserProfile user = null)
        {
            var log = new Log()
            {
                LogLevel = logLevel,
                ShortMessage = shortMessage,
                FullMessage = fullMessage,
                UserProfile = user,
                AddTime = DateTime.UtcNow
            };
            _logRepository.Insert(log);
            return log;
        }
        public void ClearLog()
        {
            var data = this._logRepository.Table.ToList();
            this._logRepository.Delete(data);
        }

        public IPagedList<Log> GetPagedList(int pageIndex, int pageSize)
        {
            var list = this._logRepository.Table;
            return new PagedList<Log>(list.OrderByDescending(m => m.AddTime), pageIndex, pageSize);
        }
        #endregion



    }
}
