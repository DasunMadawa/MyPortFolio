// pre loader
window.addEventListener('load', () => {
    document.getElementById("pre-load-bg-outer").style.display = "none";
    document.getElementById("pre-load-logo").style.display = "none";
    $("#pre-load > div:nth-child(2)").css({'backdrop-filter': 'blur(0px)'});
    // $("#pre-load > div:nth-child(3)").css({'filter': 'opacity(0%)'});
    //
    setTimeout(preloaderHide, 1500);

    setTimeout(setLoadingAnimations, 0);
    setTimeout(socialIcon1Animation, 100);
    setTimeout(socialIcon2Animation, 150);
    setTimeout(socialIcon3Animation, 200);
    setTimeout(socialIcon4Animation, 250);

});

let preloaderHide = function () {
    document.getElementById("pre-load").style.display = "none";
}

//set loading animations
function setLoadingAnimations() {
    $("section > div:first-child > h3:first-child").addClass("animate__animated animate__fadeInDown");
    $("section > div:first-child > h1").addClass("animate__animated animate__fadeInDown");
    $("section > div:first-child > h3").addClass("animate__animated animate__fadeInDown");
    $("section > div:first-child > h4").addClass("animate__animated animate__fadeInDown");
    $("section > div:first-child > button").addClass("animate__animated animate__fadeInDown");

    $("section > div:nth-child(2) > img:first-child").addClass("animate__animated animate__fadeInUpBig");

}

function socialIcon1Animation() {
    $("section > div:nth-child(3) > a:first-child").addClass("animate__animated animate__fadeInUpBig");

}

function socialIcon2Animation() {
    $("section > div:nth-child(3) > a:nth-child(2)").addClass("animate__animated animate__fadeInUpBig");

}

function socialIcon3Animation() {
    $("section > div:nth-child(3) > a:nth-child(3)").addClass("animate__animated animate__fadeInUpBig");

}

function socialIcon4Animation() {
    $("section > div:nth-child(3) > a:nth-child(4)").addClass("animate__animated animate__fadeInUpBig");

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

// var vwWidth = window.matchMedia("(max-width: 1000px)");
// vwWidth.addListener(achievementsAnim)
//
// function achievementsAnim(vwWidth) {
//     if (vwWidth.matches) { // If media query matches
//         console.log("hello");
//
//     } else {
//
//
//     }
// }


// $("#menu-icon > i:first-child").on("click", () => {
//     $("#menu-icon-bg").css({display: "block"});
//     $("#navbar").css({display: "flex"});
//
//     $("#menu-icon > i:first-child").css({display: "none"});
//     $("#menu-icon > i:nth-child(2)").css({display: "block"});
//
// });
//
// $("#menu-icon > i:nth-child(2)").on("click", () => {
//     $("#menu-icon-bg").css({display: "none"});
//     $("#navbar").css({display: "none"});
//
//     $("#menu-icon > i:first-child").css({display: "block"});
//     $("#menu-icon > i:nth-child(2)").css({display: "none"});
//
// });


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
//


