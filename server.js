
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Preset quotes
const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text: "Believe in yourself and all that you are.",
        author: "Christian D. Larson"
    },
    {
        text: "Every moment is a fresh beginning.",
        author: "T.S. Eliot"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    }
];

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Random quote API
app.get("/api/quote", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    res.json(quotes[randomIndex]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
