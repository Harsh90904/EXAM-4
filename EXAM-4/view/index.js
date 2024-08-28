document.getElementById('newsForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const img = document.getElementById('img').value;

    const newsItem = { title, content, img };

        const response = await fetch('http://localhost:8090/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsItem)
        });

        if (response.ok) {
            alert('News item added successfully!');
            loadNews(); 
        } else {
            alert('Failed to add news item.');
        }
    
});

async function loadNews() {
        const response = await fetch('http://localhost:8090/news');
        const news = await response.json();

        const newsList = document.getElementById('newsList');
        newsList.innerHTML = ''; 

        news.forEach(item => {
            const newsDiv = document.createElement('div');
            newsDiv.className = 'news-item';
            newsDiv.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                <img src="${item.img}" alt="${item.title}">
            `;
            newsList.appendChild(newsDiv);
        });
    
}

window.onload = loadNews;