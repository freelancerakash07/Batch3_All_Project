const express = require('express')
const colors = require('colors')
const path = require('path')
const dotenv = require('dotenv').config()




// dotenv file value get
const PORT = process.env.PORT || 6060



// init express
const app = express()

// static folder
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// express routing

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/menu', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/menu.html'))
})

app.get('/archive', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/archive.html'))
})

app.get('/gallery', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/gallery.html'))
})

app.get('/location', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/location.html'))
})

app.get('/news', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/news.html'))
})

app.get('/reservation', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/reservation.html'))
})

app.get('/staff', (req, res) => {
   res.sendFile(path.join(__dirname, '/public/staff.html'))
})


app.post('/fromsubmit', (req, res) => {
  
   res.json(req.body)
  
})


// express server create

app.listen(PORT, () => {

    console.log(`server is raning on port ${PORT}`.bgGreen.white);
})