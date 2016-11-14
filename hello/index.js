var hello = {
	name : "neo",
	age : 20,
	setName(newname){
		this.name = newname;
	},
	sayHello(){
		console.log(`Hello ${this.name}`);
	},
	getProp(){
		let name = this.name;
		let age = this.age;
		return { name,age } ;
	},
};
module.exports = hello;
