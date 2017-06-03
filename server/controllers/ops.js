var Boom = require('boom');
var Joi = require('joi');
var package = require('../../package.json');

var internals = {};

exports.ping = {
    tags: ['api'],
    handler : function(request, reply) {
        return reply('OK').code(200);
    }
};

exports.status = {
    tags: ['api'],
    handler : function(request, reply) {
        var info = {
            status:   'OK',
            pid:      process.pid,
            app:      process.title,
            host:     process.env.SMF_ZONENAME,
            uptime:   process.uptime(),
            name:     package.name,
            version:  package.version
        };
        return reply(info).code(200);
    }
};
