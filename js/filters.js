/* =========================================================
   NEWS FILTER
========================================================= */

function initNewsFilters() {

    const filterContainer =
        document.getElementById("news-filters");

    if (!filterContainer) {
        return;
    }


    const buttons =
        filterContainer.querySelectorAll(
            "[data-news-filter]"
        );

    const cards =
        document.querySelectorAll(
            "[data-news-category]"
        );


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter =
                button.dataset.newsFilter;


            /* Active button */

            buttons.forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");


            /* Filter cards */

            cards.forEach(card => {

                const category =
                    card.dataset.newsCategory;

                const shouldShow =
                    selectedFilter === "all" ||
                    selectedFilter === category;

                card.classList.toggle(
                    "is-hidden",
                    !shouldShow
                );

            });

        });

    });

}


/* =========================================================
   TOURNAMENT FILTER
========================================================= */

function initTournamentFilters() {

    const filterContainer =
        document.getElementById(
            "tournament-filters"
        );

    if (!filterContainer) {
        return;
    }


    const buttons =
        filterContainer.querySelectorAll(
            "[data-tournament-filter]"
        );

    const cards =
        document.querySelectorAll(
            "[data-tournament-status]"
        );


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter =
                button.dataset.tournamentFilter;


            /* Active button */

            buttons.forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");


            /* Filter cards */

            cards.forEach(card => {

                const status =
                    card.dataset.tournamentStatus;

                const shouldShow =
                    selectedFilter === "all" ||
                    selectedFilter === status;

                card.classList.toggle(
                    "is-hidden",
                    !shouldShow
                );

            });

        });

    });

}


/* =========================================================
   EXPORT
========================================================= */

window.initNewsFilters =
    initNewsFilters;

window.initTournamentFilters =
    initTournamentFilters;