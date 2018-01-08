const express = require('express');
const router = express.Router();



let jokes = [
    {
        whoseJoke: "Danny",
        jokeQuestion: "Why do scuba divers fall backwards out of boats?",
        punchLine: "If they fell forwards they’d still be in the boat!"
    },
    {
        whoseJoke: "Luke",
        jokeQuestion: "Twofish are in a tank. What did one fish say to the other?",
        punchLine: "Do you know how to drive this thing?"
    },
    {
        whoseJoke: "Millie",
        jokeQuestion: "What do you call a pile of cats?",
        punchLine: "A meowntain!"
    },
    {
        whoseJoke: "dEv",
        jokeQuestion: "Why should you not play cards in the forest?",
        punchLine: "Too many Cheetahs!"
    },
    {
        whoseJoke: "Scott",
        jokeQuestion: "I went to the zoo the other day, it had one dog...",
        punchLine: "It was a shih tzu."
    }
];

router.get('/', (req, res) => {
    res.send(jokes);
});

router.post('/', (req, res) => {
    console.log('req.body: ', req.body);
    jokes.push(req.body);

    res.sendStatus(201);
});

module.exports = router;