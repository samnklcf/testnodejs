const express = require('express');

const app = express();

app.use('/public',express.static('public'))
app.use('/public/images',express.static('public/images'))


var list = ['samuel', "EYEBE", "NKENKE", 'statut']

app.set('views', './views');
app.set('view engine', 'ejs');


// app.get('/film', (req, res) => {
//    res.render('livre')
// });

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/film/:id', (req, res) => {
    const id = req.params.id;
    const titre = "samuel";

    res.render('livre', {film : id, titre : titre})

})
app.listen(3000, () => {
    console.log('192.168.1.201:3000/')
})
