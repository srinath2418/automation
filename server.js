const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET endpoint
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

// POST endpoint
app.post('/api/users', (req, res) => {
  let { name } = req.body;
  let newUser = { id: Date.now(), name };
  res.status(201).json(newUser);
});

// GET by ID endpoint
app.get('/api/users/:id', (req, res) => {
  let { id } = req.params;
  res.json({ id: parseInt(id), name: `User ${id}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});