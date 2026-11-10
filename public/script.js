
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("quoteBtn");

async function getQuote() {

    try {
        button.disabled = true;
        button.textContent = "Loading...";

        const response = await fetch("/api/quote");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quote.textContent = '"' + data.text + '"';
        author.textContent = "- " + data.author;

    } catch (error) {
        quote.textContent = "Unable to load quote. Please try again.";
        author.textContent = "";
        console.error(error);

    } finally {
        button.disabled = false;
        button.textContent = "New Quote";
    }
}

// Button click event
button.addEventListener("click", getQuote);
