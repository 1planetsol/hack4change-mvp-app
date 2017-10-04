const os = require('os');
const fs = require('fs');
const path = require('path');
const request = require("request");


exports.getFile = function(sourceId, callback) {

    var outFilename = "12hours_" + sourceId + "_Energy.csv";
    var sourceUrl =  "http://lg" + sourceId + ".d.lighthousesolar.com/cgi-bin/egauge-show?a&n=97200&S&s=0&c";


    var output = path.join(os.tmpdir(), outFilename);
    var outStream = fs.createWriteStream(output);

    outStream.on('error', function(err) {
        console.log('Download error: ' + output);
        callback(err);
    });

    request.get(params.url)
        .on('error', function(err) {
            console.log(err)
        })
        .pipe(outStream);


    console.log('Starting file download');
};
