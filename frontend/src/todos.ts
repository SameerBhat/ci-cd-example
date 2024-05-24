// Importing the necessary modules
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

// Initialize the express app
const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Function to get todos from a remote API
const getTodos = async () => {
  const response = await fetch('http://testbackend:3000');
  const todos = await response.json();
  return todos;
};

// Endpoint to get all todos
app.get('/todos', async (req: Request, res: Response) => {
  try {
    const todos = await getTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).send("Error retrieving todos");
  }
});

// Start listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
