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
// اختبار الاتصال بـ Supabase
async function testSupabaseConnection() {
    const { data, error } = await supabaseClient
        .from('site_settings')
        .select('site_name')
        .limit(1);

    if (error) {
        console.error('خطأ في الاتصال بـ Supabase:', error.message);
        return;
    }

    console.log('تم الاتصال بـ Supabase بنجاح!', data);
}

testSupabaseConnection();
