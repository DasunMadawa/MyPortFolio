$("#menu-icon > i:first-child").on("click", () => {
    // $("#menu-icon-bg").css("display", "block");
    // $("#navbar").css("display", "flex");
    $("#menu-bg").addClass("show");
    $("#navbar").addClass("show-flex");

    // $("#menu-icon > i:first-child").css("display", "none");
    // $("#menu-icon > i:nth-child(2)").css("display", "block");

    $("#menu-icon > i:first-child").addClass("hide");
    $("#menu-icon > i:nth-child(2)").addClass("show");

});

$("#menu-icon > i:nth-child(2)").on("click", () => {
    // $("#menu-icon-bg").css("display" , "none");
    // $("#navbar").css("display", "none");
    $("#menu-bg").removeClass("show");
    $("#navbar").removeClass("show-flex");

    // $("#menu-icon > i:first-child").css({display: "block"});
    // $("#menu-icon > i:nth-child(2)").css({display: "none"});

    $("#menu-icon > i:first-child").removeClass("hide");
    $("#menu-icon > i:nth-child(2)").removeClass("show");

});




