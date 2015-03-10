
using System.Web;
using System.Web.Mvc;

namespace R2.Halo.Apps.JnDbDeleteAndEdit.Controllers
{
    public class JnDbDeleteAndEditController : Controller
    {
        public ActionResult Index()
        {


            return View("R2.Halo.Apps.JnDbDeleteAndEdit.Views.JnDbDeleteAndEdit.Index");
        }

        public ActionResult EditLandSlide(string landSlideId)
        {
            ViewBag.landSlideId = landSlideId;
            return View("R2.Halo.Apps.JnDbDeleteAndEdit.Views.JnDbDeleteAndEdit.EditLandSlide");
        }

        public ActionResult EditCollapse(string collapseId)
        {
            ViewBag.collapseId = collapseId;
            return View("R2.Halo.Apps.JnDbDeleteAndEdit.Views.JnDbDeleteAndEdit.EditCollapse");
        }

        public ActionResult EditMudFlow(string mudFlowId)
        {
            ViewBag.mudFlowId = mudFlowId;
            return View("R2.Halo.Apps.JnDbDeleteAndEdit.Views.JnDbDeleteAndEdit.EditMudFlow");
        }
        public ActionResult EditLandCrack(string landCrackId)
        {
            ViewBag.landCrackId = landCrackId;
            return View("R2.Halo.Apps.JnDbDeleteAndEdit.Views.JnDbDeleteAndEdit.EditLandCrack");
        }
        public ActionResult EditGroundSubside(string groundSubsideId)
        {
            ViewBag.groundSubsideId = groundSubsideId;
            return View("R2.Halo.Apps.JnDbDeleteAndEdit.Views.JnDbDeleteAndEdit.EditGroundSubside");
        }
        public ActionResult EditGroundSettle(string groundSettleId)
        {
            ViewBag.groundSettleId = groundSettleId;
            return View("R2.Halo.Apps.JnDbDeleteAndEdit.Views.JnDbDeleteAndEdit.EditGroundSettle");
        }
       
    }
}
