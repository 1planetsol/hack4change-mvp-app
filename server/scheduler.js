const _ = require('lodash');
const config = require('config');
const CronJob = require('cron').CronJob;
const etlJob = require('./scheduled-jobs/egauge-source'); //update
// const Agenda = require('agenda');


exports.initializeScheduler = function () {
    var egaugeDataJob = new CronJob({
        cronTime: '0 30 5 * * *',
        onTick: function(){
            console.log('Starting egaugeDataJob');

            //ETL job (without saving run info in mongo, can add later)
            etlJob.getData(function(err, result){
                if(err){
                    console.error(['etl'], err);
                }
                console.log('Finished ETL egaugeDataJob');
            });
        }, 
        start: false,
        timeZone: 'America/Detroit'
    });

    egaugeDataJob.start();
    console.log('Job scheduler initiated.');
};


/* 
//Agenda code - scheduling alternative, more complex but better control and info on past jobs

const agenda = new Agenda({
    db: {
        // address: 'mongodb://'+config.get('database.username')+":"+config.get('database.password')+"@"+config.get('database.url')+'/dbnamehere?authSource=admin'
        address: 'mongodb://localhost:27017/planetsol' //upgrade to auth based connection
    },
    maxConcurrency: 1,
    defaultLockLifetime: 60000 //1 hour
});

agenda.on('error', function(err){
    console.error('Agenda error ', err);
});

agenda.on('ready', function(){
    console.log('Agenda jobs scheduler is ready');

    // agenda.every('30 10 * * *', 'daily feed');
    agenda.every('10 minutes', 'daily feed'); //check format, human readable vs cron (for using timestamps)
    agenda.start();
});

const ProcessRecentFeed = function(){
    getRecentFeed.processFeed(function(err, result){
        if(err){
            console.error('Agenda job: daily feed ', err);
        } else {
            console.log('Finished job: ', result);
        }
    })
};

agenda.define('daily feed', ProcessRecentFeed);

*/
