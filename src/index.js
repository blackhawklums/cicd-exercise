const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    environment: process.env.APP_ENV || 'local',
    version: process.env.APP_VERSION || 'unknown',
  });
});

app.get('/greet', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ message: `Hello, ${name}! 👋` });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
