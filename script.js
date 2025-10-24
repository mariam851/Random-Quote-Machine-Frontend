const text = document.getElementById("text");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");

const quotes = [
  { quote: "Start where you are. Use what you have. Do what you can.", author: "- Arthur Ashe" },
  { quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", author: "- Sheryl Sandberg" },
  { quote: "Every child is an artist. The problem is how to remain an artist once he grows up.", author: "- Pablo Picasso" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "- Confucius" },
  { quote: "Nothing is impossible, the word itself says, 'I’m possible!'", author: "- Audrey Hepburn" },
  { quote: "Life is what happens to you while you’re busy making other plans.", author: "- John Lennon" },
  { quote: "Change your thoughts and you change your world.", author: "- Norman Vincent Peale" },
  { quote: "The best revenge is massive success.", author: "- Frank Sinatra" }
];

function displayQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  text.textContent = randomQuote.quote;
  author.textContent = randomQuote.author;
}

newQuote.addEventListener("click", displayQuotes);
