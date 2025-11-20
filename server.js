const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data store
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET all users - Error: Missing closing brace
app.get('/api/users', (req, res) => {
  res.json(users);
// Missing closing brace

// POST create user - Error: Invalid object syntax
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Date.now(), name, email, }; // Extra comma
  users.push(newUser);
  res.status(201).json(newUser)
}); // Missing semicolon

// GET user by ID - Error: No error handling for invalid ID
app.get('/api/users/:id', (req, res) => {
  var { id } = req.params;
  var user = users.find(u => u.id === parseInt(id));
  res.json(user); // Will return undefined if not found
});

// PUT update user - Error: Undefined variable
app.put('/api/users/:id', (req, res) => {
  let { id } = req.params;
  let { name, email } = req.body;
  let userIndex = users.findIndex(u => u.id === parseInt(id));
  
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], name, email };
    res.json(updatedUser); // Error: updatedUser is not defined
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// DELETE user - Error: Syntax error
app.delete('/api/users/:id', (req, res) => {
  let { id } = req.params;
  let userIndex = users.findIndex(u => u.id === parseInt(id));
  
  if (userIndex !== -1) {
    let deletedUser = users.splice(userIndex, 1)[0];
    res.json({ message: 'User deleted', user: deletedUser });
  } else {
    res.status(404).json({ error: 'User not found' })
  } // Missing semicolon
});

// File operations - Error: Unclosed string and bracket
app.get('/api/backup', (req, res) => {
  fs.writeFileSync('backup.json, JSON.stringify(users)); // Missing closing quote
  res.json({ message: 'Backup created' }
}); // Missing closing parenthesis

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); // Missing closing brace