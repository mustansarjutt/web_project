let menuBtn = document.querySelector(".fa-bars");
let ulTag = document.getElementById("nav-items");
ulTag.style.left = "-100%";
menuBtn.addEventListener("click", () => {
    if (ulTag.style.left === "-100%") {
        ulTag.style.left = "0";
    } else {
        ulTag.style.left = "-100%";
    }
});

let btn = document.getElementById('doneBtn');
let resultCont = document.getElementById('resultCont');

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    resultCont.innerHTML = `<img src="loader.gif" alt="" width="100px">`;
    let apiKey = 'ema_live_gFLSS8pIbLhOHW6kELLJrHKbBlOWFGB7w08RjHLG';
    let email = document.getElementById('email').value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;
    let res = await fetch(url);
    let results = await res.json();
    let str = "";
    for (key of Object.keys(results)) {
        if(results[key] !== "" && results[key] !== " "){
            str = str + `<div>${key}: ${results[key]}</div>`;
        }
    }
    resultCont.innerHTML = str;
});