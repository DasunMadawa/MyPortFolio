let video = document.querySelector("#video-player");
let play_button = $("#play-btn");

play_button.on("click", function () {
    try {
        video.play();
        video.setAttribute("controls" , "controls");
        $(this).addClass("hide_play_btn");

    } catch (e) {
        console.log(e);
    }

});

video.addEventListener("ended" , (event) => {
    play_button.removeClass("hide_play_btn");
    video.removeAttribute("controls");

});

