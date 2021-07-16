const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!")
//     res.send('<h1>This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
    res.send('This is the home page!!!!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Viewing Post ID: ${postID} on the ${subreddit} subreddit!</h1>`);
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!!! THIS IS DIFFERENT FROM THE GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED.');
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})



// /cats => 'meow'
// /dogs => 'woof'
// '/' home page

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!")
})