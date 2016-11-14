const Hello = require("./hello");
//let _h = new Hello();
Hello.sayHello();

Hello.setName("neo.white");

Hello.sayHello();
console.log(Hello.getProp().name);