using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using R2.Halo.Service.Users;

namespace R2.Halo.Web.Controllers
{
    public class LoginController : Controller
    {
        private readonly IUserProfileService _userProfileService;
        private const string CookieName = "userinfo";

        public LoginController(IUserProfileService userProfileService)
        {
            this._userProfileService = userProfileService;
        }

        // GET: Login
        public ActionResult Login(string loginInfo = "")
        {
            ViewBag.loginInfo = loginInfo;
            return View();
        }
        [HttpPost]
        public ActionResult Login(string userName, string pwd)
        {
            var user = _userProfileService.List().FirstOrDefault(m => m.Account == userName && m.Password == pwd);
            if (user != null)
            {

                var cookie = new HttpCookie(CookieName,
                HttpUtility.UrlEncode(user.Id + "|" + user.Name + "|" + user.Account + "|" + user.RoleId)) { Expires = DateTime.Now.AddDays(7) };
                Response.AppendCookie(cookie);

                return RedirectToAction("Index", "Home");
            }
            //return RedirectToAction("Login", "Login");
            return Login("用户名或密码错误");
        }

        public ActionResult Logout()
        {
            var cookie = Request.Cookies["userinfo"];
            if (cookie != null)
            {
                cookie.Expires = DateTime.Now.AddDays(-1);
                Response.Cookies.Set(cookie);
            }
            return RedirectToAction("login", "login");
        }
    }
}