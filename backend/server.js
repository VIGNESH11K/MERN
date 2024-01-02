require('dotenv').config()


const express = require('express')
const workoutRoutes = require('./routes/workouts')

const app = express()


// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
  })


  // listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
  })

