window.addEventListener('load', () => {
    document.getElementById("pre-load").style.display = "none";

});

var styleForward = {
    // marginRight: "300px",
    // marginLeft: "0"
    left:"-500px"

};

var styleBackward = {
    // marginRight: "0",
    // marginLeft: "0"


    left:"10px"

};


let projectNo = 0;

$("#recent-projects-forward").on( "click" , () => {
    if (projectNo == 0){
        $("#project-card-set").css(styleForward);
        projectNo = 1;
    }

});

$("#recent-projects-backward").on( "click" , () => {
    if (projectNo == 1){
        $("#project-card-set").css(styleBackward);
        projectNo = 0;
    }

});

