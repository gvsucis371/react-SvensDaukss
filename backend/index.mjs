import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import cors from 'cors';

const expressApp = express();
const serverPort = 5000;

expressApp.use(cors());
expressApp.use(express.json());

let sqliteDatabase;

// Initialize and connect SQLite database
const initializeDatabase = async () => {
  sqliteDatabase = await open({
    filename: './users.db',
    driver: sqlite3.Database,
  });

  await sqliteDatabase.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    weight INTEGER,
    gender TEXT
  )`);
};

// Route: Get all users
expressApp.get('/api/users', async (request, response) => {
  const allUsers = await sqliteDatabase.all('SELECT * FROM users');
  response.json(allUsers);
});

// Route: Add a new user
expressApp.post('/api/users', async (request, response) => {
  const { name, email, weight, gender } = request.body;

  if (!name || !email || !email.includes('@')) {
    return response.status(400).json({ error: 'Invalid name or email' });
  }

  try {
    const insertResult = await sqliteDatabase.run(
      'INSERT INTO users (name, email, weight, gender) VALUES (?, ?, ?, ?)',
      [name, email, weight, gender]
    );
    response.status(201).json({ id: insertResult.lastID, name, email, weight, gender });
  } catch (databaseError) {
    if (databaseError.code === 'SQLITE_CONSTRAINT') {
      return response.status(400).json({ error: 'Email already exists' });
    }
    response.status(500).json({ error: 'Server error' });
  }
});

// Route: Update an existing user
expressApp.put('/api/users/:id', async (request, response) => {
  const userId = request.params.id;
  const { name, email, weight, gender } = request.body;

  if (!name || !email || !email.includes('@')) {
    return response.status(400).json({ error: 'Invalid name or email' });
  }

  try {
    const updateResult = await sqliteDatabase.run(
      'UPDATE users SET name = ?, email = ?, weight = ?, gender = ? WHERE id = ?',
      [name, email, weight, gender, userId]
    );
    if (updateResult.changes === 0) {
      return response.status(404).json({ error: 'User not found' });
    }
    response.json({ id: userId, name, email, weight, gender });
  } catch (databaseError) {
    if (databaseError.code === 'SQLITE_CONSTRAINT') {
      return response.status(400).json({ error: 'Email already exists' });
    }
    response.status(500).json({ error: 'Server error' });
  }
});

initializeDatabase().then(() => {
  expressApp.listen(serverPort, () => {
    console.log(`Server running on http://localhost:${serverPort}`);
  });
});
