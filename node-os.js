const os = require('os');
const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime(),
  homeDirectory: os.homedir(),
  ramHostname: os.hostname(),
  myMacAddressAndIPaddress: os.networkInterfaces(),
};

console.log(server);

// to execute code write in terminal node app.js
