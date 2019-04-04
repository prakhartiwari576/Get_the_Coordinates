const yargs = require('yargs');
const request = require('request');

const argv = yargs.argv;
var city= argv._[0];

request({
  url:'https://api.mapbox.com/geocoding/v5/mapbox.places/address='+city+'.json?access_token=pk.eyJ1IjoicHJha2hhcnRpd2FyaTU3NiIsImEiOiJjanUxZnR5aHowMTY1NDNxY2drMWQyN3NvIn0.ss7pYnTlsLBdy8MHd7lcPw',
  json:true
},(error,response,body)=>{
  console.log(JSON.stringify(body,undefined,2));
});
