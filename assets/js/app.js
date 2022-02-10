$(document).ready(function () {
    $(".js-project").on("mouseenter", function () {
        $(this).siblings().addClass("dimmed");
    });

    $(".js-project").on("mouseleave", function () {
        $(".js-project").removeClass("dimmed");
    });
});
