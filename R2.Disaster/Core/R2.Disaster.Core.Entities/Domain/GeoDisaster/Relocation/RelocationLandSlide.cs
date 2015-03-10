using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁滑坡
    /// </summary>
    public class RelocationLandSlide : BaseEntity
    {

        #region 具体属性
        //public string 统一编号 { get; set; }
        //public string 名称 { get; set; }
        public string 野外编号 { get; set; }
        public string 室内编号 { get; set; }
        public string 滑坡年代 { get; set; }
        public string 滑坡时间 { get; set; }
        public string 滑坡类型 { get; set; }
        public string 滑体性质 { get; set; }
        //public double X坐标 { get; set; }
        //public double Y坐标 { get; set; }
        public float 冠 { get; set; }
        public float 趾 { get; set; }
        //public string 经度 { get; set; }
        //public string 纬度 { get; set; }
        //public string 地理位置 { get; set; }
        public string 地层时代 { get; set; }
        public string 地层岩性 { get; set; }
        public string 构造部位 { get; set; }
        public string 地震烈度 { get; set; }
        public int 地层倾向 { get; set; }
        public int 地层倾角 { get; set; }
        public string 微地貌 { get; set; }
        public string 地下水类型 { get; set; }
        public float 年均降雨量 { get; set; }
        public float 日最大降雨量 { get; set; }
        public float 时最大降雨量 { get; set; }
        public float 洪水位 { get; set; }
        public float 枯水位 { get; set; }
        public string 相对河流位置 { get; set; }
        public float 原始坡高 { get; set; }
        public float 原始坡度 { get; set; }
        public string 原始坡形 { get; set; }
        public string 斜坡结构类型 { get; set; }
        public string 控滑结构面类型1 { get; set; }
        public int 控滑结构面倾向1 { get; set; }
        public int 控滑结构面倾角1 { get; set; }
        public string 控滑结构面类型2 { get; set; }
        public int 控滑结构面倾向2 { get; set; }
        public int 控滑结构面倾角2 { get; set; }
        public string 控滑结构面类型3 { get; set; }
        public int 控滑结构面倾向3 { get; set; }
        public int 控滑结构面倾角3 { get; set; }
        public float 滑坡长度 { get; set; }
        public float 滑坡宽度 { get; set; }
        public float 滑坡厚度 { get; set; }
        public float 滑坡坡度 { get; set; }
        public float 滑坡坡向 { get; set; }
        public float 滑坡面积 { get; set; }
        public float 滑坡体积 { get; set; }
        public string 滑坡平面形态 { get; set; }
        public string 滑坡剖面形态 { get; set; }
        public string 规模等级 { get; set; }
        public string 滑体岩性 { get; set; }
        public string 滑体结构 { get; set; }
        public float 滑体碎石含量 { get; set; }
        public string 滑体块度 { get; set; }
        public string 滑床岩性 { get; set; }
        public string 滑床时代 { get; set; }
        public int 滑床倾向 { get; set; }
        public int 滑床倾角 { get; set; }
        public string 滑面形态 { get; set; }
        public float 滑面埋深 { get; set; }
        public int 滑面倾向 { get; set; }
        public int 滑面倾角 { get; set; }
        public float 滑带厚度 { get; set; }
        public string 滑带土名称 { get; set; }
        public string 滑带土性状 { get; set; }
        public float 地下水埋深 { get; set; }
        public string 地下水露头 { get; set; }
        public string 地下水补给类型 { get; set; }
        public string 土地使用 { get; set; }
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
        public string 地质因素 { get; set; }
        public string 地貌因素 { get; set; }
        public string 物理因素 { get; set; }
        public string 人为因素 { get; set; }
        public string 主导因素 { get; set; }
        public string 复活诱发因素 { get; set; }
        public string 目前稳定状态 { get; set; }
        public string 今后变化趋势 { get; set; }
        public bool 隐患点 { get; set; }
        public float 毁坏房屋 { get; set; }
        //public int 死亡人口 { get; set; }
        //public float 直接损失 { get; set; }
        //public string 灾情等级 { get; set; }
        public float 威胁住户 { get; set; }
        //public int 威胁人口 { get; set; }
        //public float 威胁财产 { get; set; }
        //public string 险情等级 { get; set; }
        public bool 防灾预案 { get; set; }
        public bool 多媒体 { get; set; }
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
        public byte[] 平面示意图 { get; set; }
        public byte[] 剖面示意图 { get; set; }
        public string 滑坡情况 { get; set; }
        //public double 灾害体积 { get; set; }

        #endregion
    }
}
