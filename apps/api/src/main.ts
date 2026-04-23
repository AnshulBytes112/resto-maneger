import express from 'express';
import cors from 'cors';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Health check
app.get('/api/health', (req, res) => {
  res.send({ message: 'API is healthy', status: 'ok', timestamp: new Date() });
});

// Basic Root Route
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to the Hotel Management API' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
