const Ops = require('./controllers/ops');
const DataLoad = require('./controllers/data-load.js');
const Search = require('./controllers/aggregations.js');
const Data = require('./controllers/data-show.js');

exports.endpoints = [
    { method: 'GET',   path: '/ops/ping', config: Ops.ping },
    { method: 'GET',   path: '/ops/status', config: Ops.status },
    { method: 'GET',   path: '/load/static', config: DataLoad.staticFile },
    { method: 'GET',   path: '/data/getRecent', config: Data.getStats },
    //following endpoints are currently not in use
    // { method: 'GET',   path: '/search/findAllEnergyGenerated', config: Search.findAllEnergyGenerated },
    // { method: 'GET',   path: '/search/findAllPowerGenerated', config: Search.findAllPowerGenerated },
    // { method: 'GET',   path: '/search/findAllGridEnergy', config: Search.findAllGridEnergy },
    // { method: 'GET',   path: '/search/findAllEnergyUsed', config: Search.findAllEnergyUsed },
    // { method: 'GET',   path: '/search/findAllPowerUsed', config: Search.findAllPowerUsed },
    // { method: 'GET',   path: '/search/findAllGridPower', config: Search.findAllGridPower }
    //Other interesting stats //pending
    // { method: 'GET',   path: '/stats/treesPlanted', config: Search.treesPlanted },
    // { method: 'GET',   path: '/stats/milesDriven', config: Search.milesDriven },
    // { method: 'GET',   path: '/stats/co2offset', config: Search.milesDriven }
];
