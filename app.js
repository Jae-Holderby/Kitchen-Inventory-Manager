const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const http = require('http')
const Socket = require('socket.io')

const index = require('./routes/index');
const members = require('./routes/members');
const foods = require('./routes/foods');
const recipes = require('./routes/recipes')
const ingredients = require('./routes/ingredients')

const app = express();
const server = http.createServer(app)
const io = new Socket(server)
const port = process.env.PORT || 3000;


app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/', index);
app.use('/members', members);
app.use('/foods', foods)
app.use('/recipes', recipes)
app.use('/ingredients', ingredients)




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

server.listen(port, function() {

})

var room = "inventory"

io.on('connection', function(socket){

  app.use(function(req, res, next){
    socket.send('message')
    console.log("middleware");
    next();
  })
  console.log("user has connected to " + room);
  socket.on('open', function(data){
    console.log(data);
  })
})


module.exports = app;
