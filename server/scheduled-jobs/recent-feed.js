const _ = require('lodash');
const Orchestrator = require('orchestrator');
const fs = require('fs');
const path = require('path');
const os =  require('os');
const download = require('../services/downloads');
const transformLoad = require('../services/data-load');

exports.getEguagedata = function(callback) {

    eguageApi.getData(function(err, data){
        if(err){
            console.error('Error in scheduled job: eguage api call ', err);
            return callback(err);
        } else {
            mDataLoad.processAndLoadCsvFile(data, function(err, result){ //processes different file, add a dynamic file name arg
                err && console.log('Error in scheduled job: eguage data processing ', err);
                return callback(err, result);
            });
        }

    });
}

var Runner = module.exports = function Runner() {
};

Runner.prototype.run = function(dataSourceId, callback) {

    var sequence = new Orchestrator();

    sequence.add('download', function(cb) {
        console.log('In ETL Job: download csv file');
        download.getCsvFile(function(err, data){
            console.log("File download", data);
            cb(err, data);
        });
    });

    sequence.add('process-and-load', ['download'], function(cb) {
        console.log('In ETL Job: csv to json conversion and load to timeseries db');
        transformLoad.processAndLoadCsvFile( 'filename-here.json', function(err, data){
            cb(err, data);
        });

    });

    sequence.start([
        'download',
        'process-and-load'
        ], 
        function(err){
            callback(err);
    })

};


