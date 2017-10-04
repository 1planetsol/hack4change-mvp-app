const _ = require('lodash');
const async = require('async');
const etlJob = require('./recent-feed'); //update

exports.getData = function(cb) {

    //scheduled job called for each source id
    async.series({
        source1654: function(callback) {
            etlJob.run('1654', function(err, result) {
                console.log('Processed ETL download 1654');
                callback(err, result);
            });
        },
        source1236: function(callback){
            etlJob.run('1236', function(err, result) {
                console.log('Processed ETL download 1236');
                callback(err, result);
            });
        },
        source1009: function(callback){
            etlJob.run('1009', function(err, result) {
                console.log('Processed ETL download 1009');
                callback(err, result);
            });
        },
        source1498: function(callback){
            etlJob.run('1498', function(err, result) {
                console.log('Processed ETL download 1498');
                callback(err, result);
            });
        },
        source1499: function(callback){
            etlJob.run('1499', function(err, result) {
                console.log('Processed ETL download 1499');
                callback(err, result);
            });
        },
        source1996: function(callback){
            etlJob.run('1996', function(err, result) {
                console.log('Processed ETL download 1996');
                callback(err, result);
            });
        },

    }, function(err, results) {
        // results format: {sourceabc: 1, sourcexyz: 2}
        if(err){
            console.error(['etl'], err);
        }
        console.log('Finished ETL downloads');
        cb(err, results);
    });

}
