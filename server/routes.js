const Ops = require('./controllers/ops');

exports.endpoints = [
    { method: 'GET',   path: '/ops/ping', config: Ops.ping },
    { method: 'GET',   path: '/ops/status', config: Ops.status }
];
