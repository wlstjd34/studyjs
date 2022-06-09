const quotes = [
    {
        qoute: "늦었다고 생각할때가 진짜 늦었다",
        author: "박명수",
    },
    {
        qoute: "꿈은 없고요, 놀고 먹고싶습니다",
        author: "박명수",
    },
    {
        qoute: "입닫고 빵이나 먹어",
        author: "박명수",
    },
    {
        qoute: "쩜오",
        author: "박명수",
    },
    {
        qoute: "친구는 가까이, 적은 더 가까이",
        author: "대부",
    },
    {
        qoute: "고통 없는 교훈에는 의미가 없다. 사람은 희생 없이는 어떠한 것도 얻지 못하니",
        author: "강철의 연금술사",
    },
    {
        qoute: "후회없는 삶을 살겠다는 것은 고등생물의 특권인 전두엽을 사용하지 않겠다는 말이에요",
        author: "???",
    }
]

const qoute = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomVal = Math.floor(Math.random() * quotes.length);
const selectedQuote = quotes[randomVal];;

qoute.textContent = selectedQuote.qoute;
author.textContent = selectedQuote.author;