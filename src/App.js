import React, { useState, useEffect } from "react";
import "./App.css";

const quotesUrl = "https://api.quotable.io/random";

function changeColor() {
    const randomColor = require("randomcolor")();
    document.body.style.backgroundColor = randomColor;
    document.body.style.color = randomColor;
    document.getElementById("tweet-quote").style.backgroundColor = randomColor;
    document.getElementById("new-quote").style.backgroundColor = randomColor;
}

function App() {
    const [quote, setQuote] = useState(() => getQuote());
    const [author, setAuthor] = useState("");

    function getQuote() {
        fetch(quotesUrl)
        .then((response) => response.json())
        .then((data) => {
            setQuote(data.content);
            setAuthor(data.author);
        });
    }

    function loadQuote() {
        getQuote();
        changeColor();
    }

    useEffect(() => changeColor());

    return (
        <div className="App">
            <div id="quote-box">
                <div className="quote-text">
                    <div id="text">{quote}</div>
                    <div id="author">- {author}</div>
                </div>
                <div className="quote-btn">
                    <a
                        href="https://twitter.com/intent/tweet"
                        className="btn"
                        id="tweet-quote"
                    >
                        <img
                            src="https://cutewallpaper.org/24/white-twitter-icon-png/free-white-twitter-icon-download-white-twitter-icon.png"
                            alt="twitter-logo"
                        />
                    </a>
                    <button id="new-quote" className="btn" onClick={loadQuote}>
                        New Quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
