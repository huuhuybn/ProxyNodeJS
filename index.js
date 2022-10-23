var url = require('url');
var http = require('https');
const fs = require("fs");
const {HttpsProxyAgent} = require("https-proxy-agent");


// let axios = require('axios');
// axios.get({
//     maxRedirects: 0,
//     url: 'https://api.ipify.org?format=json',
//     method: 'GET',
//     proxy: {
//         protocol: 'http',
//         host: 'msgn.foxproxy.net',
//         port: 20007,
//         auth: {
//             username: 'huuhuybn',
//             password: 'Saolaithe12#'
//         }
//     },
// }).then(r =>  console.log(r)).catch(e => {
//     console.log(e)
// })


// HTTP/HTTPS proxy to connect to
var proxy = 'http://huuhuybn:Saolaithe12#@msgn.foxproxy.net:20007';
console.log('using proxy server %j', proxy);

// HTTP endpoint for the proxy to connect to
var endpoint = process.argv[2] || 'https://api.ipify.org?format=json';
console.log('attempting to GET %j', endpoint);
var opts = url.parse(endpoint);

// create an instance of the `HttpProxyAgent` class with the proxy server information
var agent = new HttpProxyAgent(proxy);
//console.log('Basic ' + new Buffer('huuhuybn:Saolaithe12#').toString('base64'))
opts.agent = agent;
opts.headers = {
    'Proxy-Authorization': 'Basic ' + 'aHV1aHV5Ym46U2FvbGFpdGhlMTIj',
    'proxy-authenticate': 'Basic ' + 'aHV1aHV5Ym46U2FvbGFpdGhlMTIj',
    'Authorization': 'Basic ' + 'aHV1aHV5Ym46U2FvbGFpdGhlMTIj',
    'WWW-Authenticate': 'Basic ' + 'aHV1aHV5Ym46U2FvbGFpdGhlMTIj'
}
opts.cert = fs.readFileSync("./public/ca-certificates.crt")
http.get(opts, function (res) {
    console.log('ABC : ')
    console.log(res.headers);
    res.pipe(process.stdout);
});

