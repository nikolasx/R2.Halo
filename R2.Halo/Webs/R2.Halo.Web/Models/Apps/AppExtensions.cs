using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.Service.Apps;

namespace R2.Halo.Web.Models.Apps
{
    public  static class AppExtensions
    {
        public static List<AppCategoryListModel> GetGroupedApp(this IList<int> source, IAppService appService)
        {
            var list = new List<AppCategoryListModel>();
            foreach (var i in source)
            {
                var model = new AppCategoryListModel();
                var d = appService.List().Where(m => m.IsPublic==true && m.AppCategoryId == i).ToList().Select(m =>
                {
                    var t = m.ToModel();
                    t.AppCategoryName = m.AppCategory.Name;
                    return t;
                });    
                model.AppCategoryName = d.First().AppCategoryName;
                model.AppModelList = d.ToList();
                list.Add(model);
            }
            return list;
        }
    }
}