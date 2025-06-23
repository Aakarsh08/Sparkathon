import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index.js'; // Adjust path if needed

const app = express();

// Define allowed origins
const allowedOrigins = [
  'http://localhost:5173', // for local development
  'frontend-deployed-url', // your deployed frontend (change if needed)
];

// CORS middleware
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api', routes);


export default app;
