using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁地裂缝
    /// </summary>
    public class RelocationLandFracture:BaseEntity
    {




        #region  具体属性
        //public string 统一编号 { get; set; }
        //public string 名称 { get; set; }
        public string 野外编号 { get; set; }
        public string 室内编号 { get; set; }
        //public int X坐标 { get; set; }
        //public int Y坐标 { get; set; }
        //public int 标高 { get; set; }
        //public string 规模等级 { get; set; }
        //public string 经度 { get; set; }
        //public string 纬度 { get; set; }
        //public string 地理位置 { get; set; }
        //   public int 死亡人口 { get; set; }
        public int 单缝缝号1 { get; set; }
        public string 单缝形态1 { get; set; }
        public string 单缝延伸方向1 { get; set; }
        public int 单缝倾向1 { get; set; }
        public int 单缝倾角1 { get; set; }
        public string 单缝长度1 { get; set; }
        public string 单缝宽度1 { get; set; }
        public string 单缝深度1 { get; set; }
        public string 单缝规模等级1 { get; set; }
        public string 单缝性质1 { get; set; }
        public string 单缝位移方向1 { get; set; }
        public string 单缝位移距离1 { get; set; }
        public string 单缝填充物1 { get; set; }
        public string 单缝出现时间1 { get; set; }
        public string 单缝活动性1 { get; set; }
        public string 单缝缝号2 { get; set; }
        public string 单缝形态2 { get; set; }
        public string 单缝延伸方向2 { get; set; }
        public int 单缝倾向2 { get; set; }
        public int 单缝倾角2 { get; set; }
        public string 单缝长度2 { get; set; }
        public string 单缝宽度2 { get; set; }
        public string 单缝深度2 { get; set; }
        public string 单缝规模等级2 { get; set; }
        public string 单缝性质2 { get; set; }
        public string 单缝位移方向2 { get; set; }
        public string 单缝位移距离2 { get; set; }
        public string 单缝填充物2 { get; set; }
        public string 单缝出现时间2 { get; set; }
        public string 单缝活动性2 { get; set; }
        public string 单缝缝号3 { get; set; }
        public string 单缝形态3 { get; set; }
        public string 单缝延伸方向3 { get; set; }
        public int 单缝倾向3 { get; set; }
        public double 单缝倾角3 { get; set; }
        public string 单缝长度3 { get; set; }
        public string 单缝宽度3 { get; set; }
        public string 单缝深度3 { get; set; }
        public string 单缝规模等级3 { get; set; }
        public string 单缝性质3 { get; set; }
        public string 单缝位移方向3 { get; set; }
        public string 单缝位移距离3 { get; set; }
        public string 单缝填充物3 { get; set; }
        public string 单缝出现时间3 { get; set; }
        public string 单缝活动性3 { get; set; }
        public int 群缝缝数 { get; set; }
        public double 群缝分布面积 { get; set; }
        public double 群缝发育间距 { get; set; }
        public string 群缝排列形式 { get; set; }
        public double 裂缝长度max { get; set; }
        public double 裂缝长度min { get; set; }
        public double 裂缝宽度max { get; set; }
        public double 裂缝宽度min { get; set; }
        public double 裂缝深度max { get; set; }
        public double 裂缝深度min { get; set; }
        public string 始发时间 { get; set; }
        public string 盛发开始时间 { get; set; }
        public string 盛发截止时间 { get; set; }
        public string 停止时间 { get; set; }
        public string 目前发展情况 { get; set; }

        public string 成因类型 { get; set; }
        public string 裂缝区地貌特征 { get; set; }
        public string 裂缝与地貌走向关系 { get; set; }
        public string 裂缝巨岩土层时代 { get; set; }
        public string 裂缝巨岩土层岩性 { get; set; }
        public string 受裂土层时间 { get; set; }
        public string 受裂土层土性 { get; set; }
        public string 受裂土下伏层时间 { get; set; }
        public string 受裂土下伏层岩性 { get; set; }
        public string 受裂岩土层时代 { get; set; }
        public string 受裂岩土层岩性 { get; set; }
        public string 胀缩土特征 { get; set; }
        public string 胀缩土膨胀性 { get; set; }
        public double 胀缩土含水量 { get; set; }
        public string 裂缝区构造断裂走向1 { get; set; }
        public int 裂缝区构造断裂倾向1 { get; set; }
        public int 裂缝区构造断裂倾角1 { get; set; }
        public string 裂缝区构造断裂走向2 { get; set; }
        public int 裂缝区构造断裂倾向2 { get; set; }
        public int 裂缝区构造断裂倾角2 { get; set; }
        public int 岩层中断裂倾向 { get; set; }
        public int 岩层中断裂倾角 { get; set; }
        public bool 土层中有无新断裂 { get; set; }
        public int 土层中新断裂倾向 { get; set; }
        public int 土层中新断裂倾角 { get; set; }
        public string 主要构造断裂走向1 { get; set; }
        public int 主要构造断裂倾向1 { get; set; }
        public int 主要构造断裂倾角1 { get; set; }
        public string 主要构造断裂走向2 { get; set; }
        public int 主要构造断裂倾向2 { get; set; }
        public int 主要构造断裂倾角2 { get; set; }
        public bool 胀缩土中有无新断裂 { get; set; }
        public int 胀缩土中新断裂倾向 { get; set; }
        public int 胀缩土中新断裂倾角 { get; set; }
        public double 洞室埋深 { get; set; }
        public string 洞室规模 { get; set; }
        public double 洞室长 { get; set; }
        public double 洞室宽 { get; set; }
        public double 洞室高 { get; set; }
        public string 洞室与裂缝区位置关系 { get; set; }
        public string 洞室开挖时间 { get; set; }
        public string 洞室开挖方式 { get; set; }
        public string 洞室开挖强度 { get; set; }
        public string 抽排地下水类型 { get; set; }
        public double 抽排井埋深 { get; set; }
        public double 抽排水位水量 { get; set; }
        public double 抽排日出水量 { get; set; }
        public string 抽排水开始时间 { get; set; }
        public string 抽排水停止时间 { get; set; }
        public bool 抽排水状态 { get; set; }
        public string 地震烈度 { get; set; }
        public string 地震发生时间 { get; set; }
        public string 活动断层位置 { get; set; }
        public int 活动断层倾向 { get; set; }
        public int 活动断层倾角 { get; set; }
        public double 活动断层长度 { get; set; }
        public string 活动断层性质 { get; set; }
        public string 活动断层活动时间 { get; set; }
        public string 活动断层活动速率 { get; set; }
        public string 活动断层断距 { get; set; }
        public string 水理作用水源 { get; set; }
        public string 水理作用时间 { get; set; }
        public string 水理作用水质 { get; set; }
        public string 水理作用类型 { get; set; }
        public string 水理作用开挖时间 { get; set; }
        public string 水理作用开挖方式 { get; set; }
        public double 水理作用开挖深度 { get; set; }
        public double 毁坏房屋 { get; set; }
        public string 阻断交通 { get; set; }

        //public double 直接损失 { get; set; }
        //public string 灾情等级 { get; set; }
        public bool 隐患点 { get; set; }
        public double 威胁房屋 { get; set; }
        public string 交通隐患 { get; set; }
        //public int 威胁人口 { get; set; }
        //public double 威胁财产 { get; set; }
        //public string 险情等级 { get; set; }
        public string 发展预测 { get; set; }
        public bool 防灾预案 { get; set; }
        public bool 多媒体 { get; set; }
        public string 防治措施及效果 { get; set; }
        public string 防治建议 { get; set; }
        public string 调查负责人 { get; set; }
        public string 填表人 { get; set; }
        public string 审核人 { get; set; }
        public string 调查单位 { get; set; }
        public string 填表日期 { get; set; }
        public string 抽排水位置关系 { get; set; }
        public byte[] 平面示意图 { get; set; }
        public byte[] 剖面示意图 { get; set; }
        public string 省名 { get; set; }
        public string 县名 { get; set; }
        public string 街道 { get; set; }
        //public double 灾害体积 { get; set; }
        public string 平面示意图路径 { get; set; }
        public string 剖面示意图路径 { get; set; }

        #endregion
    }
}
