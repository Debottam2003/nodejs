let arr = [7, 8, 9, 2, 3, 5, 13, 10, 21, 11];
const n = arr.length - 1;
for(let i = 0; i < arr.length / 2; i++){
    let temp = arr[i];
    arr[i] = arr[n - i];
    arr[n - i] = temp;
}
console.log(arr);
arr.sort((a, b)=> a - b);
console.log(arr);
