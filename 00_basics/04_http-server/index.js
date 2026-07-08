// it is the main file and it is a good approach to name the main file (index.js)

const http = require("http"); // import built in module http to our indedx.js
const fs = require("fs"); // import fs module 
// becuase we are going to log all the incoming request on a file now

const myServer = http.createServer((req, res) => {
    // console.log("New req recieved"); // whenever a request is recived it is logged
    // console.log(req.headers); // headers method gives us the important details about our request
    const log = `${Date.now()} ${req.method} ${req.url} New req recieved\n` // here using date object to get date and url method of req to get 
    // path of the request we can use the req.url to send different response on different path using switch case
    fs.appendFile('log.txt', log, () => {
        switch(req.url){
            case "/":
                res.end("Home Page")
                break;
            case "/about":
                res.end("I am Manoj Kumar Patel")
                break;
            case "/contact-me":
                res.end("Call me on 9131542645456")
                break;
            case "/signup":
                if(req.method === "GET"){
                    res.end("This is a signup form")
                } else if(req.method === "POST"){
                    // DB Querry
                    rs.end("Success")
                }
            default:
                res.end("404 Not Found")
        }
    }) // whenever this is done we send our response that is why wrote in a callback function inside fs.appendfile
}); // creates a server using createServer() method
// createServer takes a requestListner callback function whcih listens the incoming request
// the callback function have two argument req(request) and res(response) which can be used accoding to there names

myServer.listen(3000, () => {
    console.log("Server started");
}); // now here the server listens at port 3000 and the listen method also takes a callback function 
// which is executed when server is started it also takes a port which we already gave

// point to be noted re start the server whenever you change something 