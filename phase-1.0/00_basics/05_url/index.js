// copy pasted the code from http

const http = require("http");
const fs = require("fs");
const url = require("url") // imported the url from npm i url

const myServer = http.createServer((req, res) => {
    if (req.url == "/favicon.ico") return res.end();

    const log = `${Date.now()} ${req.url} New req recieved\n`
    const myUrl = url.parse(req.url, true) // breaks down the url and make a object and stores it on myUrl
    // when passing true it means we also want querry parrameters which is the main reason we imported this module
    console.log(myUrl); // logging the object

    fs.appendFile('log.txt', log, () => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Home Page")
                break;
            case "/about":
                const username = myUrl.query.myName
                res.end(`Hii, ${username}`)
                break;
            case "/contact-me":
                res.end("Call me on 9131542645456")
                break;
            default:
                res.end("404 Not Found")
        }
    })
});

myServer.listen(3000, () => {
    console.log("Server started");
}); 