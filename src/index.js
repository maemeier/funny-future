import "./styles.css";

const quotes = [
  { name: "Mae", quote: "I know you are going to check my code" },
  {
    name: "my fat cat",
    quote: "Someone in this world is odering chesseburger"
  },
  { name: "Tim Uncook", quote: "new iphone is coming in 2020" }
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#qoute");

quoteBtn.addEventListener("click", displayQuote);
function displayQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[random].name;
  quote.innerHTML = quotes[random].quote;
}
