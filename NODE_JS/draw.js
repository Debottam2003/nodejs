let draw = require('figlet');
draw("Sritama weds Debangsu",(err,data)=>{
    if(err){
        console.log("something went wrong");
        console.err(err);
    }
    else{
        console.log(data)
    }
})