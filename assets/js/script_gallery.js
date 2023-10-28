var tabSize = window.matchMedia("(max-width: 1000px)");
tabSize.addListener(galleryAnimTab);

// var mobileSize = window.matchMedia("(max-width: 898px)");
// mobileSize.addListener(galleryAnimMobile)

galleryAnimTab(tabSize);

// galleryAnimMobile(mobileSize);

function galleryAnimTab(tabSize) {
    let list = $("body > main > section:first-child > div:nth-child(2) > div");

    if (tabSize.matches) {
        for (let i = 0; i < list.length; i++) {
            let temp = i % 2;
            if (temp === 0) {
                list.eq(i).attr("data-aos", "fade-up-right");

            } else {
                list.eq(i).attr("data-aos", "fade-up-left");
            }

        }

    } else {
        for (let i = 0; i < list.length; i++) {
            if (i === 4 || i == 16) {
                list.eq(i).attr("data-aos", "fade-up");
                continue;
            }

            list.eq(i).attr("data-aos", "fade-up-right");

            if ((i + 1) === 10) {
                i++;
                list.eq(i).attr("data-aos", "fade-up");
                i++;
                list.eq(i).attr("data-aos", "fade-up-left");
                continue;
            }

            list.eq(i + 1).attr("data-aos", "fade-up-left");
            i++;

        }


    }

}

// function galleryAnimMobile(mobileSize) {
//     let list = $("body > main > section:first-child > div:nth-child(2) > div");
//
//     if (mobileSize.matches) {
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
//     } else {
//
//
//
//     }
//
// }








