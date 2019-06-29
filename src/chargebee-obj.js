const chargebee = require("chargebee");
const conf = require('../env/keys');

chargebee.configure(conf);
module.exports = chargebee
