let imageNames = [];
// let masiv = [];
let openCards = [];
let i = 0;
let game = document.getElementById("game");
let seconds = 0;
let time = document.getElementsByTagName("h2")[0];
let isPlaying = false;
let dogs = 0
while (i < 16) {
  imageNames.push("dog  (" + i + ").jpg");
  imageNames.push("dog  (" + i + ").jpg");
  i = i + 1;
}
for (let m = imageNames.length - 1; m > 0; m--) {
  let randomNumber = Math.floor(Math.random() * (m + 1));
  let slot = imageNames[randomNumber];
  imageNames[randomNumber] = imageNames[m];
  imageNames[m] = slot;
}
console.log(imageNames);
for (let c = 0; c < 32; c = c + 1) {
  let card = document.createElement("img");
  card.src = "img/card.jpg ";
  game.appendChild(card);
  card.style.height = card.offsetWidth + "px";
  card.onclick = function () {
    isPlaying = true;

    card.src = "img/" + imageNames[c];
    openCards.push(card);
    if (openCards.length == 2) {
      if (openCards[0].src == openCards[1].src) {
        openCards = [];
        dogs = dogs + 2
        if(dogs == 32){
          clearInterval(gameInterval);
        }
        console.log(" верно");
      } else {
        console.log("неверно");
        setTimeout(function () {
          openCards[0].src = "img/card.jpg";
          openCards[1].src = "img/card.jpg";
          openCards = [];
          for(let c of cards){
            c.style.pointerEvents = "auto"
          }
        }, 1000);
        let cards = game.children
        for(let c of cards){
          c.style.pointerEvents = "none"
        }
      }
      console.log("Вы открыли 2 карточки");
    }
    console.log(openCards);
    // if (c%2==0) {
    //   masiv.push("нечетная")
    //   console.log("Функция нечетная");
    // }
    // else{
    //   masiv.push("четная")
    //   console.log("Функция четная");
    // }
    // console.log(masiv);
  };
}
gameInterval = setInterval(function () {
  console.log(1);
  if (isPlaying) {
    seconds = seconds + 1;
  }
  time.innerHTML = "Time: " + seconds;
}, 1000);
