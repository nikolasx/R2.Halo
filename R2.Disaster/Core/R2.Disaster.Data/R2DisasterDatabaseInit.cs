using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.IO;
using System.Web.Hosting;

namespace R2.Disaster.Data
{
    class R2DisasterDatabaseInitiatlizar<T>:CreateDatabaseIfNotExists<T>
        where T:DbContext
    {
        private T _dbContext;
        protected override void Seed(T context)
        {
            this._dbContext = context;
            //在UserGroups表增加Title列唯一性约束
            //context.Database.ExecuteSqlCommand(
            //    "CREATE UNIQUE INDEX IX_UserGroup_Title ON UserGroups (Title)");

            //context.Database.ExecuteSqlCommand(
            //  "CREATE UNIQUE INDEX IX_Ariticle_Title ON Ariticles(Title)");
            //context.Configuration.ProxyCreationEnabled = false;
            this.ExecuteSqlFile(MapPath("~/App_Data/Install/create_all_gbcodes.sql"));
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
