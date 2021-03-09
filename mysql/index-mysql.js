const express =  require('express');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// routes
app.use('/', router)

app.listen(config.mysqlService.port, () =>{
  console.log('Servicio de mysql escuchando en el puerto: ',config.mysqlService.port )
})