const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

//Get fortune
app.get("/api/fortunes", (req, res) => {
  const fortunes = ["Follow the middle path. Neither extreme will make you happy",
"Fortune Not Found: Abort, Retry, Ignore?",
"Go take a rest, you deserve it.",
"How many of you believe in psychokinesis? Raise my hand.",
"What's that in your eye? Oh, it's a sparkle!",
"You can't steal second base and keep your foot on first.",
"Your happiness is before you, not behind you. Cherish it.",
"Your loyalty is a virtue, but not when it's wedded to blind stubbornness.",
"Your reputation is your wealth.",
"Your ideals are well within your reach."
];

let someIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[someIndex];

res.status(200).send(randomFortune);
})

//Get animal noise
app.get("/api/animal", (req, res) => {
  const animalSounds = ["Moo!", "Meow!", "Woof!", "Ribbit!", "Neigh!", "Baa!", "Oink!", "Cluck!"];

  let animalIndex = Math.floor(Math.random() * animalSounds.length);
  let randomNoise = animalSounds[animalIndex];

  res.status(200).send(randomNoise);

})

//Add favorite inspirational quote
const quotes = [];

app.post("/api/quote", (req, res) => {
  quotes.push(req.body.addQuote)
  res.status(200).send(quotes)
})


//Edit inspirational quote
app.put("/api/quote", (req, res) => {
  
})

//Delete inspirational quote
app.delete ("/api/quote", (req, res) => {

})






app.listen(4000, () => console.log("Server running on 4000"));
