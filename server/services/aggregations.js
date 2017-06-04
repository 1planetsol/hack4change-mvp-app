var Influx = require('influx');

var client = Influx({
    host : "localhost",
    port : 8086,
    username : '',
    password : '',
    database : 'sol_time_series_stats'
});

/*
Query Example

dbClient.query('SELECT * FROM ' + info.series.numName + " WHERE tag1='timestampRoundTrip';", function (err, res) {
  })

*/
exports.findAllEnergyGenerated = function(err, result){
  client.query('SELECT * FROM "energy-generated";', function(err, res){
    console.log('response/error is ', res, err);
    return(err, res);
  });
};

exports.findAllPowerGenerated = function(err, result){
  client.query('SELECT * FROM "power-generated";', function(err, res){
    console.log('response/error is ', res, err);
    return(err, res);
  });
};

exports.findAllGridEnergy = function(err, result){
  client.query('SELECT * FROM "grid-energy";', function(err, res){
    // console.log('response/error is ', res, err);
    return(err, res);
  });
};

exports.findAllEnergyUsed = function(err, result){
  client.query('SELECT * FROM "energy-used";', function(err, res){
    // console.log('response/error is ', res, err);
    return(err, res);
  });
};

exports.findAllPowerUsed = function(err, result){
  client.query('SELECT * FROM "power-used";', function(err, res){
    // console.log('response/error is ', res, err);
    return(err, res);
  });
};

exports.findAllGridPower = function(err, result){
  client.query('SELECT * FROM "grid-power";', function(err, res){
    // console.log('response/error is ', res, err);
    return(err, res);
  });
};

