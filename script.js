const jokeGen = document.getElementById("joke");
const btn = document.getElementById("btn");
const jokesUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(jokesUrl)
    .then(data=> data.json())
    .then(item=> {
        jokeGen.textContent = `${item.joke}`;
    });
}
btn.addEventListener("click",getJoke)
getJoke();