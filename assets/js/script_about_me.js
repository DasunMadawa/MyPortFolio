var achievementsTab = window.matchMedia("(max-width: 1778px)");
achievementsTab.addListener(achievementsAnimTab);

var achievementsMobile = window.matchMedia("(max-width: 898px)");
achievementsMobile.addListener(achievementsAnimMobile);

achievementsAnimMobile(achievementsMobile);
achievementsAnimTab(achievementsTab);

function achievementsAnimTab(achievementsTab) {
    let list = $("body > main > section:nth-child(4) > div:nth-child(2) > div");

    if (achievementsTab.matches) {
        for (let i = 0; i < list.length; i++) {
            list.eq(i).removeAttr("data-aos-delay");
            let temp = i % 2;
            if (temp === 1) {
                list.eq(i).attr("data-aos-delay", "100");

            }

        }

    } else {
        for (let i = 0; i < list.length; i++) {
            list.eq(i).removeAttr("data-aos-delay");
            let temp = i % 3;
            if (temp === 1) {
                list.eq(i).attr("data-aos-delay", "100");

            } else if (temp === 2) {
                list.eq(i).attr("data-aos-delay", "200");

            }

        }


    }

}

function achievementsAnimMobile(achievementsMobile) {
    let list = $("body > main > section:nth-child(4) > div:nth-child(2) > div");

    if (achievementsMobile.matches) {
        for (let i = 0; i < list.length; i++) {
            list.eq(i).removeAttr("data-aos-delay");
        }


    } else {
        for (let i = 0; i < list.length; i++) {
            list.eq(i).removeAttr("data-aos-delay");

            let temp = i % 2;
            if (temp === 1) {
                list.eq(i).attr("data-aos-delay", "100");

            }

        }


    }

}




