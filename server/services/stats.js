const config = require('config');
const influx = require('influx');

var client = influx({
    host : config.get('influx.host'),
    port : config.get('influx.port'), // optional, default 8086
    username : '',
    password : '',
    database : 'sol_time_series_stats'
});

exports.writePoint = function(series, values, tags) {

    console.log('Writing stats to InfluxDB');
    console.log(' - series: '+series);
    console.log(' - values: '+JSON.stringify(values));
    console.log(' - tags  : '+JSON.stringify(tags));

    client.writePoint(series, values, tags, function(err){
        err && console.error('InfluxDB: '+err);
    });
};

// Current Data Format
