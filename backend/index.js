const express = require('express');
const client = require('prom-client');
const app = express();
app.use(express.json());

const register = new client.Registry();
client.collectDefaultMetrics({ register });

let articles = [];

app.get('/articles', (req, res) => res.json(articles));
app.post('/articles', (req, res) => {
  const article = { id: Date.now(), title: req.body.title, content: req.body.content };
  articles.push(article);
  res.json(article);
});
app.delete('/articles/:id', (req, res) => {
  articles = articles.filter(a => a.id != req.params.id);
  res.json({ ok: true });
});
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3001, () => console.log('Backend running on port 3001'));
