using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Disaster.CoreEntities.Domain.GeoDisaster
{
    /// <summary>
    /// 行政区划代码（国标代码,目前只支持6位省市县三级）
    /// 后续版本可能会支持12位到乡镇的编码
    /// </summary>
    //代码从左至右的含义是：
    //第一、二位表示省（自治区、直辖市、特别行政区）。
    //第三、四位表示市（地区、自治州、盟及国家直辖市所属市辖区和县的汇总码）
        //。其中，01-20，51-70表示省直辖市；21-50表示地区（自治州、盟）。
    //第五、六位表示县（市辖区、县级市、旗）。01-18表示市辖区或地区（自治州、盟）辖县级市；
        //21-80表示县（旗）；81-99表示省直辖县级市。
    public class GBCode
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }
}
