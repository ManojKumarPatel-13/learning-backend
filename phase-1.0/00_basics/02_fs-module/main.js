const fs = require("fs") // fs -> file system
const { text } = require("stream/consumers")

// to create file we use writeFile fucntion and writeFileSync function the normal one executes asynchronously 
// we will discuss about all of this more later
// Sync..
fs.writeFileSync("./text.txt", "Just creating a file to learn fs module in node\n")

// Async...
fs.writeFile("./text.txt", "Just creating a file asynchronously\n", (err) => err) // this will over write the above line 

// to read we use readFile and readFileAsync

// Sync...
// const readInfo = fs.readFileSync("./text.txt", "utf-8") // asks for path and ecnoding type for simple txt we use utf-8
// console.log(readInfo)

// this will print a empty line because of the concept of blocking and non blocking request will be discussed later 
// also when commented the asyn one it will log the line added on the first line
const newReadInfo = fs.readFileSync("./test.txt", "utf-8")
console.log(newReadInfo); // this will print the text inside test.txt

// Async...
fs.readFile("./test.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err)
        return;
    } else {
        console.log(result)
    }
})
// not returns anything expects a call back function with arguments err, result 
// this will work if readed text.txt here will talk about later 

// now till now learnt about making a new file and reading it now will learn about appending it 
// append add the text given at the end of file

// Sync...
fs.appendFileSync("./text.txt", "Appended txt sync\n")
// for a new line can use \n at the end of txt input given

// Async...
fs.appendFile("./text.txt", "Appended txt async\n", (err) => err)

// there are many more functions and methods you can use read it online you can creat folders file delete them write on them copy 
// them cut them and a lot of other file handaling tasks