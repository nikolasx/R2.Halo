using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using R2.Disaster.CoreEntities.Domain.MineRecovery;
using R2.Disaster.Service.MineRecovery;

namespace R2.Disaster.WebAPI.Controllers.MineRecovery
{
    /// <summary>
    /// 矿山复绿基础档案表
    /// </summary>
    public class MineArchiveController:EntityControllerBase<MineArchive>
    {

        private IMineArchiveService _mineArchiveService;

        public MineArchiveController(IMineArchiveService mineArchiveService)
            : base(mineArchiveService)
        {
            this._mineArchiveService = mineArchiveService;
        }
    }
}