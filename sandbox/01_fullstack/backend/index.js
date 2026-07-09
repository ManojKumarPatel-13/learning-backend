import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Server started")
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "Joke is a joke of the century 1"
        },
        {
            id: 2,
            title: "Joke 2",
            content: "Joke is a joke of the century 2"
        },
        {
            id: 3,
            title: "Joke 3",
            content: "Joke is a joke of the century 3"
        },
        {
            id: 4,
            title: "Joke 4",
            content: "Joke is a joke of the century 4"
        },
        {
            id: 5,
            title: "Joke 5",
            content: "Joke is a joke of the century 5"
        },
        {
            id: 6,
            title: "Joke 6",
            content: "Joke is a joke of the century 6"
        }
    ]

    res.send(jokes)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serve at http://localhost:${PORT}`)
})