using System;
using R2.Halo.CoreEntities.Logging;
using R2.Halo.CoreEntities.Users;


namespace R2.Halo.Service.Logging
{
    public static class LoggingExtensions
    {
        public static void Information(this ILogger logger, string message, Exception exception = null, UserProfile customer = null)
        {
            FilteredLog(logger, LogLevel.Information, message, exception, customer);
        }
        public static void Warning(this ILogger logger, string message, Exception exception = null, UserProfile customer = null)
        {
            FilteredLog(logger, LogLevel.Warning, message, exception, customer);
        }
        public static void Error(this ILogger logger, string message, Exception exception = null, UserProfile customer = null)
        {
            FilteredLog(logger, LogLevel.Error, message, exception, customer);
        }
        public static void Fatal(this ILogger logger, string message, Exception exception = null, UserProfile customer = null)
        {
            FilteredLog(logger, LogLevel.Fatal, message, exception, customer);
        }

        private static void FilteredLog(ILogger logger, LogLevel level, string message, Exception exception = null, UserProfile customer = null)
        {
            //don't log thread abort exception
            if ((exception != null) && (exception is System.Threading.ThreadAbortException))
                return;         
                string fullMessage = exception == null ? string.Empty : exception.ToString();
                logger.InsertLog(level, message, fullMessage, customer);
            
        }
    }
}
