
async function loadNews() {
    const newsGrid = document.getElementById('news-grid');

    if (!newsGrid) {
        console.warn('لم يتم العثور على news-grid');
        return;
    }

    const { data, error } = await supabaseClient
        .from('news')
        .select(`
            id,
            title,
            description,
            image_url,
            category,
            published_at,
            created_at
        `)
        .eq('is_published', true)
        .order('published_at', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false });

    if (error) {
        console.error('خطأ في تحميل الأخبار:', error);
        return;
    }

    newsGrid.innerHTML = '';

    if (!data || data.length === 0) {
        newsGrid.innerHTML = `
            <div class="empty-state">
                لا توجد أخبار منشورة حالياً.
            </div>
        `;
        return;
    }

    data.forEach((news) => {
        const article = document.createElement('article');

        article.className = 'news-card';
        article.dataset.category = news.category || '';

        const image = news.image_url
            ? `<img src="${news.image_url}" alt="${news.title}" class="news-image">`
            : `<div class="news-image news-image-placeholder"></div>`;

        article.innerHTML = `
            ${image}

            <div class="news-content">
                <span class="news-category">
                    ${getNewsCategoryLabel(news.category)}
                </span>

                <h3>${news.title}</h3>

                <p>
                    ${news.description || ''}
                </p>

                <span class="news-date">
                    ${formatNewsDate(news.published_at || news.created_at)}
                </span>
            </div>
        `;

        newsGrid.appendChild(article);
    });
}


function getNewsCategoryLabel(category) {
    const categories = {
        teams: 'الفرق',
        tournaments: 'البطولات'
    };

    return categories[category] || 'أخبار';
}


function formatNewsDate(date) {
    if (!date) {
        return '';
    }

    return new Date(date).toLocaleDateString('ar-QA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
