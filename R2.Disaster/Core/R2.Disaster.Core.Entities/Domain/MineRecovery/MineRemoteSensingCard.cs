using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.MineRecovery
{
    /// <summary>
    /// 矿山复绿遥感解译卡
    /// </summary>
    public class MineRemoteSensingCard:BaseEntity
    {

        //public int ID { get; set; }
        public string 编号 { get; set; }
        public string 图斑编号 { get; set; }
        public string 设区市 { get; set; }
        public string 县 { get; set; }
        public string 乡镇 { get; set; }
        public string 村 { get; set; }
        public string 组 { get; set; }
        public string 经度 { get; set; }
        public string 纬度 { get; set; }
        public string 三区两线区位 { get; set; }
        public string 矿山名称 { get; set; }
        public string 遥感影像 { get; set; }
        public string 拐点坐标 { get; set; }
        public string 开采矿种 { get; set; }
        public string 地貌类型 { get; set; }
        public string 开采方式 { get; set; }
        public string 采场破坏面积 { get; set; }
        public string 工业广场破坏面积 { get; set; }
        public string 排土场破坏面积 { get; set; }
        public string 其它破坏面积 { get; set; }
        public string 尾矿库破坏面积 { get; set; }
        public string 已治理面积 { get; set; }
        public string 总破坏面积 { get; set; }
        public string 解译人 { get; set; }
        public string 治理方式 { get; set; }
        public string 技术负责 { get; set; }
        public string 校核 { get; set; }
        public string 核查人 { get; set; }
        public DateTime? 解译时间 { get; set; }
        public string 核查单位 { get; set; }
        public string 核查结果 { get; set; }
        public DateTime? 核查时间 { get; set; }
        public string 审核 { get; set; }
        public string 备注 { get; set; }
    }
}
