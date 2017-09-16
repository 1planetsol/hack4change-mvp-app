var Boom = require('boom');
var Joi = require('joi');
var DataSearch = require('../services/data-show.js');

var internals = {};

exports.getStats = {
    tags: ['api'],
    validate: {
        query: Joi.object({
            timePeriod: Joi.string().required()
            //possible values = 'day', 'hour'
        }).unknown()
    },
    handler : function(request, reply) {

        if(request.query.timePeriod === 'day'){

            DataSearch.getPreviousDayStats(function(err, result){
                if(err){
                    return reply('unsuccessful').code(404);
                } else {
                    var finalResult = JSON.stringify(result); //check
                    return reply(finalResult).code(200);
                }
                
            })
        } else {

            DataSearch.getPreviousHourStats(function(err, result){
                if(err){
                    return reply('unsuccessful').code(404);
                } else {
                    return reply(result).code(200);
                }
                
            })
        }

    }
};
