using System;
using R2.Halo.CoreEntities.Users;


namespace R2.Halo.Web.Models.Logging
{
 
    public partial class LogModel 
    {

        public virtual int Id { get; set; }
        public virtual string ShortMessage { get; set; }
        public virtual string FullMessage { get; set; }
        public virtual int? UserProfileId { get; set; }
        public virtual DateTime? CreateTime { get; set; }
        public virtual string  UserName { get; set; }
        public virtual string  LogLevel { get; set; }
    }
}
