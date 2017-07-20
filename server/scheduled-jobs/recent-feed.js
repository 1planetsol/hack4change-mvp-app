const eguageApi = require('../services/aggregations');
const DataLoad = require('../services/data-load.js');

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
