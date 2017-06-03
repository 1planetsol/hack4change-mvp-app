const Ops = require('./controllers/ops');
const DataLoad = require('./controllers/data-load.js');

exports.endpoints = [
    { method: 'GET',   path: '/ops/ping', config: Ops.ping },
    { method: 'GET',   path: '/ops/status', config: Ops.status },
    { method: 'GET',   path: '/load/static', config: DataLoad.staticFile },

];
