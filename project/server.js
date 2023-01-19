//require('./server/models/db');

//require('./server/database/connection');

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');


const connectDB = require('./server/database/connection');

const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

//const Handlebars = require('handlebars');
//const { default: mongoose } = require('mongoose');




const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
//const hbs = require('express-handlebars')


// log requests
app.use(morgan('tiny'));

// connection mongoDB
connectDB();



// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.use(bodyparser.json());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir:__dirname+ '/views/layouts/'}));


// load assets
app.use('/assets/js',express.static(path.resolve(__dirname,"assets/js")))

// load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT, () =>{
    console.log('Server is running on http://localhost:'+ PORT)});





