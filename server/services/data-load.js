const lineReader = require('line-reader');
const fs = require('fs');
const path = require('path');
const os = require('os');
const async = require('async');
const _ = require('lodash');
const stats = require('./stats');

exports.processAndLoadCsvFile = function(requestedUserId, cb){
    async.series([
        async.apply(csvToJsonParser, requestedUserId)
        // jsonLoader
      ], function(err, result){
        err && console.error('Unable to complete the manual file load, reason:  ', err, ' and the partial result, if any: ', result);
        cb(err, result);
    });
}

csvToJsonParser = function(requestedUserId, callback){
    var fileName = "12hours_" + requestedUserId + "_Energy.csv";
    // user Ids: 1009, 1236, 1498, 1499, 1654, 1996
    var userId = requestedUserId;
    const readPath = path.join('/tmp/', fileName);
    const parts = fileName.split('.');
    const rs = fs.createReadStream(readPath, { encoding: 'utf8'});
    const ws = fs.createWriteStream(path.join('/tmp/', parts[0]+'.formatted.json'));

    var firstLine = [];
    ws.write('[');
    lineReader.eachLine(rs, function(line, last){ //can also use a third param - a callback
        if(line.startsWith('Date')){
          console.log('>> first line');

            firstLine = line.split('\n');
            //Need the description line?
        } 
        else {
            var lineItem = line.split(','),
                jsonLine = {};

            // TODO If power stats also needed, add logic back, only check for 'Power' part of filename, shorten logic
            // if(fileName === '12hours_1009_Power.csv' || '12hours_1236_Power.csv' || '12hours_1498_Power.csv' || '12hours_1499_Power.csv' || '12hours_1654_Power.csv' || '12hours_1996_Power.csv'){
            //     //Power Unit
            //       jsonLine['dateTime'] = lineItem[0];
            //       jsonLine['usedKW'] = lineItem[1];
            //       jsonLine['generationKW'] = lineItem[2];
            //       jsonLine['GridKW'] = lineItem[3];

            //       stats.writePoint('power-generated', {value: jsonLine['generationKW']}, {userId: userId}, jsonLine['dateTime']);
            //       stats.writePoint('power-used', {value: jsonLine['usedKW']}, {userId: userId}, jsonLine['dateTime']);
            //       stats.writePoint('grid-power', {value: jsonLine['GridKW']}, {userId: userId}, jsonLine['dateTime']);
            
            // } else if(fileName === '12hours_1009_Energy.csv' || '12hours_1236_Energy.csv' || '12hours_1498_Energy.csv' || '12hours_1499_Energy.csv' || '12hours_1654_Energy.csv' || '12hours_1996_Energy.csv'){
                //Energy Unit
                  jsonLine['dateTime'] = lineItem[0];
                  jsonLine['usedKWH'] = parseFloat(lineItem[1]);
                  jsonLine['generationKWH'] = parseFloat(lineItem[2]);
                  jsonLine['GridKWH'] = parseFloat(lineItem[3]);

                  stats.writePoint('energy-generated', {value: jsonLine['generationKWH']}, {userId: userId}, jsonLine['dateTime']);
                  stats.writePoint('energy-used', {value: jsonLine['usedKWH']}, {userId: userId}, jsonLine['dateTime']);
                  stats.writePoint('grid-energy', {value: jsonLine['GridKWH']}, {userId: userId}, jsonLine['dateTime']);
            // }

            if(last){
                console.log('reached end of file');
            }

            setInterval(function () {
            }, 4000);

        }
    },
    function(err){
            if(err){
                console.error(err);
            }
            ws.end('{}]');
            callback(err, 'File Parsing Complete');
    });
};
