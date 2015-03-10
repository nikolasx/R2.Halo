using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using R2.Disaster.Core;
using R2.Disaster.WebFramework.Controllers;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.CoreEntities.Users;
using R2.Halo.Service.Apps;
using R2.Halo.Service.Users;
using R2.Halo.Web.Models.Apps;
using R2.Halo.Web.Models.Users;

namespace R2.Halo.Web.Controllers
{
    /// <summary>
    /// 此controller相当于普通网站的会员管理
    /// </summary>
    public class UserController : BaseHaloController
    {
        #region Fields

        private readonly IUserProfileService _userProfileService;
        private readonly IUserFancyAppService _userFancyAppService;
        private readonly IAppService _appService;
        private readonly IRoleService _roleService;
        private readonly IRoleAppService _roleAppService;
        private string _result = string.Empty;
        #endregion

        #region Constructors

        public UserController(IUserProfileService userProfileService, IUserFancyAppService userFancyAppService
                , IAppService appService, IRoleService roleService, IRoleAppService roleAppService
            )
        {
            this._userProfileService = userProfileService;
            this._userFancyAppService = userFancyAppService;
            this._appService = appService;
            this._roleService = roleService;
            this._roleAppService = roleAppService;
        }

        #endregion

        #region Utitilies
        [NonAction]
        public List<int> GetVaildApp(int userId)
        {
            //var cookie= 获取cookie信息，通过roleid判断合法app集合
            int i = GetUserRole();
            if (i == 0) throw new NullReferenceException("Cookie is null");
            var appList = this._roleAppService.GetRoleAppByRoleId(i).ToList().Select(m => m.AppId).ToList();
            var fancyApps = this._userFancyAppService.GetUserFancyAppByUserId(userId).Select(m => m.AppId).ToList();
            for (int j = 0; j < appList.Count(); j++)
            {
                if (fancyApps.Contains(appList.ElementAt(j)))
                {
                    appList.RemoveAt(j--);
                }
            }
            return appList.ToList();

        }
        [NonAction]
        private void SaveFancyApps(string[] roleAppTag)
        {
            var userid = GetCookie().FirstOrDefault();
            var fancyApps = this._userFancyAppService.GetUserFancyAppByUserId(int.Parse(userid)).ToList();
            this._userFancyAppService.Delete(fancyApps);
            var ufs = new List<UserFancyApp>();
            roleAppTag.ToList().ForEach(m =>
            {
                var model = new UserFancyApp { UserId = int.Parse(userid), AppId = int.Parse(m), AddTime = DateTime.Now };
                ufs.Add(model);
            });
            this._userFancyAppService.Add(ufs);
        }
        [NonAction]
        private void SaveNewAddedUerFancyApp(UserProfile user)
        {
            var d = this._roleAppService.GetRoleAppByRoleId(2).Select(m => m.AppId);
            var ufs = new List<UserFancyApp>();
            d.ToList().ForEach(s =>
            {
                var model1 = new UserFancyApp { UserId = user.Id, AppId = s, AddTime = DateTime.Now, DisplayOrder = 0 };
                ufs.Add(model1);
            });
            this._userFancyAppService.Add(ufs);
        }
        #endregion

        #region User
        public ActionResult Index()
        {
            return RedirectToAction("List");
        }
        public ActionResult List(int pageIndex = 1, int pageSize = 20)
        {
            IPagedList<UserProfile> list = null;
            list = this._userProfileService.GetPagedList(pageIndex, pageSize);
            var gridModel = new
            {
                Data = list.List.Select(x =>
                {
                    var m = x.ToModel();
                    m.RoleName = x.Role.Title;
                    return m;
                }),
                TotalCount = list.TotalCount
            };
            return Content(JsonConvert.SerializeObject(gridModel));

        }
        [HttpPost]
        public ActionResult Create(UserProfileModel model)
        {
            if (_userProfileService.List().Count(m => m.Account == model.Account) > 0)
            {
                _result = "failed";
                return Content(_result);
            }
            model.RoleId = 2;
            var user = model.ToEntity();
            model.AddTime = DateTime.Now;
            _userProfileService.Add(user);
           SaveNewAddedUerFancyApp(user);

            _result = "success";
            return Content(_result);
        }



        public ActionResult Detail(int id)
        {
            var userProfile = this._userProfileService.Get(id);
            var model = userProfile.ToModel();
            model.AddTime = userProfile.AddTime;
            model.RoleName = userProfile.Role.Title;
            return Content(JsonConvert.SerializeObject(model));
        }
        public ActionResult Edit(UserProfileModel model)
        {
            var userProfile = this._userProfileService.Get(model.Id);
            userProfile = model.ToEntity(userProfile);
            this._userProfileService.Update(userProfile); ;
            _result = "success";
            return Content(_result);
        }
        public ActionResult Delete(int id)
        {
            var userProfile = _userProfileService.Get(id);
            _userProfileService.Delete(userProfile);
            _result = "success";
            return Content(_result);
        }
        #endregion

