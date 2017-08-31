const async = require('async');
const _ = require('lodash');
const stats = require('./stats');

exports.getPreviousDayStats = function(callback){
    //sums values across series with a measurement (so all users)
    var query = ' SELECT SUM("value") FROM "energy-generated" WHERE time < now() GROUP BY time(1s) '
    stats.searchMeasurements(query, function(results){
        console.log('prev day results in service ', results);
        callback(null, results);
    })
}
exports.getPreviousHourStats = function(callback){ //update query for last hour data once data refreshing on schedule
    var query = ' SELECT * FROM "energy-generated"; '
    stats.searchMeasurements(query, function(results){
        console.log('prev hour results in service ', results);
        callback(null, results);
    })
}
