const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');
const recordRoutes = require('./routes/recordRoutes');
const adminRoutes = require('./routes/adminRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');


app.use(express.json());

// Auth Routes
app.use('/auth', authRoutes);
app.use('/records',recordRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('Finance Backend API Running');
});

app.use(errorMiddleware);

module.exports = app;