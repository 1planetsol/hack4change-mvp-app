const async = require('async');
const _ = require('lodash');
const stats = require('./stats');

exports.getPreviousDayStats = function(callback){
    //sums values across series with a measurement (so all users)
    var query = ' SELECT SUM("value") FROM "energy-generated" WHERE time < now() GROUP BY time(1s) '
    stats.searchMeasurements(query, function(results){
        console.log('prev day results in service ', results);
        //for integration testing of summarized results
        //families served, dollars saved, earth years (null for now)
        var testResult = [ 14, 20000, null];
        callback(null, testResult);
    })
}
exports.getPreviousHourStats = function(callback){ //update query for last hour data once data refreshing on schedule
    var query = ' SELECT * FROM "energy-generated"; '
    stats.searchMeasurements(query, function(results){
        console.log('prev hour results in service ', results);
        callback(null, results);
    })
}
