const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

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

app.get('/api/projects', (req, res) => {
  const query = 'SELECT title, summery, b1, b2, b3, b4, b5 FROM projects';

  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Server error' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/projects', (req, res) => {
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

app.delete('/api/projects/:title', (req, res) => {
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
app.post('/api/skills', (req, res) => {
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

app.get('/api/skills', (req, res) => {
  const query = 'SELECT typ, skill FROM skills';

  db.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ message: 'Server error' });
      return;
    }
    res.json(results);
  });
});

app.delete('/api/skills/:skill', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
