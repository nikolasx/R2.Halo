
$(function () {
    cardChange();
})
function cardChange() {
    $(".DC_card:gt(0)").hide();
    $(".DC_nav").eq(0).css("color", "#16548E");
    $(".DC_nav").click(function () {
        var index = $(".DC_nav").index(this);
        $(this).css("color", "#16548E").siblings(".DC_nav").css("color", "#000");
        $(".DC_card").eq(index).show().siblings(".DC_card").hide();
    })
}