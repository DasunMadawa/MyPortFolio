// pre loader
window.addEventListener('load', () => {
    document.getElementById("pre-load-bg-outer").style.display = "none";
    document.getElementById("pre-load-logo").style.display = "none";
    $("#pre-load > div:nth-child(2)").css({'backdrop-filter': 'blur(0px)'});
    // $("#pre-load > div:nth-child(3)").css({'filter': 'opacity(0%)'});
    //
    setTimeout(preloaderHide, 1500);


});

let preloaderHide = function () {
    document.getElementById("pre-load").style.display = "none";
}

// project slider
let direction = true;

$("#recent-projects-forward").on("click", () => {
    if (direction == true) {
        $("#project-card-set").css({"left": "-500px"});
        direction = false;
    }

});

$("#recent-projects-backward").on("click", () => {
    if (direction == false) {
        $("#project-card-set").css({"left": "10px"});
        direction = true;
    }

});

// project slider 2
let projectNo = 0;
let fromLeft = 10;

$("#recent-projects-forward-2").on("click", () => {
    if (projectNo < 2) {
        fromLeft -= 340;
        projectNo++;

        $("#project-card-set").css({"left": (fromLeft) + "px"});
    }

});

$("#recent-projects-backward-2").on("click", () => {
    if (projectNo > 0) {
        fromLeft += 340;
        projectNo--;

        $("#project-card-set").css({"left": (fromLeft) + "px"});
    }

});

$("#menu-icon > i:first-child").on("click", () => {
    $("#menu-icon-bg").css({display: "block"});
    $("#navbar").css({display: "flex"});

    $("#menu-icon > i:first-child").css({display: "none"});
    $("#menu-icon > i:nth-child(2)").css({display: "block"});

});

$("#menu-icon > i:nth-child(2)").on("click", () => {
    $("#menu-icon-bg").css({display: "none"});
    $("#navbar").css({display: "none"});

    $("#menu-icon > i:first-child").css({display: "block"});
    $("#menu-icon > i:nth-child(2)").css({display: "none"});

});


// let nav_list = $("#navbar ");
//
// for (let i = 0; i < nav_list.length; i++) {
//     nav_list[i].addEventListener('click', () => {
//         $("#menu-icon-bg").css({"display": "none"});
//         $("#navbar").css({display: "none"});
//
//     });
//
// }

// function sliderMobileV(x) {
//     if (x.matches) { // If media query matches
//         console.log("hello");
//
//         $("#recent-projects-forward").css({"display": "none"});
//         $("#recent-projects-backward").css({"display": "none"});
//
//         $("#recent-projects-backward-2").css({"display": "block"});
//         $("#recent-projects-backward-2").css({"display": "block"});
//
//     } else {
//         $("#recent-projects-forward").css({"display": "block"});
//         $("#recent-projects-backward").css({"display": "block"});
//
//         $("#recent-projects-backward-2").css({"display": "none"});
//         $("#recent-projects-backward-2").css({"display": "none"});
//
//     }
// }
//
// var x = window.matchMedia("(max-width: 1000px)");
// x.addListener(sliderMobileV)


