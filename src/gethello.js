const Hello = require("./hello"),
	path = require("path");
console.log(__dirname);
console.log(path.basename(__dirname));
//let _h = new Hello();
Hello.sayHello();

Hello.setName("neo.white");

Hello.sayHello();
console.log(Hello.getProp().name);