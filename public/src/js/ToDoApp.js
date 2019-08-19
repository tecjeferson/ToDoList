const cheerio = require('cheerio');
let data = [{item: 'Jeferson'}, {item: 'Emanuele'}, {item: 'Ryan'}]

const h1 = cheerio.load('<h1>Teste</h1>')

module.exports = {
    data,
    h1
}