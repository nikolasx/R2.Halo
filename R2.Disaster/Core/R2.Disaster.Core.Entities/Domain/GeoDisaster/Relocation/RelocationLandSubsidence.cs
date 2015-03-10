using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster.Relocation
{
    /// <summary>
    /// 移民搬迁地面沉降
    /// </summary>
    public class RelocationLandSubsidence:BaseEntity
    {


        #region 具体属性
        //public string 统一编号 { get; set; }
        //public string 名称 { get; set; }
        public string 发生时间 { get; set; }
        public string 野外编号 { get; set; }
        public string 室内编号 { get; set; }
        //public int X坐标 { get; set; }
        //public int Y坐标 { get; set; }
        //public string 经度 { get; set; }
        //public string 纬度 { get; set; }
        public string 沉降类型 { get; set; }
        //public string 地理位置 { get; set; }
        public string 沉降中心位置 { get; set; }
        public string 沉降中心经度 { get; set; }
        public string 沉降中心纬度 { get; set; }
        public double 沉降区面积 { get; set; }
        public double 年平均沉降量 { get; set; }
        public double 历年累计沉降量 { get; set; }
        public double 平均沉降速率 { get; set; }
        public string 地形地貌 { get; set; }
        public string 地质构造及活动情况 { get; set; }
        public string 岩性 { get; set; }
        public string 厚度 { get; set; }
        public string 结构 { get; set; }
        public string 空间变化规律 { get; set; }
        public string 水文地质特征 { get; set; }
        public string 主要沉降层位 { get; set; }
        public double 年开采量 { get; set; }
        public double 年补给量 { get; set; }
        public double 地下水埋深 { get; set; }
        public double 年水位变化幅度 { get; set; }
        public string 其它 { get; set; }
        public string 诱发沉降原因 { get; set; }
        public string 变化规律 { get; set; }
        public string 沉降现状 { get; set; }
        public string 发展趋势 { get; set; }
        public string 主要危害 { get; set; }
        public double 经济损失 { get; set; }
        public string 治理措施 { get; set; }
        public string 治理效果 { get; set; }
        public string 调查负责人 { get; set; }
        public string 填表人 { get; set; }
        public string 审核人 { get; set; }
        public string 调查单位 { get; set; }
        public string 填表日期 { get; set; }
        public string 省名 { get; set; }
        public string 县名 { get; set; }
        public string 街道 { get; set; }
        //public double 灾害体积 { get; set; }
        public string 平面示意图路径 { get; set; }
        public string 剖面示意图路径 { get; set; }
        #endregion
    }
}
