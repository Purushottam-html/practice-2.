const express = require('express')
const connectDB = require('./config/db')
const app = express()
const port = 3000
const router = require('./routes/bookRoute')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/books', router)

app.listen(port, async() => {
  try{
    await connectDB();
    console.log("Server is connected to your server")
  }catch(error){
    console.log("Failed server")
  }

})
      