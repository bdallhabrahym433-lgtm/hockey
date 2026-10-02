/* =========================================================
   NAVIGATION
========================================================= */

function initNavigation() {

    const menuButton =
        document.getElementById("menu-button");

    const mobileNavigation =
        document.getElementById("mobile-navigation");

    if (!menuButton || !mobileNavigation) {
        return;
    }


    /* =========================
       Open / Close Menu
    ========================== */

    menuButton.addEventListener("click", () => {

        const isOpen =
            mobileNavigation.classList.toggle("is-open");

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    /* =========================
       Close After Click
    ========================== */

    const mobileLinks =
        mobileNavigation.querySelectorAll(
            ".mobile-nav-link"
        );

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove(
                "is-open"
            );

            document.body.classList.remove(
                "menu-open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* =========================
       Active Navigation
    ========================== */

    const navigationLinks =
        document.querySelectorAll(
            ".nav-link"
        );

    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            navigationLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

}


/* =========================================================
   START
========================================================= */

window.initNavigation = initNavigation;