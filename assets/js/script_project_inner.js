let video = $("#video-player");
video.play();

$("#play-btn").on("click", function () {
    $(this).css("display" , "none");
    let video = $("#video-player");
    video.controls = true;
    console.log(video);

});
