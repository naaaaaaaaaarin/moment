/* const quotes = [
    {
        quote: "네 이름을 이정표 삼아 걸어오길 정말 잘했어.",
        author: "수정공",
    },
    {
        quote: "소녀가 눈밭에서 얼어붙지않는 시대가 오기를",
        author: "이젤",
    },
    {
        quote: "진정한 평화를 위해 최후의 정적을 내리소서",
        author: "이젤",
    },
    {
        quote: "오늘도 다날란의 태양이 아름답습니다.",
        author: "라우반",
    },
    {
        quote: "듣고 느끼고 생각하세요",
        author: "하이델린",
    },
    {
        quote: "뭐니뭐니해도 네가 가장 좋으니까 말이야!",
        author: "오르슈팡",
    },
    {
        quote: "역시 넌 웃는 얼굴이 좋아.",
        author: "오르슈팡",
    },
    {
        quote: "고통을 알고 슬픔을 알고 괴로움을 아는 나의 주인이여. 또 함께 여행을 떠나자",
        author: "프레이",
    },
    {
        quote: "안녕, 내 두번째 파트너",
        author: "파파리모",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author; */

const url = "https://api.adviceslip.com/advice";
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const advice = document.querySelector("#quote span:first-child");
        advice.innerText = data.slip.advice;
    });
    
    
