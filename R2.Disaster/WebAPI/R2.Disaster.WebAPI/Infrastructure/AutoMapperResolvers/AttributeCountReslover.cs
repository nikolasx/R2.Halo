using AutoMapper;
using R2.Disaster.CoreEntities;
using R2.Disaster.CoreEntities.Domain.GeoDisaster;
using R2.Disaster.CoreEntities.Domain.GeoDisaster.Investigation;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;

namespace R2.Disaster.WebAPI.Infrastructure.AutoMapperResolvers
{
    /// <summary>
    /// 自定义AutoMapperResolver
    /// </summary>
    public class AttributeCountResolver<T,U> :ValueResolver<T, int>
    {
        public String Name { get; set; }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="name">指明需要解析的属性名称</param>
        public AttributeCountResolver(String name)
            : base()
        {
            this.Name = name; 
        }

        /// <summary>
        /// 判断PhyGeoDisaster下面的某一属性是否存在，如果存在则返回True，否则False
        /// </summary>
        /// <param name="source">当前PhyGeoDisaster</param>
        /// <returns></returns>
        protected override int ResolveCore(T source)
        {
            PropertyInfo[] propertys = source.GetType().GetProperties();
           // String name = T.
            //String name =typeof(T).ToString();
            //TODO:整理
            PropertyInfo property = source.GetType().GetProperty(this.Name);
            
            //判断当前属性是否是集合属性
            Type type = property.PropertyType.GetInterface("IEnumerable", false);
            
            var rlt = property.GetValue(source, null);
            int count;
            if (type != null)
            {
                IEnumerable<U> lists = rlt as IEnumerable<U>;
                //是集合类型属性， 返回集合长度
                if (lists != null)
                    count = lists.Count<U>();
                else
                    count = 0;
            }
            else
            {
                //不是集合类型，通过判断当前属性是否为Null来确定此属性是为0个还是1个
                if (rlt != null)
                    count = 1;
                else
                    count = 0;
            }
                return count;
        }
    }
}