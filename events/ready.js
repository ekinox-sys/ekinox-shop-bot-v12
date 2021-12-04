const Discord = require("discord.js");
const config = require('../settings.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `ekin0xsh`}, status: 'IDLE' })
};

