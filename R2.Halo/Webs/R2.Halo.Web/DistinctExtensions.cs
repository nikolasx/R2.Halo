using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Linq;

namespace R2.Halo.Web
{
 
    /// <summary>
    /// Distinct方法扩展
    /// </summary>
    public static class DistinctExtensions
    {
        //object.Distinct(p=>p.属性).ToList();
        public static IQueryable<T> Distinct<T, V>(this IQueryable<T> source, Func<T, V> keySelector)
        {
            return source.Distinct(new CommonEqualityComparer<T, V>(keySelector));
        }
    }

    /// <summary>
    /// 自定义一个相等比较类，可以根据
    /// </summary>
    /// <typeparam name="T">需要做相等对比的对象类型</typeparam>
    /// <typeparam name="V"></typeparam>
    public class CommonEqualityComparer<T, V> : IEqualityComparer<T>
    {
        private Func<T, V> keySelector;
        private IEqualityComparer<V> comparer;

        public CommonEqualityComparer(Func<T, V> keySelector, IEqualityComparer<V> comparer)
        {
            this.keySelector = keySelector;
            this.comparer = comparer;
        }

        public CommonEqualityComparer(Func<T, V> keySelector)
            : this(keySelector, EqualityComparer<V>.Default)
        {

        }

        bool IEqualityComparer<T>.Equals(T x, T y)
        {
            return comparer.Equals(keySelector(x), keySelector(y));
        }

        int IEqualityComparer<T>.GetHashCode(T obj)
        {
               return comparer.GetHashCode(keySelector(obj));
        }
    }
}
