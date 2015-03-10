using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace R2.Halo.Web.Models.Apps
{
    public class AppCategoryModel
    {

        public int Id { get; set; }
        public string  Name { get; set; }
        public string Desc { get; set; }
        public DateTime? AddTime { get; set; }

    }
}
