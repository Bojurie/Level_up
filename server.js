const express = require('express');
// var logger = require('morgan');
const app = express();

const path = require('path')

// app.use('/server.js', express.static(path.join(__dirname, 'public')))

app.use('/server.js', express.static(path.join(__dirname, 'public')));


// app.use(express.urlencoded({ extended: false }));
// var cookieParser = require('cookie-parser');
// app.set('view engine', 'jade');
// app.set('views', path.join(__dirname, 'views'))

// app.use(cookieParser());

app.post('/login', (req, res) => {
  res.send('Got a POST request')
})

app.post('/register', (req, res) => {
  res.send('Got a POST request')
})

// app.use('/login', (req, res ));
// app.use('/register', (req, res));



const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})