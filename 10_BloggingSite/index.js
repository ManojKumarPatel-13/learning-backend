import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";

import { Blog } from "./models/blog.js"
import { checkForAuthenticationCookie } from "./middlewares/authentication.js";

import { router as userRoute } from "./routes/user.js"
import { router as blogRoute } from "./routes/blog.js"

const app = express();
const PORT = 8001;

mongoose.connect("mongodb://localhost:27017/blogsApp")
    .then(e => console.log("MongoDB Connected"))

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'))
app.use(express.static(path.resolve("./public")))

app.get('/', async (req, res) => {
    const allBlogs = await Blog.find({})
    res.render("home", {
        user: req.user,
        blogs: allBlogs
    })
})

app.use("/user", userRoute)
app.use("/blog", blogRoute)

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))