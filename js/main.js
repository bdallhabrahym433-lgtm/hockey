/* =========================================================
   MAIN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* =========================
           Navigation
        ========================== */

        if (typeof initNavigation === "function") {
            initNavigation();
        }


        /* =========================
           News Filters
        ========================== */

        if (typeof initNewsFilters === "function") {
            initNewsFilters();
        }


        /* =========================
           Tournament Filters
        ========================== */

        if (
            typeof initTournamentFilters ===
            "function"
        ) {
            initTournamentFilters();
        }


        /* =========================
           Lucide Icons
        ========================== */

        if (
            typeof lucide !== "undefined" &&
            typeof lucide.createIcons === "function"
        ) {
            lucide.createIcons();
        }

    }
);