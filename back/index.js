const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

// API Key
const API_KEY = '';

// Middleware to validate API key
const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === API_KEY) {
    next(); // Allow the request to proceed
  } else {
    res.status(401).json({ message: 'Unauthorized: Invalid API key' });
  }
};

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Public route: Login (does not require API key)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM admins WHERE user = ? AND pass = ?';

  db.query(query, [username, password], (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Server error' });
      return;
    }
    if (results.length > 0) {
      res.json({ message: 'Login successful' });
    } else {
      res.json({ message: 'Invalid username or password' });
    }
  });
});

// Protected routes: Require API key
app.get('/api/projects', validateApiKey, (req, res) => {
  const query = 'SELECT title, summery, b1, b2, b3, b4, b5 FROM projects';

  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Server error' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/projects', validateApiKey, (req, res) => {
  const { title, summery, b1, b2, b3, b4, b5 } = req.body;
  const query = 'INSERT INTO projects (title, summery, b1, b2, b3, b4, b5) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(query, [title, summery, b1, b2, b3, b4, b5], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to add project' });
      return;
    }
    res.json({ message: 'Project added successfully' });
  });
});

app.delete('/api/projects/:title', validateApiKey, (req, res) => {
  const title = req.params.title;
  const query = 'DELETE FROM projects WHERE title = ?';

  db.query(query, [title], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete project' });
      return;
    }
    res.json({ message: 'Project deleted successfully' });
  });
});

// Skills API
app.post('/api/skills', validateApiKey, (req, res) => {
  const { typ, skill } = req.body;
  const query = 'INSERT INTO skills (SID, typ, skill) VALUES (null, ?, ?)';

  db.query(query, [typ, skill], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to add skill' });
      return;
    }
    res.json({ message: 'Skill added successfully' });
  });
});

app.get('/api/skills', validateApiKey, (req, res) => {
  const query = 'SELECT typ, skill FROM skills';

  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Server error' });
      return;
    }
    res.json(results);
  });
});

app.delete('/api/skills/:skill', validateApiKey, (req, res) => {
  const skill = req.params.skill;
  const query = 'DELETE FROM skills WHERE skill = ?';

  db.query(query, [skill], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete skill' });
      return;
    }
    res.json({ message: 'Skill deleted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
