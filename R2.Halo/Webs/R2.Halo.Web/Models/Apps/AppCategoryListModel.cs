using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace R2.Halo.Web.Models.Apps
{
    public class AppCategoryListModel
    {
        public AppCategoryListModel()
        {
            AppModelList = new List<AppModel>();
        }
       public string  AppCategoryName{get; set; }
       public List<AppModel> AppModelList { get; set; }
    }
}