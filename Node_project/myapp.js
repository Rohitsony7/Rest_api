const express = require('express')
const app = express()
var path = require('path')
var ejs = require('ejs')
var content = require('./data.json') //this we have to do
const port = 4200
/* Basic routing
// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

// Each route can have one or more handler functions, which are executed when the route is matched.

// Route definition takes the following structure:

 app.METHOD(PATH, HANDLER) */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('index', {'content': content}))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
