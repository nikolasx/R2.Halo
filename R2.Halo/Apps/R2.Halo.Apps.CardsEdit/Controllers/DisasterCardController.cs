using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace R2.Jinan.Controllers
{
    public class DisasterCardController : Controller
    {



        //public ActionResult EscapseCard()
        //{
        //    return View("R2.Halo.Apps.CardsEdit.Views.DisasterCard.EscapseCard");
        //}

        public ActionResult DisasterCardList(string type)
        {
            type = "workCard";
            ViewBag.cardType = type;
            return View("R2.Halo.Apps.CardsEdit.Views.DisasterCard.DisasterCardList");
        }

        public ActionResult EditEscapseCard(string editHedgeCardId)
        {
            ViewBag.editHedgeCardId = editHedgeCardId;
            return View("R2.Halo.Apps.CardsEdit.Views.DisasterCard.EditEscapseCard");
        }
        public ActionResult EditWorkCard(int editWorkCardId)
        {
            ViewBag.editWorkCardId = editWorkCardId;
            return View("R2.Halo.Apps.CardsEdit.Views.DisasterCard.EditWorkCard");
        }
   
        /// <summary>
        /// 可以考虑删除
        /// </summary>
        /// <param name="Tid"></param>
        /// <returns></returns>
        
      
    }
}
