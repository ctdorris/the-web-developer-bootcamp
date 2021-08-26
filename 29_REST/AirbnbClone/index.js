const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let listings = [
    {
        id: uuid(),
        title: 'Beautiful beach house near city center',
        host: 'Chris',
        location: 'Miami, FL',
        rate: 108
    },
    {
        id: uuid(),
        title: 'Condo near downtown bars',
        host: 'Stephanie',
        location: 'Nashville, TN',
        rate: 509
    },
    {
        id: uuid(),
        title: 'Studio in Midtown Manhattan',
        host: 'Alberto',
        location: 'New York, NY',
        rate: 425
    },
    {
        id: uuid(),
        title: 'Cabin with amazing views near restaurants',
        host: 'Kelsey',
        location: 'Gatlinburg, TN',
        rate: 207
    },
]

app.get('/listings', (req, res) => {
    res.render('listings/index', { listings });
})

app.get('/listings/new', (req, res) => {
    res.render('listings/new');
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})