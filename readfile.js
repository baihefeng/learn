const fs = require('fs');

fs.readFile("README.md","utf-8",(err,data)=>{
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
console.log("end");
