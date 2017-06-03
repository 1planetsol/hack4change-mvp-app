var Boom = require('boom');
var Joi = require('joi');
var DataLoad = require('../services/data-load.js');

var internals = {};

exports.staticFile = {
    tags: ['api'],
    handler : function(request, reply) {
        DataLoad.processStaticFile(function(err, result){
            if(err){
                return reply('unsuccessful').code(404);
            } else {
                return reply(result).code(200);
            }
            
        })

    }
};
