const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

// Import routes
const adminRoutes = require('./routes/admin');
const facultyRoutes = require('./routes/faculty');
const studentRoutes = require('./routes/student');
const testRoutes = require('./routes/test');
const resultRoutes = require('./routes/result');
const authRoutes = require('./routes/auth');
const departmentRoutes = require('./routes/department');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/admins', adminRoutes);
app.use('/faculties', facultyRoutes);
app.use('/students', studentRoutes);
app.use('/tests', testRoutes);
app.use('/results', resultRoutes);
app.use('/auth', authRoutes);
app.use('/department', departmentRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to your application!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
