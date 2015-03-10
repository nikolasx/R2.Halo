using System;
using System.Web;
using Microsoft.AspNet.SignalR;
namespace SignalRChat
{
    public class NotificationHub : Hub
    {
        public string Activate()
        {
            return "Monitor Activated";
        }
    }
}  