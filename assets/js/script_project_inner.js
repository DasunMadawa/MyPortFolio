// video pause btn
let video = document.querySelector("#video-player");
let play_button = $("#play-btn");

play_button.on("click", function () {
    try {
        video.play();
        video.setAttribute("controls", "controls");
        $(this).addClass("hide_play_btn");

    } catch (e) {
        console.log(e);
    }

});

video.addEventListener("ended", () => {
    play_button.removeClass("hide_play_btn");
    video.removeAttribute("controls");

});

// dynamically change data
const urlPara = new URLSearchParams(window.location.search);
const project = urlPara.get("project");

// harbourmaster
if (project === "harbourmaster") {
    document.title = "Project Harbourmaster";
    $("#page-header").text("Project Harbourmaster");

    var source = document.createElement('source');

    source.setAttribute('src', 'assets/video/project-harbormaster-short.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/harbormaster-front-ui.png");

    $("#progress-p").html(
        "A boat harbor is a designated area or facility where boats and ships can be moored, anchored,\n" +
        "stored, and serviced. Boat harbors are equipped with docks, piers, and other infrastructure to support boat\n" +
        "traffic.\n" + "<br><br>" +
        "Boat harbors play an important role in supporting recreational boating and fishing activities,\n" +
        "as well as commercial fishing and transportation industries. They also help to ensure the\n" +
        "safety of boaters and their vessels by providing designated areas for docking and launching\n" +
        "boats, as well as <monitoring></monitoring> weather forecasts."
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/project-harbourmaster-layered");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>"
    );
    let slides = $("#slider-wrapper > div");

    for (let i = 0; i < slides.length; i++) {
        slides.eq(i).css({backgroundImage: "url('/assets/img/harbormaster-ui/ui-" + (i + 1) + ".png')"});
        slides.eq(i).addClass("swiper-slide");

    }

    AOS.init();

}

// crime tracker
if (project === "crimeTracker") {
    document.title = "Project Crime Tracker";
    $("#page-header").text("Project Crime Tracker");

    var source = document.createElement('source');

    source.setAttribute('src', 'assets/video/project-police-short.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/crime-tracker-front-ui.png");

    $("#progress-p").html(
        "police station are designed to ensure public safety, uphold the law, and protect the rights of individuals." +
        "Overall, a police station plays a pivotal role in the criminal justice system, serving as the first point " +
        "of contact for individuals seeking help and initiating the process of maintaining law and order in a society. " +
        "<br><br>" +
        "The procedures and processes conducted in a police station are carried out with the aim of ensuring safety, " +
        "justice, and the protection of individual rights."
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/project-P");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>"
    );

    let slides = $("#slider-wrapper > div");

    for (let i = 0; i < slides.length; i++) {
        slides.eq(i).css({backgroundImage: "url('/assets/img/crime-tracker-ui/crime-tracker-ui-" + (i + 1) + ".png')"});
        slides.eq(i).addClass("swiper-slide");

    }

    AOS.init();

}

// chat box
if (project === "chatBox") {
    document.title = "Chat Box";
    $("#page-header").text("Chat Box");

    var source = document.createElement('source');

    source.setAttribute('src', 'assets/video/project-harbormaster-short.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/chat-box-front-ui.png");

    $("#progress-p").html(
        "Chat Box is a software solution that allows multiple users to communicate with each other in a group setting " +
        "over a network. This application utilizes Java's socket programming capabilities to establish communication " +
        "channels between the clients and a central server. " +
        "<br><br>" +
        "Chat application leverages the power of network communication to provide a platform for real-time group " +
        "conversations."
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/group-chat-room");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
        "<div></div>"
    );
    let slides = $("#slider-wrapper > div");

    slides.eq(0).css({backgroundImage: "url('/assets/img/chat-box-front-ui.png')"});
    slides.eq(0).addClass("swiper-slide");

    AOS.init();

}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },


});


