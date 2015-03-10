using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.MineRecovery
{
    /// <summary>
    /// 矿山复绿基础档案表
    /// </summary>
    public class MineArchive:BaseEntity
    {

        //public int ID { get; set; }
        public string 编号 { get; set; }
        public string 矿山名称 { get; set; }
        public string 市 { get; set; }
        public string 县 { get; set; }
        public string 乡镇 { get; set; }
        public string 村 { get; set; }
        public string 组 { get; set; }
        public string 区位 { get; set; }
        public string 自然保护区 { get; set; }
        public string 景观 { get; set; }
        public string 居民区 { get; set; }
        public string 交通干线 { get; set; }
        public string 河流 { get; set; }
        public string 位置 { get; set; }
        public string 地质形态 { get; set; }
        public string 山区 { get; set; }
        public string 丘陵 { get; set; }
        public string 平原 { get; set; }
        public string 其他地貌 { get; set; }
        public string 经度 { get; set; }
        public string 纬度 { get; set; }
        public string 拐点坐标 { get; set; }
        public string 企业类型 { get; set; }
        public string 国有经济 { get; set; }
        public string 集体经济 { get; set; }
        public string 联营经济 { get; set; }
        public string 私营经济 { get; set; }
        public string 股份合作 { get; set; }
        public string 股份制企业 { get; set; }
        public string 外商投资 { get; set; }
        public string 其他经济 { get; set; }
        public string 开采矿种 { get; set; }
        public string JBQK38 { get; set; }
        public string 矿山规模 { get; set; }
        public string DXKS { get; set; }
        public string ZXKS { get; set; }
        public string XXKS { get; set; }
        public string 生产现状 { get; set; }
        public string ZJ { get; set; }
        public string KC { get; set; }
        public string GB { get; set; }
        public string TC { get; set; }
        public DateTime? 建矿时间 { get; set; }
        public DateTime? 闭坑时间 { get; set; }
        public double JBQK24 { get; set; }
        public string 开采方式 { get; set; }
        public string LTKC { get; set; }
        public string JGKC { get; set; }
        public string HHKC { get; set; }
        public string QTKC { get; set; }
        public double TDPH108 { get; set; }
        public double ZLLS10 { get; set; }
        public double ZLGH02 { get; set; }
        public double ZLGH03 { get; set; }
        public string 威胁对象 { get; set; }
        public string 威胁景观 { get; set; }
        public string 威胁公路 { get; set; }
        public string 威胁学校 { get; set; }
        public string 威胁铁路 { get; set; }
        public string 威胁居民地 { get; set; }
        public string 威胁航道 { get; set; }
        public string 威胁厂矿企业 { get; set; }
        public string 威胁其他 { get; set; }
        public string 处理措施 { get; set; }
        public string 地灾防治 { get; set; }
        public string 地貌景观修复 { get; set; }
        public string 植被绿化 { get; set; }
        public string 人造景观 { get; set; }
        public string 其他措施 { get; set; }
        public string 治理责任主体 { get; set; }
        public string 地方政府 { get; set; }
        public string 矿山企业 { get; set; }
        public string 资金渠道 { get; set; }
        public string 中央补助 { get; set; }
        public string 地方财政拨款 { get; set; }
        public string 公益投资 { get; set; }
        public string 社会投资 { get; set; }
        public string 其他资金 { get; set; }
        public string 保证金 { get; set; }
        public string 企业自筹 { get; set; }
        public string 其他 { get; set; }
        public string ZLGH08 { get; set; }
        public string ZLGH09 { get; set; }
        public string ZLGH10 { get; set; }
        public string ZLGH11 { get; set; }
        public string ZLGH15 { get; set; }
        public string 验收时间 { get; set; }
        public string 填表人 { get; set; }
        public string 填表单位 { get; set; }
        public string DC03 { get; set; }
        public string 审核人 { get; set; }
        public DateTime? 调查时间 { get; set; }
        public string 备注 { get; set; }
        public string 地质环境问题 { get; set; }
        public string WT01 { get; set; }
        public string WT02 { get; set; }
        public string WT03 { get; set; }
        public string WT04 { get; set; }
        public string WT05 { get; set; }
        public string WT06 { get; set; }
        public string JKND { get; set; }
    }
}
