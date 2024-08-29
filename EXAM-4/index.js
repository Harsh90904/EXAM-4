const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let news = [];


app.get('/', (req, res) => {
  res.send('index.html'));
});


app.get('/news', (req, res) => {
  res.send(news);
});


app.post('/news', (req, res) => {
  const { title, content, img } = req.body;
  const newsItem = { title, content, img };

  news.push(newsItem);
  res.send(newsItem); 
});

app.listen(8090, () => {
  console.log('Server is running on port 8090');
});
