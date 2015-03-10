using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.MineRecovery
{
    /// <summary>
    /// 矿山复绿环境调查表
    /// </summary>
    public class MineEnvironmentSurvey:BaseEntity
    {

        //public int Id { get; set; }
        public string 统一编号 { get; set; }
        public string 图斑编号 { get; set; }
        public string 矿山名称 { get; set; }
        public string 设区市 { get; set; }
        public string 县_市_区_ { get; set; }
        public string 乡_镇_ { get; set; }
        public string 村 { get; set; }
        public string 组 { get; set; }
        public string 矿山区位 { get; set; }
        public string 区位 { get; set; }
        public string 区位描述 { get; set; }
        public string 矿山所处地貌形态 { get; set; }
        public double X { get; set; }
        public double Y { get; set; }
        public string 经度 { get; set; }
        public string 纬度 { get; set; }
        public string 矿区拐点坐标 { get; set; }
        public string 破坏区拐点坐标 { get; set; }
        public string 采矿许可证号 { get; set; }
        public string 经济类型 { get; set; }
        public string 开采主矿种 { get; set; }
        public string 矿类 { get; set; }
        public string 矿山规模 { get; set; }
        public string 生产现状 { get; set; }
        public DateTime? 建矿时间 { get; set; }
        public DateTime? 闭坑时间 { get; set; }
        public double 矿区面积_公顷_ { get; set; }
        public string 开采方式 { get; set; }
        public double 生产能力_万吨_年_ { get; set; }
        public string 选矿能力_万吨_年_ { get; set; }
        public string 本年度采出矿石量_万吨_ { get; set; }
        public double 累计采出矿石量_万吨_ { get; set; }
        public string 采空区面积_公顷_ { get; set; }
        public string 最大采深_米_ { get; set; }
        public string 采厚_米_ { get; set; }
        public string 保证金建立时间 { get; set; }
        public double 年度保证金缴纳额_万元_ { get; set; }
        public double 本年度保证金缴纳金额_万元_ { get; set; }
        public double 矿山保证金账户金额_万元_ { get; set; }
        public double 耕地 { get; set; }
        public double 林地 { get; set; }
        public double 草地 { get; set; }
        public double 园地 { get; set; }
        public double 其它 { get; set; }
        public double 小计 { get; set; }
        public string 矿山地质环境恢复治理方案 { get; set; }
        public double 应恢复治理面积_公顷_ { get; set; }
        public double 矿山复绿行动需治理面积_公顷_ { get; set; }
        public string 影响及威胁对象 { get; set; }
        public string 建议防治措施 { get; set; }
        public string 治理责任主体 { get; set; }
        public string 治理资金渠道 { get; set; }
        public string 是否列入省级矿山复绿行动实施方案 { get; set; }
        public double C2013年 { get; set; }
        public double C2014年 { get; set; }
        public double C2015年 { get; set; }
        public double C2016年_2020年 { get; set; }
        public string 治理年度 { get; set; }
        public double 治理单价 { get; set; }
        public double 合计 { get; set; }
        public string 验收时间 { get; set; }
        public string 调查人 { get; set; }
        public string 填表单位 { get; set; }
        public string 填表 { get; set; }
        public string 审核 { get; set; }
        public DateTime? 填表日期 { get; set; }
        public string 备注 { get; set; }
        public double? 地形地貌景观破坏_ { get; set; }
        public string 地面塌陷 { get; set; }
        public string 崩塌 { get; set; }
        public string 滑坡 { get; set; }
        public string 泥石流 { get; set; }
        public string 其他 { get; set; }
        public string 治理现状 { get; set; }
        public string 重点治理区名称 { get; set; }
        public string 治理区编号 { get; set; }
    }
}
