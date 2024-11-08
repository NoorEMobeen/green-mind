const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const quizRouter = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');
const logger = require('./middlewares/logger');
const authentication = require('./middlewares/authentication');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error));

// Routes
app.use('/api/quizzes', quizRouter);
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
