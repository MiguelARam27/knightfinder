const express = require('express');
const app = express();
const connectDB = require('./config/db');
//Connect
connectDB();

//middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('app is running'));

const PORT = process.env.PORT || 5000;

//Routes
app.use('/api/users', require('../api/users'));
app.use('/api/auth', require('../api/auth'));
app.use('/api/profile', require('../api/profile'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//made this with new branch
