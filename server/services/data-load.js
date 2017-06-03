//Manually Run services to load static, historic data into influx db
const parse = require('csv-parse');
const async = require('async');
const os = require('os');
const path = require('path');


exports.processStaticFile = function(fileName, callback){
    var fileName = fileName || 'LG_1499_Power.csv';
    //async series to convert the file and load into influx database
    var csvFile = path.join(os.tmpdir(), fileName); //path to downloaded file
    var parts = fileName.split('.');
    var jsonFile = path.join(os.tmpdir(), parts[0] + '.json');; //path to parsed json file

    async.series([
        function csvToJsonParser(cb){
          //TODO where is file specified??
          //^^ CSV data is sent through the write function and the 
          //resulting data is obtained within the "readable" event by calling the read function.

          //ALTERNATIVE is a PIPE implementation
          require('should'); //CHECK

          var output = [];
          // Create the parser
          var parser = parse({delimiter: ':'});
          // Use the writable stream api
          parser.on('readable', function(){
            while(record = parser.read()){
              output.push(record);
            }
          });
          // Catch any error
          parser.on('error', function(err){
            console.log(err.message);
          });
          // When we are done, test that the parsed output matched what expected
          parser.on('finish', function(){
            output.should.eql([
              [ 'root','x','0','0','root','/root','/bin/bash' ],
              [ 'someone','x','1022','1022','a funny cat','/home/someone','/bin/bash' ]
            ]);
          });
          // Now that setup is done, write data to the stream
          parser.write("root:x:0:0:root:/root:/bin/bash\n");
          parser.write("someone:x:1022:1022:a funny cat:/home/someone:/bin/bash\n");
          // Close the readable stream
          parser.end();

          //TO Have to also save the object in a file (json)
        },
        //PENDING SERVICE for jsonFile
        // function jsonLoader(cb){
        //   //Loop over the file or stream it and call the stats service
        //   //cb(err, 'json ok');
        // }

      ], function(err, result){
        err && console.error('Unable to complete the manual file load, reason:  ', err, ' and the partial result, if any: ', result);
        callback(err, result);
    });

}
