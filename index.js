var moment = module.exports = require("./moment-timezone");
moment.tz.load(require('!json-loader!./data/packed/latest.json'));
