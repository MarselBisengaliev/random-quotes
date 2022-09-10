document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const quote = document.getElementById('quote'),
        author = document.getElementById('author'),
        btn = document.getElementById('btn');
        let lastIndex = 0;

    fetch('/data/quotes.json')
        .then(res => {
            return res.json()
        })
        .then(data => {
            quote.textContent = data[lastIndex].text;
            author.textContent = data[lastIndex].author;

            btn.addEventListener('click', () => changeQuote(data))
        });

    function generateRandomNum(data) {
        return Math.floor(Math.random() * data.length);
    }

    function changeQuote(data) {
        let randomNum = generateRandomNum(data);
        while (randomNum === lastIndex) {
            randomNum = generateRandomNum(data);
        }
        quote.textContent = data[randomNum].text;
        author.textContent = data[randomNum].author;
        lastIndex = randomNum;
    }
})