        #region FancyAPP
        [HttpPost]
        public ActionResult AddFancyApp(int appId, int userId, int displayOrder = 0)
        {
            if (appId == 0 || !GetVaildApp(userId).Contains(appId) || this._userFancyAppService.List().FirstOrDefault(m => m.AppId == appId && m.UserId == userId) == null)
                throw new ArgumentException();
            var userProfile = _userProfileService.Get(userId);
            if (userProfile == null)
                throw new ArgumentException("用户不存在");
            _userFancyAppService.Add(new UserFancyApp
            {
                AppId = appId,
                UserId = userId,
                DisplayOrder = displayOrder,
                AddTime = DateTime.Now,
            });
            _result = "success";
            return Content(_result);
        }
        public ActionResult AddAndEditFancyApps(string fancyTag)
        {
            SaveFancyApps(StringToArray(fancyTag));
            _result = "success";
            return Content(_result);
        }

        public ActionResult GetFancyAppList()
        {
            var userId = GetCookie().FirstOrDefault();
            var fancyAppList = _userFancyAppService.GetUserFancyAppByUserId(int.Parse(userId));
            var fancyAppListsModel = fancyAppList
                .Select(x =>
                    new UserProfileModel.UserFancyAppModel()
                    {
                        Id = x.Id,
                        UserId = x.UserId,
                        AppId = x.AppId,
                        AppName = x.App.Name,
                        DisplayOrder = x.DisplayOrder,
                        AppUrl = x.App.RouteUrl
                    });
            return Content(JsonConvert.SerializeObject(fancyAppListsModel));
        }

        public ActionResult GetAccessAppList()
        {
            var userId = GetCookie().FirstOrDefault();
            List<int> accessAppList = GetVaildApp(int.Parse(userId));
            var data = from t in _appService.List()
                       where accessAppList.Any(m => m == t.Id)
                       orderby t.Id
                       select new
                       {
                           AppId = t.Id,
                           AppName = t.Name,
                           AppUrl = t.RouteUrl
                       };
            return Content(JsonConvert.SerializeObject(data.ToList()));
        }

        public ActionResult DeleteFancyApp(int id)
        {
            var productPicture = _userFancyAppService.Get(id);
            if (productPicture == null)
                throw new ArgumentException("No FancyApp found with the specified id");
            _userFancyAppService.Delete(id);
            _result = "success";
            return Content(_result);
        }

        #endregion
        //用于前台的分类展示
        #region valid APP list
        //获取角色应该具备的所有app，并按分组进行展示，没有进行分页处理
        //TODO 此方法与GetFancyAppAndAppCategory需要重构，减少代码重复，提高复用
        public ActionResult GetAppAndAppCategory()
        {
            int roleId = GetUserRole();
            if (roleId == 0) throw new NullReferenceException("Cookie is null");
            var data = this._roleAppService.GetRoleAppByRoleId(roleId).Select(m => m.AppId);
            var apps = (from t in this._appService.List()
                        where data.Any(m => m == t.Id)
                        select t);
            var appCategorys = apps.Select(m => m.AppCategoryId).Distinct();
            var list = new List<AppCategoryListModel>();
            foreach (var i in appCategorys.ToList())
            {
                var appCategoryListModel = new AppCategoryListModel();
                var d = (from t in apps
                         where t.AppCategoryId == i
                         select t).ToList().Select(m =>
                         {
                             var s = m.ToModel();
                             s.AppCategoryName = m.AppCategory.Name;
                             return s;
                         });
                appCategoryListModel.AppCategoryName = d.First().AppCategoryName;
                appCategoryListModel.AppModelList = d.ToList();
                list.Add(appCategoryListModel);

            }
            return Content(JsonConvert.SerializeObject(list));
        }
        //获取用户喜好app，并按分组进行展示
        public ActionResult GetFancyAppAndAppCategory()
        {
            int roleId = GetUserRole();
            var userid = GetCookie().FirstOrDefault();
            if (roleId == 0) throw new NullReferenceException("Cookie is null");
            var data = this._userFancyAppService.GetUserFancyAppByUserId(int.Parse(userid)).Select(m => m.AppId);
            var apps = (from t in this._appService.List()
                        where data.Any(m => m == t.Id)
                        select t);
            var appCategorys = apps.Select(m => m.AppCategoryId).Distinct();
            var list = new List<AppCategoryListModel>();
            foreach (var i in appCategorys.ToList())
            {
                var appCategoryListModel = new AppCategoryListModel();
                var d = (from t in apps
                         where t.AppCategoryId == i
                         select t).ToList().Select(m =>
                         {
                             var s = m.ToModel();
                             s.AppCategoryName = m.AppCategory.Name;
                             return s;
                         });
                appCategoryListModel.AppCategoryName = d.First().AppCategoryName;
                appCategoryListModel.AppModelList = d.ToList();
                list.Add(appCategoryListModel);

            }
            return Content(JsonConvert.SerializeObject(list));
        }
        //按照分组展示app，用于以后拓展分页功能
        public ActionResult GetValidAppByAppCategoryId(int appCategoryId, int pageIndex = 1, int pageSize = 20)
        {
            int roleId = GetUserRole();
            var data = this._roleAppService.GetRoleAppByRoleId(roleId).Select(m => m.AppId).ToList();
            var apps = from t in this._appService.List()
                       where data.Any(m => m == t.Id) && t.AppCategoryId == appCategoryId
                       select t;
            var lists = new PagedList<App>(apps.OrderByDescending(m => m.AddTime), pageIndex, pageSize);
            var gridModel = new
            {
                Data = lists.List.Select(x => new
                {
                    AppName = x.Name,
                    AppUrl = x.RouteUrl,
                }),
                TotalCount = lists.TotalCount
            };
            return Content(JsonConvert.SerializeObject(gridModel));
        }
        #endregion
    }
}
