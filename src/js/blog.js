document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');
    const newsCard = document.getElementById('news-card');
    const newsImages = document.getElementById('news-images');
    const newsDate = document.getElementById('news-date');
    const newsTitle = document.getElementById('news-title');
    const newsDescription = document.getElementById('news-description');
    const developersGrid = document.getElementById('developers-grid');

    // Developers Data
    const developers = [
        { name: "Claudia González" },
        { name: "Miguel Marín" },
        { name: "Heidi Ruiz" },
        { name: "Daniel Torres" }
    ];

    // Fetch Articles Data
    fetch('rsc/articles.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            renderTimeline(data);
            if (data.length > 0) {
                // Select first event by default
                showNews(data[0]);
                const firstItem = timelineContainer.querySelector('.timeline-item');
                if (firstItem) firstItem.classList.add('active');
            }
        })
        .catch(error => console.error('Error fetching articles:', error));

    // Render Timeline
    function renderTimeline(articles) {
        timelineContainer.innerHTML = '';
        articles.forEach(article => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.onclick = () => {
                showNews(article);
                // Highlight active item
                document.querySelectorAll('.timeline-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
            };

            const date = document.createElement('span');
            date.className = 'timeline-date';
            date.textContent = article.date;

            const title = document.createElement('h4');
            title.className = 'timeline-title';
            title.textContent = article.title;

            item.appendChild(date);
            item.appendChild(title);
            timelineContainer.appendChild(item);
        });
    }

    // Show News in Viewer
    function showNews(article) {
        // Update Text
        // Format date slightly nicer for "social" look if desired, or keep raw
        newsDate.textContent = `${article.date} · ${article.time}`;
        newsTitle.textContent = article.title;
        newsDescription.textContent = article.description;

        // Update Images
        newsImages.innerHTML = '';
        if (article.images && article.images.length > 0) {
            // Social media posts usually show one big image or a grid. 
            // For simplicity, we'll show the first one as the main post image.
            // If there are multiple, in a real app check for galleries.
            // Here we can just stack them or show one. Let's stack for now but usually its just one main one.

            article.images.forEach(imgName => {
                const img = document.createElement('img');
                img.src = `../rsc/img/${imgName}`;
                img.alt = article.title;
                img.onerror = () => {
                    img.src = ''; // Social media images are usually larger
                };
                newsImages.appendChild(img);
            });
        } else {
            const img = document.createElement('img');
            img.src = '';
            newsImages.appendChild(img);
        }

        // Re-trigger animation
        newsCard.classList.remove('fade-in');
        // Trigger reflow to restart animation
        void newsCard.offsetWidth;
        // We actually defined animation on the class in CSS, so just removing/adding class 
        // might not re-trigger unless we toggle a specific animation class or rely on the keyframes running on mount.
        // In the CSS we set `animation: fadeIn 0.5s` on .social-media-post.
        // To restart it:
        newsCard.style.animation = 'none';
        newsCard.offsetHeight; /* trigger reflow */
        newsCard.style.animation = 'fadeIn 0.5s ease-in-out';
    }

    // Render Developers
    function renderDevelopers() {
        developersGrid.innerHTML = '';
        developers.forEach(dev => {
            const card = document.createElement('div');
            card.className = 'developer-card';

            const avatar = document.createElement('div');
            avatar.className = 'developer-avatar';
            if (dev.image) {
                const img = document.createElement('img');
                img.src = dev.image;
                img.alt = dev.name;
                avatar.appendChild(img);
            } else {
                avatar.textContent = dev.name.charAt(0);
            }

            const name = document.createElement('h3');
            name.className = 'developer-name';
            name.textContent = dev.name;

            card.appendChild(avatar);
            card.appendChild(name);
            developersGrid.appendChild(card);
        });
    }

    renderDevelopers();
});
