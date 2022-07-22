const express = require('express')
const app = express()

app.use(express.static('static'))
app.set('views', './views');
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.listen("3333", () => {
    console.log('http://localhost:3333');
})