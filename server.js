const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose') 
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require('multer')


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(console.log("connected to mongoDB"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

// const path = require('path')

// app.use('/server.js', express.static(path.join(__dirname, 'public')))

// app.use('/server.js', express.static(path.join(__dirname, 'public')));


// app.use(express.urlencoded({ extended: false }));
// var cookieParser = require('cookie-parser');
// app.set('view engine', 'jade');
// app.set('views', path.join(__dirname, 'views'))

// app.use(cookieParser());

// app.use('/', (req, res) => {
//   console.log('hello from server')
// })

    // "start": "node ./bin/www",
    // "client": "cd my-app && npm start",
    // "dev": "concurrently \"nodemon server.js\" \"npm run client\""

// app.use('/login', (req, res ));
// app.use('/register', (req, res));


console.log('hello')
const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})