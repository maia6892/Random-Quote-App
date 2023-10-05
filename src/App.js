import React from "react";
import "./App.css";

const quotesUrl = "https://api.quotable.io/random";
const randomColor = require("randomcolor");
const quoteColor = randomColor();

class App extends React.Component {
    constructor(props) {
        super(props);
        fetch(quotesUrl)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    quoteText: data.content,
                    author: data.author,
                })
            );

        this.state = {
            quoteText: "",
            author: "",
        };
        document.body.style.backgroundColor = quoteColor;
        document.body.style.color = quoteColor;
    }

    getGuote() {
        const randomColor = require("randomcolor");
        const quoteColor = randomColor();
        document.body.style.backgroundColor = quoteColor;
        document.body.style.color = quoteColor;
        document.getElementById("tweet-quote").style.backgroundColor =
            quoteColor;
        document.getElementById("new-quote").style.backgroundColor = quoteColor;

        fetch(quotesUrl)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    quoteText: data.content,
                    author: data.author,
                })
            );
    }
    render() {
        return (
            <div className="App">
                <div id="quote-box">
                    <div className="quote-text">
                        <div id="text">{this.state.quoteText}</div>
                        <div id="author">- {this.state.author}</div>
                    </div>
                    <div className="quote-btn">
                        <a
                            href="https://twitter.com/intent/tweet"
                            className="btn"
                            id="tweet-quote"
                            style={{ backgroundColor: quoteColor }}
                        >
                            <img
                                src="https://cutewallpaper.org/24/white-twitter-icon-png/free-white-twitter-icon-download-white-twitter-icon.png"
                                alt="twitter-logo"
                            />
                        </a>
                        <button
                            id="new-quote"
                            className="btn"
                            onClick={() => this.getGuote()}
                            style={{ backgroundColor: quoteColor }}
                        >
                            New Quote
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
