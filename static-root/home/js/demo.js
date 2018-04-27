
$(document).ready(function () {
    $(".gry, .blue, .green, .red, .orange, .yellow, .purple, .pink, .whitebg, .tranbg").on("click", function () {
        $(".wsmenu")
            .removeClass()
            .addClass('wsmenu pm_' + $(this).attr('class'));
    });

    $(".blue-grdt, .gry-grdt, .green-grdt, .red-grdt, .orange-grdt, .yellow-grdt, .purple-grdt, .pink-grdt").on("click", function () {
        $(".wsmenu")
            .removeClass()
            .addClass('wsmenu pm_' + $(this).attr('class'));
    });
});