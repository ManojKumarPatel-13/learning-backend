const express = require("express") // importing express module just installed

const app = express(); // initializing app with express

app.get("/", (req, res) => {
    return res.send("Hello from Home page")
}) // this is a basic routing 

// how basic routing is done
// app.method(path, handler)
// app is an instance of express
// method is a http request methond in lowercase
// path is path on server
// handler is the function executed when the route is matched

app.get("/about", (req, res) => {
    return res.send(`Hello from About page, hey! ${req.query.name}`)
}) // we no longer need to import url module express handle it on itself

app.listen(3000, () => console.log("Server started")) // express also handle the tasks done by http module creates a port runs the
// server on that port and run the callback with it 