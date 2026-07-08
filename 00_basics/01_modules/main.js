console.log("learning moduler programming")

// moduler programming is nothing just dividing the code base in many small modules 
// here splitting the code in two modules one main and one math math have all mathematical functions just for example

// now when splitted we need to access the code in the other module we can't directly access them we need to use require or 
// import methods require is used in common js whereas import is used in moduler js 

// const math = require("math") // using this will through a module not found error 
const math = require("./math") // so must use ./ which represents current directory also note we are not typing math.js 
// you can type but not needed 

// now using the accessed code 
console.log(math) // gives {} empty object because we tried to import from math but math not export anything so we need to 
// export them there 
console.log(math.addFn(2,4))
// when math exports just add funciton the output of logging just math is [function: add]

// require function is just there in node.js

// now node js has many built in modules like http and fs and crypto and many others
// when we directly pass the name to the module without ./ in require function it searches the built in modules of node

// for example 

const fileModule = require("fs")
console.log(fileModule); // this will print a object with a hell lot of properties and methods

