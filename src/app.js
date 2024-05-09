/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import "./assets/img/diam-treb-removebg-preview.png";
import "./assets/img/pic-cor-removebg-preview.png";
import "./assets/img/joker-removebg-preview.png";

window.onload = function() {
  //write your code here
  const cardSuit = document.querySelectorAll(".card-suit");

  const cardValue = document.getElementById("card-value");

  const buttonG = document.getElementById("card-generator");

  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A", "Joker"];

  const suits = ["♦", "♥", "♠", "♣"];

  function cardGenerator() {
    let randomIndexValue = Math.floor(Math.random() * values.length);
    let randomIndexSuit = Math.floor(Math.random() * suits.length);
    let randomValue = values[randomIndexValue];
    let randomSuit = suits[randomIndexSuit];
    if (randomValue === "Joker") {
      cardValue.innerHTML =
        "<img src='./joker-removebg-preview.png' style='height: 380px; margin-top: 15px' />";
      cardSuit[0].style.display = "none";
      cardSuit[1].style.display = "none";
    } else {
      cardSuit[0].style.display = "block";
      cardSuit[1].style.display = "block";
      cardSuit[0].textContent = randomSuit;
      cardSuit[1].textContent = randomSuit;
      cardValue.textContent = randomValue;
      const isRed = randomSuit === "♥" || randomSuit === "♦";
      if (isRed) {
        cardSuit[0].style.color = "red";
        cardSuit[1].style.color = "red";
      } else {
        cardSuit[0].style.color = "black";
        cardSuit[1].style.color = "black";
      }
    }
  }

  buttonG.addEventListener("click", cardGenerator);
};
