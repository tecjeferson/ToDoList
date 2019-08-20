let data = [{item: 'Jeferson'}, {item: 'Emanuele'}, {item: 'Ryan'}]


module.exports = (app)=>{
    app.get('/todo', (req, res)=>{
        res.render('home', {todos: data})
    })

    app.post('/todo', (req, res)=>{
        
    })

    app.delete('/todo', (req, res)=>{
        
    })
}