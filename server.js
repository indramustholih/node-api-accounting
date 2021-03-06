var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controllers/set_user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/route_set_user');
routes(app);

app.listen(port);

console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);