function hello(){
    this.name = "";
    this.setName=(newname)=>{
        this.name = newname;
    };
    this.sayHello=()=>{
        let name = this.name;
        console.log('Hello ${name}');
    };
    return this;
}
module.exports = hello;
