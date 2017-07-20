const _ = require('lodash');
const config = require('config');
const Agenda = require('agenda');
const getRecentFeed = require('./scheduled-jobs/recent-feed');

const agenda = new Agenda({
    db: {
        address: 'mongodb://'+config.get('database.username')+":"+config.get('database.password')+"@"+config.get('database.url')+'/realestate?authSource=admin'
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

agenda.define('daily feed', ProcessDailyFeed);
