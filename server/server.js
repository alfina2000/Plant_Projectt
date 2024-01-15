// const passport = require('passport');
// const session = require('express-session');
const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose');
const Usermodel = require('./models/User');
const Plantmodel = require('./models/Plant');
const artRoutes = require('./routes/artRoutes');
const ImageRoutes = require('./routes/ImageRoutes');
const userRoutes = require('./routes/userRoutes');
const multer = require('multer');



const app = express();
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000;

// app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use('/arts', artRoutes);
app.use('/images',ImageRoutes)
app.use('/userprofile', userRoutes)
app.use('/uploadimage', express.static('uploads'));
// Connect to MongoDB
mongoose.connect('mongodb+srv://alfinaseethy:alfina@plant_store.7ulojko.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err));


app.use(express.static('public'));

//user signup
app.post('/signup', (req, res) =>{

  Usermodel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})


//user login
app.post('/login', (req, res) =>{
  const {username, password} = req.body;
  Usermodel.findOne({username: username})
  .then(user => {
    if(user) {
      if(user.password === password){
        res.json({ message: 'Success', role: user.role,id:user.id ,user})
      }else {
        res.json({ message: 'The password is incorrect' })
      }
    }else{
      res.json({ message: 'No record existed' })
    }
  })
})

app.get('/admin',async(req,res)=>{ 
  var data= await Usermodel.find()
  res.send(data)
})

app.delete("/delet:id",async(req,res)=>{
  console.log(req.params.id);
  let id = req.params.id;
  await Usermodel.findByIdAndDelete(id)
  res.send("data deleted")
})


// Require your route files and use them
// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');

// app.use('/arts', artRoutes);
// app.use('/auth', authRoutes);


// app.post('/add', (req, res) =>{

//   Addplantmodel.create(req.body)
//   .then(user => res.json(user))
//   .catch(err => res.json(err))
// })



app.post('/addplant', (req, res) =>{

  Plantmodel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

// get
app.get('/view',async(req,res)=>{
  var result = await Plantmodel.find()
  res.json(result)
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})