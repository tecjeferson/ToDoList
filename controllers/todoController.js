const dataList = require('../public/src/js/ToDoApp')


module.exports = (app)=>{
    app.get('/todo', (req, res)=>{
        res.render('home', {todos: dataList.h1})
    })

    app.post('/todo', (req, res)=>{
        
    })

    app.delete('/todo', (req, res)=>{
        
    })
}