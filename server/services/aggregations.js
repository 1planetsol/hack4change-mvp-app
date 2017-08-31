// var Influx = require('influx');

// var client = Influx({
//     host : "localhost",
//     port : 8086,
//     username : '',
//     password : '',
//     database : 'sol_time_series_stats'
// });

// exports.findAllEnergyGenerated = function(cb){
//   client.query('SELECT * FROM "energy-generated";', function(err, res){
//     // console.log('response/error is ', res, err);
//     cb(err, res);
//   });
// };

// exports.findAllPowerGenerated = function(cb){
//   client.query('SELECT * FROM "power-generated";', function(err, res){
//     // console.log('response/error is ', res, err);
//     cb(err, res);
//   });
// };

// exports.findAllGridEnergy = function(cb){
//   client.query('SELECT * FROM "grid-energy";', function(err, res){
//     // console.log('response/error is ', res, err);
//     cb(err, res);
//   });
// };

// exports.findAllEnergyUsed = function(cb){
//   client.query('SELECT * FROM "energy-used";', function(err, res){
//     // console.log('response/error is ', res, err);
//     cb(err, res);
//   });
// };

// exports.findAllPowerUsed = function(cb){
//   client.query('SELECT * FROM "power-used";', function(err, res){
//     // console.log('response/error is ', res, err);
//     cb(err, res);
//   });
// };

// exports.findAllGridPower = function(cb){
//   client.query('SELECT * FROM "grid-power";', function(err, res){
//     // console.log('response/error is ', res, err);
//     cb(err, res);
//   });
// };

// // Query Example
// // client.query('SELECT * FROM "grid-power" LIMIT 100;', function(err, res){
// //     // console.log('response/error is ', res, err);
// //     cb(err, res);
// // });
