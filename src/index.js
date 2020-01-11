import "./styles.css";

const quotes = [
  { name: "Mae", quote: "I know you are going to check my code" },
  {
    name: "my fat cat",
    quote: "Someone in this world is odering chesseburger"
  },
  { name: "Tim Uncook", quote: "new iphone is coming in 2020" },
  { name: "Santa", quote: "we are going to have 12 months in this year" },
  { name: "Santa", quote: "we are going to have 12 months in this year" }
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
