const http = require("http"),
      path = require("path"),
      util = require("util"),
      fs   = require("fs"),
	  url  = require("url"),
      net  = require("net"),
	  cfg  = require("./config")();

http.createServer((req,res) => {
	let pathname = url.parse(req.url).pathname;
	console.log(`Request for ${pathname} received.`);
	if(!pathname.substr(1)){
		pathname = pathname + "home.html";
	}
	fs.readFile(pathname.substr(1),'utf-8',(err,data) => {
		if(err){
			console.log(err);
			res.writeHead(404,{"Content-Type" : "text/html"});
		}else{
			console.log(data);
			res.writeHead(200,{"Content-Type" : "text/html"});
			res.write(data.toString());
		}
		res.end();
	});
}).listen(cfg.port);

/*let agent = new http.Agent({
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
}).listen(3000);*/

