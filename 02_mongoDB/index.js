import express from "express";
import mongoose, { Schema } from "mongoose";

const app = express(); // creating a instance of express
const PORT = 3000;

// connection
mongoose
    .connect("mongodb://127.0.0.1:27017/practiceDB")
    .then(() => console.log("Mongo DB connected"))
    .catch((err) => console.log(err))

// Schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    job_title: {
        type: String
    },
    gender: {
        type: String
    }
}, { timestamps: true })

const User = mongoose.model("user", userSchema);

// Middleware 
app.use(express.urlencoded({ extended: false }));

// HTML Render 
app.get("/users", async (req, res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers.map(user => `<li> ${user.first_name} - ${user.email} </li>`).join("")}
    </ul>
    `
    res.send(html);
})

// Routes
app
    .route("/api/users")
    .get(async (req, res) => {
        const allDbUsers = await User.find({});
        return res.json(allDbUsers);
    })
    .post(async (req, res) => {
        const body = req.body;
        if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
            return res.status(400).json({ msg: "All fields are req..." });
        }

        const result = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title
        })

        console.log(result)

        return res.status(201).json({ msg: "success" })
    })

app
    .route("/api/users/:id")
    .get(async (req, res) => {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ error: "user not found" })
        return res.json(user);
    })
//     .put((req, res) => {
//         const id = Number(req.params.id);

//         return res.json({ satatus: "pending" });
//     })
//     .patch((req, res) => {
//         // TODO: Update a user // findByIdAndUpdte
//         return res.json({ satatus: "pending" });
//     })
//     .delete((req, res) => {
//         // TODO: Delete a user // findByIdAndDelete
//         return res.json({ satatus: "pending" });
//     })

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
})