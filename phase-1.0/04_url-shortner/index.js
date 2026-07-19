import express from "express";
import { router, router as urlRoute } from "./routes/url.js";
import { connectToMongoDB } from "./connect.js"
import { UrlModel } from "./models/url.js"

const app = express();
const PORT = 3001;

app.use(express.json())
app.use("/url", urlRoute)

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await UrlModel.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timestamp: Date.now() } } })
    res.redirect(entry.redirectUrl)
})

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
    .then(() => {
        console.log("MongoDB Connected Successfully");

        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.error("MongoDB Connection Failed:", err.message);
    });