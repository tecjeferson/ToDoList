const express = require('express')
const app = express();
const PORT = process.env.port || 3000

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/view'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => {
    console.log("Server is running at Port: " + PORT)
})