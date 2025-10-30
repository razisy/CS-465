const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public
app.use(express.static(path.join(__dirname, 'public')));

// Test route
app.get('/ping', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
