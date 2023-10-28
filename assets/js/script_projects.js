var tabSize = window.matchMedia("(max-width: 1778px)");
tabSize.addListener(projectsAnimTab);

// var mobileSize = window.matchMedia("(max-width: 898px)");
// mobileSize.addListener(projectsAnimMobile)

projectsAnimTab(tabSize);
// projectsAnimMobile(mobileSize);

function projectsAnimTab(tabSize) {
    let list = $("body > main > section:first-child > div:nth-child(2) > div");

    if (tabSize.matches) {
        for (let i = 0; i < list.length; i++) {
            let temp = i % 2;
            if (temp === 0) {
                list.eq(i).attr("data-aos", "fade-up-right");

            } else {
                list.eq(i).attr("data-aos" , "fade-up-left");
            }

        }

    } else {
        for (let i = 0; i < list.length; i++) {
            let temp = i % 3;
            if (temp === 0) {
                list.eq(i).attr("data-aos", "fade-up-right");

            } else if (temp === 1) {
                list.eq(i).attr("data-aos", "fade-up");

            } else {
                list.eq(i).attr("data-aos", "fade-up-left");

            }

            if (i == 3){
                console.log(window.innerWidth);
                list.eq(i).attr("data-aos", "fade-up");

            }

        }


    }

}

// function projectsAnimMobile(mobileSize) {
//     let list = $("body > main > section:first-child > div:nth-child(2) > div");
//
//     if (mobileSize.matches) {
//         for (let i = 0; i < list.length; i++) {
//             list.eq(i).attr("data-aos" , "fade-up");
//         }
//
//
//     } else {
//         for (let i = 0; i < list.length; i++) {
//             let temp = i % 2;
//             if (temp === 0) {
//                 list.eq(i).attr("data-aos", "fade-right");
//
//             } else {
//                 list.eq(i).attr("data-aos" , "fade-left");
//             }
//
//         }
//
//
//     }
//
// }



