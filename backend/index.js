import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
