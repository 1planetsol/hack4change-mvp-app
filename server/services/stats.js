// const config = require('config');
var Influx = require('influx');
//Next major version //Breaking Changes
// var influx = new Influx.InfluxDB({
//     host : "localhost",
//     port : 8086,
//     username : '',
//     password : '',
//     database : 'sol_time_series_stats',
//     schema: [
//         {
//             measurement: '',
//             fields: {
//                 value: Influx.FieldType.FLOAT
//             },
//             tags: [
//                 'userID'
//             ]
//         }
//     ]
// });

// var client = Influx({
//     host : "localhost",
//     port : 8086,
//     username : '',
//     password : '',
//     database : 'sol_time_series_stats'
// });

var influx = new Influx.InfluxDB({
 host: 'localhost',
 port: 8086,
 database: 'sol_time_series_stats',
 schema: [
   {
     measurement: 'energy-generated',
     fields: {
       value: Influx.FieldType.FLOAT
     },
     tags: [
       'userId'
     ]
   }
 ]
})

//curl -i -XPOST 'http://localhost:8086/write?db=mydb' --data-binary 
//measurement,tagkey=tagval,tagkey=tagval fieldkey=fieldval timestamp
//'cpu_load_short,host=server01,region=us-west value=0.64 1434055562000000000'
exports.writePoint = function(series, values, tags, timestamp) {
//CHECK series vs measurement. Checkout queries on graphana
    console.log('Writing stats to InfluxDB');
    console.log(' - series: '+series);
    console.log(' - values: '+values);
    console.log(' - tags: '+JSON.stringify(tags));
    console.log(' - timestamp: '+timestamp); //Convert file's timestamp field to an ISO format
    // console.log(' - tags  : '+JSON.stringify(tags));

    client.writePoint(series, values, tags, timestamp, function(err){
        err && console.error('InfluxDB: '+err);
    });
};

exports.searchMeasurements = function(queryString, callback){
    console.log('query is ', queryString, influx);

    // influx.getDatabaseNames()
    //   .then(function(names){
    //     console.log('databases found ', names);
    //   })
    
    console.log('.......query running........');
    influx.queryRaw('select * from "energy-generated" ').then(rawData => {
      console.log(rawData.results[0])
      callback(rawData)
    })
}

//TODO run influx server, connect to graphana for testing series/ measurements
