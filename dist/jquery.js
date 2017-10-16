"use strict";

// =============================
// ========== JQuery ===========
// =============================

$(document).ready(function () {
    debugger;
    $("#table tbody tr").slice(0, 5).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("#table tbody tr:hidden").slice(0, 5).slideDown();
        if ($("#table tbody tr:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

// $('a[href=#top]').click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $('.totop a').fadeIn();
//     } else {
//         $('.totop a').fadeOut();
//     }
// });