const http = require("http"),
      path = require("path"),
      util = require("util"),
      fs = require("fs"),
      net = require("net");
let agent = new http.Agent({
    keepAlive:true,
    maxSockets : 100,
    maxFreeSockets :100
});

let options = {
    hostname:"localhost",
    port:3000,
    path:"/"
};
options.agent = agent;
http.request(options,()=>{
    console.log(this)
});
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("OK");
}).listen(3000);

