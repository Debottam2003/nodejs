let arr = [1,2,3,4];
arr.forEach((val)=>{
    console.log(val);
});
let arrNew = arr.map((val)=>{
    return val + 12;
});
console.log(arrNew);
let filterarr = arr.filter((val)=>{
     if(val > 1 && val <= 3){
          return val;
     };
});
console.log(filterarr)
let findval = arr.find((val)=>{
    if(val === 3){
         return val;
    };
});
console.log(findval)
console.log(arr.indexOf(12));
const user = {
    username: "Rony",
    age: 21,
    cgpa: 8.45
}
console.log(user.username);
console.log(user["username"]);
Object.freeze(user);
//function is a object here and length of function is no of arguments
 