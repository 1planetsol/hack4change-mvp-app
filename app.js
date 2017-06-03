const config = require('config');
const Hapi = require('hapi');
// const mongoose = require('mongoose');
const Inert = require('inert');
const Vision = require('vision');
const Routes = require('./server/routes');

//create a new server
var server = new Hapi.Server();
server.connection({ port: 3000});

console.log('check process.env.NODE_ENV: ', process.env.NODE_ENV);
//If using MongoDB
// var dbUrl = 'mongodb://'+config.get('database.username')+":"+config.get('database.password')+"@"+config.get('database.url')+'/realestate?authSource=admin';

// var dbOptions = {
//   db: { native: true },
//   server: { poolSize: 100 }
// };


//If using InfluxDB

//swagger to document API routes
var swaggerOptions = {
  produces: ['application/json', 'text/xml'],
  info: {
    title: "Real Estate",
    description: "Search properties"
  }
};

const goodOptions = {
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ error: '*', log: '*', request: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

server.register([
  Inert,
  Vision,
  {
    register: require('hapi-swagger'),
    options: swaggerOptions
  },
  {
    register: require('good'),
    options: goodOptions
  }
], function(err) {
    if(err){
      throw err;
    }

    //add the routes
    server.route(Routes.endpoints);

    server.start(function(err){
      if(err){
        throw err;
      }
      server.log('info', 'server running  at: ', server.info.uri);

      // mongoose.connect(dbUrl, dbOptions, function(err) {
      //   if(err) {
      //     server.log('error in connecting to db: ', err);
      //   } else {
      //     server.log('connected to mongoDB');
      //   }
      // });

    });
});

