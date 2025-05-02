let fs = require("fs");
let prompt = require("prompt-sync");
let input = prompt();
let arr;
let data = fs.readFileSync("./todo.txt", "utf-8");
if (data === "") {
    arr = [];
}
else {
    arr = JSON.parse(data);
}

while (true) {
    console.log("To-Do List 1.NEW ACTIVITY    2.DELETE ACTIVITY    3.SHOW ACTIVITY   4.Exit  :->");
    let choice = Number(input("Enter choice: "));

    if (arr.length === 0 && (choice === 2 || choice === 3)) {
        console.log("List is empty");
        continue;
    }

    switch (choice) {
        case 1:
            let title = input("Enter Title Of activity : ");
            let content = input("Enter your activity : ");
            arr.push({ title, content });
            break;
        case 2:
            arr.shift();
            break;
        case 3:
            arr.forEach((ele) => {
                console.table(ele);
            });
            break;
        case 4: break;
        default: console.log("Invalid Choice");
    }

    if (choice === 4) {
        console.log("Thank you !\nExiting....");
        break;
    }
}
let str = JSON.stringify(arr);
fs.writeFileSync("./todo.txt", str, "utf-8");