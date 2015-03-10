using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁崩塌
    /// </summary>
    public class RelocationLandSlip : BaseEntity
    {
        #region 具体属性
        //public string 统一编号 { get; set; }
        //public string 名称 { get; set; }
        public string 野外编号 { get; set; }
        public string 室内编号 { get; set; }
        public string 斜坡类型 { get; set; }
        public string 崩塌类型 { get; set; }
        //public string 地理位置 { get; set; }
        //public double X坐标 { get; set; }
        //public double Y坐标 { get; set; }
        public double 坡顶标高 { get; set; }
        public double 坡脚标高 { get; set; }
        //public string 经度 { get; set; }
        //public string 纬度 { get; set; }
        public string 地层时代 { get; set; }
        public string 地层岩性 { get; set; }
        public string 构造部位 { get; set; }
        public string 地震烈度 { get; set; }
        public int 地层倾向 { get; set; }
        public int 地层倾角 { get; set; }
        public string 微地貌 { get; set; }
        public string 地下水类型 { get; set; }
        public double 年均降雨量 { get; set; }
        public double 日最大降雨 { get; set; }
        public double 时最大降雨 { get; set; }
        public double 洪水位 { get; set; }
        public double 枯水位 { get; set; }
        public string 相对河流位置 { get; set; }
        public double 坡高 { get; set; }
        public double 坡长 { get; set; }
        public double 坡宽 { get; set; }
        public double 规模 { get; set; }
        //public string 规模等级 { get; set; }
        public double 坡度 { get; set; }
        public double 坡向 { get; set; }
        public string 岩体结构类型 { get; set; }
        public double 岩体厚度 { get; set; }
        public int 岩体裂隙组数 { get; set; }
        public string 岩体块度 { get; set; }
        public string 斜坡结构类型 { get; set; }
        public string 控制结构面类型1 { get; set; }
        public int 控制结构面倾向1 { get; set; }
        public int 控制结构面倾角1 { get; set; }
        public double 控制结构面长度1 { get; set; }
        public double 控制结构面间距1 { get; set; }
        public string 控制结构面类型2 { get; set; }
        public int 控制结构面倾向2 { get; set; }
        public int 控制结构面倾角2 { get; set; }
        public double 控制结构面长度2 { get; set; }
        public double 控制结构面间距2 { get; set; }
        public string 控制结构面类型3 { get; set; }
        public int 控制结构面倾向3 { get; set; }
        public int 控制结构面倾角3 { get; set; }
        public double 控制结构面长度3 { get; set; }
        public double 控制结构面间距3 { get; set; }
        public double 全风化带深度 { get; set; }
        public double 卸荷裂缝深度 { get; set; }
        public string 土体名称 { get; set; }
        public string 土体密实度 { get; set; }
        public string 土体稠度 { get; set; }
        public string 下伏基岩时代 { get; set; }
        public string 下伏基岩岩性 { get; set; }
        public int 下伏基岩倾向 { get; set; }
        public int 下伏基岩倾角 { get; set; }
        public int 下伏基岩埋深 { get; set; }
        public string 变形迹象名称1 { get; set; }
        public string 变形迹象部位1 { get; set; }
        public string 变形迹象特征1 { get; set; }
        public string 变形迹象初现时间1 { get; set; }
        public string 变形迹象名称2 { get; set; }
        public string 变形迹象部位2 { get; set; }
        public string 变形迹象特征2 { get; set; }
        public string 变形迹象初现时间2 { get; set; }
        public string 变形迹象名称3 { get; set; }
        public string 变形迹象部位3 { get; set; }
        public string 变形迹象特征3 { get; set; }
        public string 变形迹象初现时间3 { get; set; }
        public string 变形迹象名称4 { get; set; }
        public string 变形迹象部位4 { get; set; }
        public string 变形迹象特征4 { get; set; }
        public string 变形迹象初现时间4 { get; set; }
        public string 变形迹象名称5 { get; set; }
        public string 变形迹象部位5 { get; set; }
        public string 变形迹象特征5 { get; set; }
        public string 变形迹象初现时间5 { get; set; }
        public string 变形迹象名称6 { get; set; }
        public string 变形迹象部位6 { get; set; }
        public string 变形迹象特征6 { get; set; }
        public string 变形迹象初现时间6 { get; set; }
        public string 变形迹象名称7 { get; set; }
        public string 变形迹象部位7 { get; set; }
        public string 变形迹象特征7 { get; set; }
        public string 变形迹象初现时间7 { get; set; }
        public string 变形迹象名称8 { get; set; }
        public string 变形迹象部位8 { get; set; }
        public string 变形迹象特征8 { get; set; }
        public string 变形迹象初现时间8 { get; set; }
        public string 危岩体可能失稳因素 { get; set; }
        public string 危岩体目前稳定程度 { get; set; }
        public string 危岩体今后变化趋势 { get; set; }
        public int 地下水埋深 { get; set; }
        public string 地下水露头 { get; set; }
        public string 地下水补给类型 { get; set; }
        public double 堆积体长度 { get; set; }
        public double 堆积体宽度 { get; set; }
        public double 堆积体厚度 { get; set; }
        public string 堆积体体积 { get; set; }
        public double 堆积体坡度 { get; set; }
        public double 堆积体坡向 { get; set; }
        public string 堆积体坡面形态 { get; set; }
        public string 堆积体稳定性 { get; set; }
        public string 堆积体可能失稳因素 { get; set; }
        public string 堆积体目前稳定状态 { get; set; }
        public string 堆积体今后变化趋势 { get; set; }
        public bool 隐患点 { get; set; }
        public bool 防灾预案 { get; set; }
        public bool 多媒体 { get; set; }
        //public double 死亡人口 { get; set; }
        public int 毁坏房屋 { get; set; }
        public double 毁路 { get; set; }
        public double 毁渠 { get; set; }
        public string 其它危害 { get; set; }
        //public double 直接损失 { get; set; }
        //public string 灾情等级 { get; set; }
        public int 威胁人口 { get; set; }
        public int 威胁财产 { get; set; }
        public string 险情等级 { get; set; }
        public string 监测建议 { get; set; }
        public string 防治建议 { get; set; }
        public string 群测人员 { get; set; }
        public string 村长 { get; set; }
        public string 电话 { get; set; }
        public string 调查负责人 { get; set; }
        public string 填表人 { get; set; }
        public string 审核人 { get; set; }
        public string 调查单位 { get; set; }
        public string 填表日期 { get; set; }
        public string 土地利用 { get; set; }
        public string 发生时间 { get; set; }
        public byte[] 平面示意图 { get; set; }
        public byte[] 剖面示意图 { get; set; }
        public string 崩塌情况 { get; set; }
        public string 省名 { get; set; }
        public string 县名 { get; set; }
        public string 街道 { get; set; }
        public double 灾害体积 { get; set; }
        public string 平面示意图路径 { get; set; }
        public string 剖面示意图路径 { get; set; }
        #endregion
    }
}
