const lineReader = require('line-reader');
const fs = require('fs');
const path = require('path');
const os = require('os');
const async = require('async');
const _ = require('lodash');
const stats = require('./stats');

exports.processAndLoadCsvFile = function(cb){
    async.series([
        csvToJsonParser
        // jsonLoader
      ], function(err, result){
        err && console.error('Unable to complete the manual file load, reason:  ', err, ' and the partial result, if any: ', result);
        cb(err, result);
    });
}

csvToJsonParser = function(callback){
    var fileName = "LG1499_Power.csv" //hardcoded for testing (4 test files)
    var userId = 1499;
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

            if(fileName === 'LG1499_Power.csv' || 'LG1996_Power.csv'){
                //Power Unit
                  jsonLine['dateTime'] = lineItem[0];
                  jsonLine['usedKW'] = lineItem[1];
                  jsonLine['generationKW'] = lineItem[2];
                  jsonLine['GridKW'] = lineItem[3];

                  stats.writePoint('power-generated', {value: jsonLine['generationKW']}, {userId: userId}, jsonLine['dateTime']);
                  stats.writePoint('power-used', {value: jsonLine['usedKW']}, {userId: userId}, jsonLine['dateTime']);
                  stats.writePoint('grid-power', {value: jsonLine['GridKW']}, {userId: userId}, jsonLine['dateTime']);
            } else if(fileName === 'LG1499_Energy.csv' || 'LG1996_Energy.csv'){
                //Energy Unit
                  jsonLine['dateTime'] = lineItem[0];
                  jsonLine['usedKWH'] = lineItem[1];
                  jsonLine['generationKWH'] = lineItem[2];
                  jsonLine['GridKWH'] = lineItem[3];

                  stats.writePoint('energy-generated', {value: jsonLine['generationKWH']}, {userId: userId}, jsonLine['dateTime']);
                  stats.writePoint('energy-used', {value: jsonLine['usedKWH']}, {userId: userId}, jsonLine['dateTime']);
                  stats.writePoint('grid-energy', {value: jsonLine['GridKWH']}, {userId: userId}, jsonLine['dateTime']);
            }

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

// function jsonLoader(callback){


//     lineReader.eachLine(rs, function(line, last){
//         //write stats
//         stats.writePoint('energy-generated', {value:1, query: request.query, error: err});
//         stats.writePoint('energy-used', {value:1, query: request.query, error: err});
//         if(last){
//             console.log('reached end of file');
//         }
//     },
//     function(err){
//             if(err){
//                 console.error(err);
//             }
//             callback(err, 'File Load Complete');
//     });

//   // lineItem.forEach(function(item, index){
//   //                   jsonLine[firstLine[index]] = item;
//   // });
//   // if(fileName === 'LG1499_Power.formatted.csv' || 'LG_1499_Power.formatted.csv'){
//   //     //Power Unit

//   // } else if(fileName === 'LG1996_Energy.formatted.csv' || 'LG_1996_Energy.formatted.csv'){
//   //     //Energy Unit
//   // }
// }

