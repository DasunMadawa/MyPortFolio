window.addEventListener('load', () => {
    // document.getElementById("pre-load").style.display = "none";
   $("#pre-load > div:nth-child(1)").css({'backdrop-filter': 'blur(0px)'});
   $("#pre-load > div:nth-child(2)").css({'filter': 'opacity(0%)'});

   setTimeout(preloaderHide , 1500);


});

let projectNo = 0;

$("#recent-projects-forward").on( "click" , () => {
    if (projectNo == 0){
        $("#project-card-set").css({"left": "-500px"});
        projectNo = 1;
    }

});

$("#recent-projects-backward").on( "click" , () => {
    if (projectNo == 1){
        $("#project-card-set").css({"left": "10px"});
        projectNo = 0;
    }

});


let preloaderHide = function (){
    document.getElementById("pre-load").style.display = "none";
}

