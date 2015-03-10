using System;
using R2.Halo.CoreEntities.Users;


namespace R2.Halo.CoreEntities.Logging
{
 
    public partial class Log 
    {

        public virtual int Id { get; set; }
        public virtual string ShortMessage { get; set; }
        public virtual string FullMessage { get; set; }
        public virtual int? UserProfileId { get; set; }
        public virtual DateTime? AddTime { get; set; }
        public virtual UserProfile UserProfile { get; set; }
        public virtual LogLevel LogLevel { get; set; }
    }
}
