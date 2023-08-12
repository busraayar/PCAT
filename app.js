const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');

const app = express();


//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//TEMPLATE ENGİNE
app.set('view engine', 'ejs');


//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//ROUTES
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});
app.get('/photo', (req, res) => {
  res.render('photo');
});

app.post('/photos', async(req, res) => {
  await Photo.create(req.body);
  res.redirect('/')
});

let port = 2000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda calisiyor`);
});
