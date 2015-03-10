using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.IO;
using System.Web.Hosting;
using R2.Halo.CoreEntities.Apps;
using R2.Halo.CoreEntities.Users;

namespace R2.Halo.Data
{
    class R2DisasterDatabaseInitiatlizar<T> : CreateDatabaseIfNotExists<T>
        where T : DbContext
    {
        private T _dbContext;
        protected override void Seed(T context)
        {
            this._dbContext = context;


            #region Role
            context.Set<Role>().Add(new Role { AddTime = DateTime.Now, Title = "管理员", IsSystem = true });
            context.Set<Role>().Add(new Role { AddTime = DateTime.Now, Title = "default" });
            context.Set<Role>().Add(new Role { AddTime = DateTime.Now, Title = "录入人员" });
            context.Set<Role>().Add(new Role { AddTime = DateTime.Now, Title = "普通用户" });
            context.Set<Role>().Add(new Role { AddTime = DateTime.Now, Title = "领导" });
            context.SaveChanges();
            #region user
            context.Set<UserProfile>().Add(new UserProfile { AddTime = DateTime.Now, Name = "admin", Account = "admin", Password = "888888", RoleId = 1 });
            context.Set<UserProfile>().Add(new UserProfile { AddTime = DateTime.Now, Name = "录入人员", Account = "inputer@mapgis.com", Password = "888888", RoleId = 3 });
            context.Set<UserProfile>().Add(new UserProfile { AddTime = DateTime.Now, Name = "普通用户", Account = "user@mapgis.com", Password = "888888", RoleId = 4 });
            context.Set<UserProfile>().Add(new UserProfile { AddTime = DateTime.Now, Name = "领导", Account = "leader@mapgis.com", Password = "888888", RoleId = 5 });

            context.SaveChanges();
            #endregion
            #endregion
            #region App
            context.Set<AppCategory>().Add(new AppCategory { AddTime = DateTime.Now, Name = "查询统计", });
            context.Set<AppCategory>().Add(new AppCategory { AddTime = DateTime.Now, Name = "数据管理", });
            context.Set<AppCategory>().Add(new AppCategory { AddTime = DateTime.Now, Name = "群测群防", });
            context.Set<AppCategory>().Add(new AppCategory { AddTime = DateTime.Now, Name = "监测预警", });
            context.SaveChanges();
            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "济南灾害点基础数据录入App", Desc = "济南灾害点基础数据，录入", AppCategoryId = 2, IsPublic = false, RouteUrl = "Apps/JnDbInserting/index" });
            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "济南灾害点基础数据编辑与删除App", Desc = "济南灾害点基础数据,编辑与删除", AppCategoryId = 2, IsPublic = false, RouteUrl = "Apps/JnDbDeleteAndEdit/index" });
            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "济南两卡编辑App", Desc = "济南避险,避灾明白卡编辑", AppCategoryId = 3, IsPublic = false, RouteUrl = "Apps/DisasterCard/DisasterCardList" });

            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "基础数据查询3D", AppCategoryId = 1, Desc = "基础数据查询,三维地球展示", IsPublic = true, RouteUrl = "Apps/D3Map/Index" });
            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "基础数据查询2D", AppCategoryId = 1, Desc = "基础数据查询,二维展示", IsPublic = true, RouteUrl = "Apps/D2Map/Index" });
            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "地灾数据统计", AppCategoryId = 1, Desc = "地灾数据统计,图表展示", IsPublic = true, RouteUrl = "Apps/ZHGLstatistics/index" });
            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "防灾避灾明白卡信息录入App", Desc = "防灾避灾明白卡,信息录入", AppCategoryId = 2, IsPublic = false, RouteUrl = "Apps/RiskCardInput/index" });
            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "防灾工作明白卡信息录入App", Desc = "防灾工作明白卡,信息录入", AppCategoryId = 2, IsPublic = false, RouteUrl = "Apps/WorkCardInput/index" });
            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "气象预警参数设置App", Desc = "气象预警,参数设置", AppCategoryId = 4, IsPublic = false, RouteUrl = "Apps/WarningParameterSet/index" });
            context.Set<App>().Add(new App { AddTime = DateTime.Now, Name = "气象预警App", Desc = "气象预警", AppCategoryId = 4, IsPublic = false, RouteUrl = "Apps/EarlyWarning/index" });
            context.SaveChanges();
            var data = context.Set<App>().ToList();
            data.ForEach(m => context.Set<RoleApp>().Add(new RoleApp { AppId = m.Id, RoleId = 1 }));
            data.ForEach(m => context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = m.Id, UserId = 1 }));
            context.SaveChanges();

            #endregion

            #region
            //给录入人员添加APP
            context.Set<RoleApp>().Add(new RoleApp { AppId = 1, RoleId = 3 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 2, RoleId = 3 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 3, RoleId = 3 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 4, RoleId = 3 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 5, RoleId = 3 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 6, RoleId = 3 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 7, RoleId = 3 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 8, RoleId = 3 });

            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 1, UserId = 2 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 2, UserId = 2 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 3, UserId = 2 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 4, UserId = 2 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 5, UserId = 2 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 6, UserId = 2 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 7, UserId = 2 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 8, UserId = 2 });

            context.SaveChanges();

            #endregion

            #region 给普通用户添加APP
            context.Set<RoleApp>().Add(new RoleApp { AppId = 4, RoleId = 4 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 5, RoleId = 4 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 6, RoleId = 4 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 1, RoleId = 4 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 2, RoleId = 4 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 9, RoleId = 4 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 10, RoleId = 4 });

            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 1, UserId = 3 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 2, UserId = 3 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 4, UserId = 3 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 5, UserId = 3 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 6, UserId = 3 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 9, UserId = 3 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 10, UserId = 3 });

            context.SaveChanges();
            #endregion

            #region
            //给领导添加APP
            context.Set<RoleApp>().Add(new RoleApp { AppId = 4, RoleId = 5 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 5, RoleId = 5 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 6, RoleId = 5 });
            context.Set<RoleApp>().Add(new RoleApp { AppId = 10, RoleId = 5 });

            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 4, UserId = 4 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 5, UserId = 4 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 6, UserId = 4 });
            context.Set<UserFancyApp>().Add(new UserFancyApp { AppId = 10, UserId = 4 });

            context.SaveChanges();
            #endregion


            //在UserGroups表增加Title列唯一性约束
            //context.Database.ExecuteSqlCommand(
            //    "CREATE UNIQUE INDEX IX_UserGroup_Title ON UserGroups (Title)");

            //context.Database.ExecuteSqlCommand(
            //  "CREATE UNIQUE INDEX IX_Ariticle_Title ON Ariticles(Title)");
            //context.Configuration.ProxyCreationEnabled = false;
            //this.ExecuteSqlFile(MapPath("~/App_Data/Install/create_all_gbcodes.sql"));
        }

        protected virtual void ExecuteSqlFile(string path)
        {
            var statements = new List<string>();

            using (var stream = File.OpenRead(path))
            using (var reader = new StreamReader(stream))
            {
                string statement = "";
                while ((statement = ReadNextStatementFromStream(reader)) != null)
                    statements.Add(statement);
            }

            foreach (string stmt in statements)
                _dbContext.Database.ExecuteSqlCommand(stmt);
        }

        public virtual string MapPath(string path)
        {
            if (HostingEnvironment.IsHosted)
            {
                //hosted
                return HostingEnvironment.MapPath(path);
            }
            else
            {
                //not hosted. For example, run in unit tests
                string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
                path = path.Replace("~/", "").TrimStart('/').Replace('/', '\\');
                return Path.Combine(baseDirectory, path);
            }
        }

        protected virtual string ReadNextStatementFromStream(StreamReader reader)
        {
            var sb = new StringBuilder();
            string lineOfText = "";
            while (true)
            {
                lineOfText = reader.ReadLine();
                if (lineOfText == null)
                {
                    if (sb.Length > 0)
                        return sb.ToString();
                    else
                        return null;
                }

                if (lineOfText.TrimEnd().ToUpper() == "GO")
                    break;

                sb.Append(lineOfText + Environment.NewLine);
            }

            return sb.ToString();
        }
    }
}
