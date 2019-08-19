const express = require('express')
const app = express();
const todoController = require('./controllers/todoController')
const PORT = process.env.port || 3000

//fire controllers
todoController(app)

app.set('view engine', 'ejs')
app.use(express.static(__dirname +('/view')))
app.use(express.static(__dirname +('/public')))


app.listen(PORT, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Server is running at Port: " + PORT)
    }
})