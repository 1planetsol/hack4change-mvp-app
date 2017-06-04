var Boom = require('boom');
var Joi = require('joi');
var Query = require('../services/aggregations.js');

var internals = {};

//enhancement: REFACTOR for single GET route to handle multiple cases using PARAMS

exports.findAllEnergyGenerated = {
    tags: ['api'],
    handler : function(request, reply) {
        Query.findAllEnergyGenerated(function(err, result){
            if(err){
                return reply('unsuccessful').code(404);
            } else {
                return reply(result)
            }
            
        })

    }
};

exports.findAllPowerGenerated = {
    tags: ['api'],
    handler : function(request, reply) {
        Query.findAllPowerGenerated(function(err, result){
            if(err){
                return reply('unsuccessful').code(404);
            } else {
                return reply(result)
            }
            
        })

    }
};

exports.findAllGridEnergy = {
    tags: ['api'],
    handler : function(request, reply) {
        Query.findAllGridEnergy(function(err, result){
            if(err){
                return reply('unsuccessful').code(404);
            } else {
                return reply(result)
            }
            
        })

    }
};

exports.findAllEnergyUsed = {
    tags: ['api'],
    handler : function(request, reply) {
        Query.findAllEnergyUsed(function(err, result){
            if(err){
                return reply('unsuccessful').code(404);
            } else {
                return reply(result)
            }
            
        })

    }
};

exports.findAllPowerUsed = {
    tags: ['api'],
    handler : function(request, reply) {
        Query.findAllPowerUsed(function(err, result){
            if(err){
                return reply('unsuccessful').code(404);
            } else {
                return reply(result)
            }
            
        })

    }
};

exports.findAllGridPower = {
    tags: ['api'],
    handler : function(request, reply) {
        Query.findAllGridPower(function(err, result){
            if(err){
                return reply('unsuccessful').code(404);
            } else {
                return reply(result)
            }
            
        })

    }
};
