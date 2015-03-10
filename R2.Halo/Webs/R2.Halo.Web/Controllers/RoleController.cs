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
    [AdminAuthorize(Order = 10)]
    public class RoleController : BaseHaloController
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

        public RoleController(IUserProfileService userProfileService, IUserFancyAppService userFancyAppService
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
        private List<int> GetNoAddedApp(int roleId)
        {
            var appList = this._roleAppService.GetRoleAppByRoleId(roleId).ToList().Select(m => m.AppId).ToList();
            var noAddedApps=from t in this._appService.List()
                            where appList.All(m => m != t.Id)
                            select t.Id;
            return noAddedApps.ToList();

        }
        //批量更新
        [NonAction]
        private void SaveRoleApps(Role role, string [] roleAppTag)
        {
            var list = new  List<RoleApp>();
            roleAppTag.ToList().ForEach(m =>
            {
                var model = new RoleApp
                {
                    AppId = int.Parse(m),
                    RoleId = role.Id,
                    AddTime = DateTime.Now,
                    DisplayOrder = 0
                };
                list.Add(model);
            });
            this._roleAppService.Add(list);
        }
        //批量更新
        [NonAction]
        private void SaveUsers(Role role, string[] userTag)
        {
            var list = new List<UserProfile>();
            var userTags= userTag.ToList().Select(int.Parse);
            userTags.ToList().ForEach(m =>
            {
                var model = this._userProfileService.Get(m);
                model.RoleId = role.Id;
                list.Add(model);
            });
            this._userProfileService.Update(list);
        }
        private void SaveUserFancies(string[] roleAppTag, string[] userTag)
        {
            userTag.ToList().ForEach(m =>
            {
                var ufs = new List<UserFancyApp>();
                roleAppTag.ToList().ForEach(s=>
                {
                    var model = new UserFancyApp { UserId = int.Parse(m), AppId = int.Parse(s), AddTime = DateTime.Now,DisplayOrder=0 };
                    ufs.Add(model);
                });
                this._userFancyAppService.Add(ufs);
            });
        }
        [NonAction]
        private void PrepareAddedApp(RoleModel model, Role role)
        {
            var roleAppList = _roleAppService.GetRoleAppByRoleId(role.Id);
            var roleAppListsModel = roleAppList
                .Select(x =>
                    new RoleModel.RoleAppModel
                    {
                        RoleId = x.RoleId,
                        AppId = x.AppId,
                        AppName = x.App.Name,
                        DisplayOrder = x.DisplayOrder,
                        AppUrl = x.App.RouteUrl
                    });
            model.AddedApp = roleAppListsModel.ToList();
        }
        [NonAction]
        private void PrepareNoAddedApp(RoleModel model, Role role)
        {
            List<int> noAddedAppList = GetNoAddedApp(role.Id);
            var data = from t in _appService.List()
                       where noAddedAppList.Any(m => m == t.Id)
                       orderby t.Id
                       select new RoleModel.RoleAppModel
                       {
                           AppId = t.Id,
                           AppName = t.Name,
                           AppUrl = t.RouteUrl
                       };
            model.NoAddedApp = data.ToList();
        }
         [NonAction]
        private void PrepareAddedUser(RoleModel model, Role role)
        {
            var userList = this._userProfileService.List().Where(m => m.RoleId == role.Id).ToList();
            var roleAppListsModel = userList
                .Select(x =>x.ToModel());
            model.AddedUser = roleAppListsModel.ToList();
        }
        [NonAction]
         private void ReSetFancyApp(RoleModel model, IEnumerable<UserProfile> d)
         {
             var oldUserTag = d.Select(m => m.Id).ToList();
             oldUserTag.ForEach(m =>
             {
                 var c = this._userFancyAppService.GetUserFancyAppByUserId(m).ToList();
                 this._userFancyAppService.Delete(c);
             });
             SaveUserFancies(StringToArray(model.RoleAppTag), StringToArray(model.UserTag));
         }
        [NonAction]
        private void PrepareNoAddedUser(RoleModel model, Role role)
        {
            var data = from t in _userProfileService.List()
                //2代码默认权限
                where t.RoleId == 2
                orderby t.Id
                select t;
            var list = data.ToList().Select(m => m.ToModel());
;
            model.NoAddedUser = list.ToList();
        }

        #endregion

        #region role
        public ActionResult Index()
        {
            return RedirectToAction("List");
        }
        public ActionResult List(int pageIndex = 1, int pageSize = 20)
        {
            IPagedList<Role> list = null;
            list = this._roleService.GetPagedList(pageIndex, pageSize);
            var gridModel = new
            {
                Data = list.List.Select(x =>
                {
                    var m = x.ToModel();
                    return m;
                }),
                TotalCount = list.TotalCount
            };
            return Content(JsonConvert.SerializeObject(gridModel));

        }
        [HttpPost]
        public ActionResult Create(RoleModel model)
        {
            if (_roleService.List().Count(m => m.Title == model.Title) > 0)
            {
                _result = "failed";
                return Content(_result);
            }
            var role = model.ToEntity();
            model.AddTime = DateTime.Now;
            _roleService.Add(role);
            SaveRoleApps(role, StringToArray(model.RoleAppTag));
            SaveUsers(role, StringToArray(model.UserTag));
            SaveUserFancies(StringToArray(model.RoleAppTag), StringToArray(model.UserTag));
            _result = "success";
            return Content(_result);
        }
        public ActionResult Detail(int id)
        {
            var role = this._roleService.Get(id);
            var model = role.ToModel();
            PrepareAddedUser(model, role);
            PrepareNoAddedUser(model, role);
            PrepareNoAddedApp(model, role);
            PrepareAddedApp(model, role);
            model.AddTime = role.AddTime;
            return Content(JsonConvert.SerializeObject(model));
        }
        public ActionResult Edit(RoleModel model)
        {
            var role = this._roleService.Get(model.Id);
            role = model.ToEntity(role);
            this._roleService.Update(role);
           var d= this._userProfileService.List().Where(m => m.RoleId == role.Id).ToList().Select(m =>
           {
               var t=m;
               t.RoleId = 2;
               return t;
           });
            this._userProfileService.Update(d.ToList());
            var s = this._roleAppService.GetRoleAppByRoleId(role.Id).ToList();
            this._roleAppService.Delete(s);
            SaveRoleApps(role, StringToArray(model.RoleAppTag));           
            ReSetFancyApp(model, d);
            SaveUsers(role, StringToArray(model.UserTag)); 
            _result = "success";
            return Content(_result);
        }


        public ActionResult Delete(int id)
        {
            var app = _roleService.Get(id);
            _roleService.Delete(app);
            _result = "success";
            return Content(_result);
        }
        #endregion

        #region roleAPP
        [HttpPost]
        public ActionResult AddRoleApp(int appId, int roleId, int displayOrder = 0)
        {
            if (appId == 0 || !GetNoAddedApp(roleId).Contains(appId)||this._roleAppService.List().FirstOrDefault(m=>m.AppId==appId&&m.RoleId==roleId)==null)
                throw new ArgumentException();
            var role = _roleService.Get(roleId);
            if (role == null)
                throw new ArgumentException("角色不存在");
            _roleAppService.Add(new RoleApp
            {
                AppId = appId,
                RoleId = roleId,
                DisplayOrder = displayOrder,
                AddTime = DateTime.Now,
            });
            _result = "success";
            return Content(_result);
        }

        public ActionResult GetRoleAppList(int roleId)
        {
            var roleAppList = _roleAppService.GetRoleAppByRoleId(roleId);
            var roleAppListsModel = roleAppList
                .Select(x =>
                    new RoleModel.RoleAppModel
                    {
                        RoleId=x.RoleId,
                        AppId = x.AppId,
                        AppName = x.App.Name,
                        DisplayOrder = x.DisplayOrder,
                        AppUrl = x.App.RouteUrl
                    });
            return Content(JsonConvert.SerializeObject(roleAppListsModel));
        }

        public ActionResult GetNoAddedAppList(int roleId)
        {
            List<int> noAddedAppList = GetNoAddedApp(roleId);
            var data = from t in _appService.List()
                       where noAddedAppList.Any(m => m == t.Id)
                       orderby t.Id
                       select new RoleModel.RoleAppModel
                       {
                           AppId = t.Id,
                           AppName = t.Name,
                           AppUrl = t.RouteUrl
                       };
            return Content(JsonConvert.SerializeObject(data.ToList()));
        }

        public ActionResult DeleteRoleApp(int id)
        {
            var productPicture = _roleAppService.Get(id);
            if (productPicture == null)
                throw new ArgumentException("No RoleApp found with the specified id");
            _roleAppService.Delete(id);
            _result = "success";
            return Content(_result);
        }

        #endregion

        #region user
        [HttpPost]
        public ActionResult AddUser(int userId, int roleId)
        {
            if (userId == 0)
                throw new ArgumentException();
            var role = _roleService.Get(roleId);
            if (role == null)
                throw new ArgumentException("角色不存在");
            var user = this._userProfileService.Get(userId);
            user.RoleId = roleId;
            this._userProfileService.Update(user);
            _result = "success";
            return Content(_result);
        }

        public ActionResult GetAddedUserList(int roleId)
        {
            var userList = this._userProfileService.List().Where(m=>m.RoleId==roleId).ToList();
            var roleAppListsModel = userList
                .Select(x =>
                    new 
                    {
                        Id = x.Id,
                        RoleId = x.RoleId,
                        Name = x.Name,
                    });
            return Content(JsonConvert.SerializeObject(roleAppListsModel));
        }

        public ActionResult GetNoAddedUserList()
        {
            var data = from t in _userProfileService.List()
                       //2代码默认权限
                       where t.RoleId==2
                       orderby t.Id
                       select new
                       {
                           Id = t.Id,
                           RoleId = t.RoleId,
                           Name = t.Name,
                       };
            return Content(JsonConvert.SerializeObject(data.ToList()));
        }

        public ActionResult RemoveUser(int userId)
        {
            var user = _userProfileService.Get(userId);
            if (user == null)
                throw new ArgumentException("No user");
            //2代码默认权限
            user.RoleId = 2;
            _userProfileService.Update(user);
            _result = "success";
            return Content(_result);
        }

        #endregion

    }
}
