let buffer = Buffer.from("hello world");
console.log(buffer); // Output: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buffer.toString('utf8')); // Output: hello world
console.log(buffer.toString('hex')); // Output: 68656c6c6f20776f726c64

for (let i of buffer) {
    console.log(i);
} 

let arrayBuffer = new ArrayBuffer(16);
console.log(arrayBuffer); // Output: ArrayBuffer { byteLength: 16 }
let view = new Uint8Array(arrayBuffer);

view[0] = 1;
view[1] = 2;

console.log(view); // Output: Uint8Array(16) [ 1, 2 ]

for (let i of view) {
    console.log(i); // Output: 1, 2 
}   
console.log(view.buffer); // Output: ArrayBuffer { byteLength: 16 }
console.log(view.byteLength); // Output: 16
