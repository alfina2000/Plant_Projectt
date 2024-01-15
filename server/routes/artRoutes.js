const express = require('express');
const router = express.Router();
const User = require('../models/User');
//const passport = require('passport');
const multer = require('multer');
const ImageSchema = require('../models/ImageSchema');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random()*1e9)
    cb(null, uniqueSuffix + file.originalname);
  },
});


const upload = multer({ storage: storage });

router.post('/upload', upload.single('image'), async (req, res) => {

try {
 // Additional data from the form
    const imageName = req.body.imageName;
    const artistName = req.body.artistName;
    const description = req.body.description;
    const price = req.body.description;
  
  // Create a new image document in MongoDB
  const newImage = new ImageSchema({
    filename: req.file.filename,
    originalname: req.file.originalname,
    path: req.file.path,
    imageName: imageName, 
    artistName: artistName,
    description: description,
    price: price,
  });
console.log("image",newImage)
  await newImage.save();

  res.json({ message: 'Image uploaded successfully' });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal Server Error' });
}
});
// router.get('/artistimg/:id', async (req, res) => {
//   try {
//     const artistId = req.params._id;
//     const images = await Image.find({ artistId });

//     if (!images || images.length === 0) {
//       return res.status(404).json({ message: 'No images found for the artist' });
//     }

//     res.status(200).json(images);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;