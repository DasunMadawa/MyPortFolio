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

    source.setAttribute('src', 'assets/video/chat-box-short.mp4');
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

// D24
if (project === "d24") {
    document.title = "D24";
    $("#page-header").text("D24");

    var source = document.createElement('source');

    source.setAttribute('src', 'assets/video/d24-short.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/d24-front-ui.png");

    $("#progress-p").html(
        "D24 is a cutting-edge system designed to streamline hostel operations. " +
        "Whether you're managing students, rooms, or key money, D24 simplifies every aspect of your hostel business, " +
        "ensuring efficiency and ease. Say goodbye to administrative hassles and hello to seamless management " +
        "with D24!" +
        " Also This project was developed using the Hibernate ORM mapping tool."
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/D24-Hostel-Management-System");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
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
        slides.eq(i).css({backgroundImage: "url('/assets/img/d24-ui/d24-ui-" + (i + 1) + ".png')"});
        slides.eq(i).addClass("swiper-slide");

    }

    AOS.init();

}

// pos system java ee
if (project === "pos_java_ee") {
    document.title = "POS System (Java EE)";
    $("#page-header").text("POS System (Java EE)");

    var source = document.createElement('source');

    source.setAttribute('src', '');
    source.setAttribute('type', '');
    source.setAttribute('controls', 'disabled');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/pos-front-ui.jpg");

    $("#progress-p").html(
        "An API for simple POS System using Java EE. Also Using Hibernate Framework. Handling Customers , " +
        "Items and Orders like normal POS System. " +
        "<br/><br/> <span>Hosted Site Link : </span> " +
        "<a href='https://dasunmadawa.github.io/Chess/' target='_blank'>https://dasunmadawa.github.io/Assignment-11/</a>"
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/pos-system-api");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>"
    );

    let slides = $("#slider-wrapper > div");

    for (let i = 0; i < slides.length; i++) {
        slides.eq(i).css({backgroundImage: "url('/assets/img/pos-ui/pos-ui-" + (i + 1) + ".jpg')"});
        slides.eq(i).addClass("swiper-slide");

    }

    AOS.init();

}

// pos system spring boot
if (project === "pos_spring_boot") {
    document.title = "POS System (Java EE)";
    $("#page-header").text("POS System (Java EE)");

    var source = document.createElement('source');

    source.setAttribute('src', '');
    source.setAttribute('type', '');
    source.setAttribute('controls', 'disabled');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/pos-front-ui.jpg");

    $("#progress-p").html(
        "An API for simple POS System using Spring Boot Framework. Handling Customers , " +
        "Items and Orders like normal POS System.\n" +
        "\n" +
        "Association table customizing with extra columns and \n" +
        "Composite Primary Key adding\n" +
        "\n" +
        "in Spring Data JPA.\n" +
        "<br/><br/> <span>Hosted Site Link : </span> " +
        "<a href='https://dasunmadawa.github.io/Chess/' target='_blank'>https://dasunmadawa.github.io/Assignment-11/</a>"
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/pos-spring-boot");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
        "<div></div>" +
        "<div></div>" +
        "<div></div>" +
        "<div></div>"
    );

    let slides = $("#slider-wrapper > div");

    for (let i = 0; i < slides.length; i++) {
        slides.eq(i).css({backgroundImage: "url('/assets/img/pos-ui/pos-ui-" + (i + 1) + ".jpg')"});
        slides.eq(i).addClass("swiper-slide");

    }

    AOS.init();

}

// chess game
if (project === "chess_game") {
    document.title = "Chess Game";
    $("#page-header").text("Chess Game");

    var source = document.createElement('source');

    source.setAttribute('src', 'assets/video/chess-game-short.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/chess-game-front-ui.png");

    $("#progress-p").html(
        "All functions are implemented in a normal chess game. I used JS , HTML and CSS for implementation. " +
        "Frameworks were not used. All project implement according to the MVC architecture. " +
        "Also used Object Oriented Programing. Responsive For different screen sizes." +
        "<br/><br/> <span>Hosted Site Link : </span> " +
        "<a href='https://dasunmadawa.github.io/Chess/' target='_blank'>https://dasunmadawa.github.io/Chess/</a>"
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/Chess");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
        "<div></div>"
    );

    let slides = $("#slider-wrapper > div");

    for (let i = 0; i < slides.length; i++) {
        slides.eq(i).css({backgroundImage: "url('/assets/img/chess-game-ui/chess-game-ui-" + (i + 1) + ".png')"});
        slides.eq(i).addClass("swiper-slide");

    }

    AOS.init();

}

// hello shoe
if (project === "hello_shoe") {
    document.title = "Hello Shoe";
    $("#page-header").text("Hello Shoe");

    var source = document.createElement('source');

    source.setAttribute('src', 'assets/video/hello-shoe-short.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/hello-shoe-front-ui.png");

    $("#progress-p").html(
        "This POS (Point of Sale) system is designed to efficiently manage the core operations of a shoe shop, " +
        "including sales, inventory management, customer interactions, supplier relations, employee management, " +
        "resupply processes, and handling refunds. Backend developed using Java Spring boot. " +
        "Frontend developed using Vanila JavaScript" +
        "<br/><br/> <span>Frontend link : </span>" +
        "<a href='https://github.com/DasunMadawa/Hello-Shoe-Front-End' target='_blank'>https://github.com/DasunMadawa/Hello-Shoe-Front-End</a>"
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/pos-spring-boot");

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
        "<div></div>"
    );

    let slides = $("#slider-wrapper > div");

    for (let i = 0; i < slides.length; i++) {
        slides.eq(i).css({backgroundImage: "url('/assets/img/hello-shoe-ui/hello-shoe-ui-" + (i + 1) + ".png')"});
        slides.eq(i).addClass("swiper-slide");

    }

    AOS.init();

}

// connect 4 game
if (project === "connect_4_game") {
    document.title = "Connect 4 Game";
    $("#page-header").text("Connect 4 Game");

    var source = document.createElement('source');

    source.setAttribute('src', 'assets/video/connect-4-game-short.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/connect-4-game-front-ui.png");

    $("#progress-p").html(
        "This is a connect 4 game. Connect 4 pieces together by forming a horizontal or a vertical line to win. " +
        "<br/><br/> Minmax Algorithem implemented for AI part."
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/connect-4-game/tree/master");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
        "<div></div>"
    );

    let slides = $("#slider-wrapper > div");

    for (let i = 0; i < slides.length; i++) {
        slides.eq(i).css({backgroundImage: "url('/assets/img/connect-4-game-ui/connect-4-game-ui-" + (i + 1) + ".png')"});
        slides.eq(i).addClass("swiper-slide");

    }

    AOS.init();

}

// highway ticketing system
if (project === "highway_ticketing_system") {
    document.title = "Highway Ticketing System";
    $("#page-header").text("Highway Ticketing System");

    var source = document.createElement('source');

    source.setAttribute('src', '');
    source.setAttribute('type', '');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/highway-ticketing-system-front-ui.png");

    $("#progress-p").html(
        "A microservices-based backend for a highway ticketing system that efficiently manages payments, tickets, " +
        "users, and vehicles. Each service operates independently, ensuring scalability, flexibility, and " +
        "seamless integration."
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/microservices");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
        "<div></div>"
    );

    let slides = $("#slider-wrapper > div");

    for (let i = 0; i < slides.length; i++) {
        slides.eq(i).css({backgroundImage: "url('/assets/img/highway-ticketing-system-ui/highway-ticketing-system-ui-" + (i + 1) + ".png')"});
        slides.eq(i).addClass("swiper-slide");

    }

    AOS.init();

}

// agri simulator
if (project === "agri_simulator") {
    document.title = "Agri Simulator";
    $("#page-header").text("Agri Simulator");

    var source = document.createElement('source');

    source.setAttribute('src', 'assets/video/agri-simulator-short.mp4');
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    video.setAttribute("poster", "assets/img/agri-simulator-front-ui.png");

    $("#progress-p").html(
        "An interactive tool designed to simulate and display detailed information about various plants, " +
        "including growth stages, environmental needs, and care instructions. Ideal for gardening enthusiasts " +
        "and educational purposes."
    );

    $("#code-btn > a").attr("href" , "https://github.com/DasunMadawa/Agri-Simulator");

    let slider_wrapper = $("#slider-wrapper");
    slider_wrapper.html(
        "<div></div>"
    );

    let slides = $("#slider-wrapper > div");

    for (let i = 0; i < slides.length; i++) {
        slides.eq(i).css({backgroundImage: "url('/assets/img/agri-simulator-ui/agri-simulator-ui-" + (i + 1) + ".png')"});
        slides.eq(i).addClass("swiper-slide");

    }

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


