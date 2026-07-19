const express = require("express");
const path = require('path')
const cookieParser = require('cookie-parser')

const { connectToMongoDB } = require('./connect')
const URL = require('./models/url');
const { restrictToLoggedinUserOnly, checkAuth } = require('./middlewares/auth')

const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRoute')
const userRoute = require('./routes/user')

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
  .then(() => console.log("MongoDB connected"))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// middlewares
app.use("/url", restrictToLoggedinUserOnly, urlRoute)
app.use("/", checkAuth, staticRoute)
app.use("/user", userRoute)


app.get('/test', async (req, res) => {
  const allUrls = await URL.find({});

  return res.render('home', {
    urls: allUrls,
  })
})

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId: shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server running on : localhost://${PORT}`))