var Boom = require('boom');
var Joi = require('joi');
var DataLoad = require('../services/data-load.js');

var internals = {};

exports.staticFile = {
    tags: ['api'],
    validate: {
        query: Joi.object({
            userId: Joi.number().required()
        }).unknown()
    },
    handler : function(request, reply) {
        DataLoad.processAndLoadCsvFile(request.query.userId, function(err, result){
            if(err){
                return reply('unsuccessful').code(404);
            } else {
                return reply(result).code(200);
            }
            
        })

    }
};
