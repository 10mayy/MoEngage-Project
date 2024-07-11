const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [
    {
      email: 'tanmaymandal123@gmail.com',
      password: '1234'
    }
  ];
const updateUserDetails = (email, newDetails) => {
  const userIndex = users.findIndex(user => user.email === email);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...newDetails };
  }
};
  
  // Signup endpoint
  app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).send({ message: 'User already exists' });
    }
    users.push({ username, email, password });
    res.status(200).send({ message: 'Signup successful' });
  });
  

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    updateUserDetails(email, { lastLogin: new Date() });
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).send({ message: 'User already exists' });
  }
  users.push({ username, email, password, createdAt: new Date() });
  res.status(200).send({ message: 'Signup successful' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
