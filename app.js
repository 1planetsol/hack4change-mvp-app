const config = require('config');
const Hapi = require('hapi');
// const mongoose = require('mongoose');
const Inert = require('inert');
const Vision = require('vision');
const Routes = require('./server/routes');
const scheduler = require('./server/scheduler');

//create a new server
var server = new Hapi.Server();
server.connection({ port: 3000}
                  );

console.log('check process.env.NODE_ENV: ', process.env.NODE_ENV);

//If using InfluxDB

//swagger to document API routes
var swaggerOptions = {
  produces: ['application/json', 'text/xml'],
  info: {
    title: "1PlanetSol",
    description: "API for 1PlanetSol community impact"
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

server.inject({method: 'OPTIONS', url:'/', headers: {
    origin: 'http://test.example.com',
    'access-control-request-method': 'GET',
    'access-control-request-headers': ''
}}, (res) => {

    console.log(res.headers);
    console.log(res.payload);
    console.log(res.statusCode);
});

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

