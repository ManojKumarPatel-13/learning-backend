const add = (a, b) => a + b
const subt = (a, b) => a - b

// exporting the function 

// module.exports = "exporting a string" // when done this it just export the given string 

// module.exports = add // so this exports the function now 
// module.exports = subt // so this will export subt function

// but exporting above will just export subt not the first one

// to export multiple things we can use object 
module.exports = {
    addFn: add,
    subFn: subt
}

// exports both the funciton with name addFn and subFn