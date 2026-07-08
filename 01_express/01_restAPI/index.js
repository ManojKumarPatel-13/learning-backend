const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs")

const app = express(); // creating a instance of express
const PORT = 3000;

// Middleware 
app.use(express.urlencoded({ extended: false }));

// HTML Render 
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li> ${user.first_name} </li>`).join("")}
    </ul>
    `
    res.send(html);
})

// Routes
app
    .route("/api/users")
    .get((req, res) => {
        return res.json(users);
    })
    .post((req, res) => {
        const body = req.body;
        users.push({ ...body, id: users.length + 1 })
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            return res.json({ satatus: "success", id: users.length });
        })
    })

app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .put((req, res) => {
        const id = Number(req.params.id);
        
        return res.json({ satatus: "pending" });
    })
    .patch((req, res) => {
        // TODO: Update a user
        return res.json({ satatus: "pending" });
    })
    .delete((req, res) => {
        // TODO: Delete a user
        return res.json({ satatus: "pending" });
    })

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
})