const rockPaperScissorsH1 = document.querySelector(".rockPaperScissorsH1");
const startBtn = document.querySelector(".startBtn");
const pcScore = document.querySelector(".pcScore");
const playerScore = document.querySelector(".playerScore");
const pcImg = document.querySelector(".pcImg");
const playerImg = document.querySelector(".playerImg");
const choose = document.querySelector(".choose");
const rpsBtn = document.querySelector(".rpsBtn");
const container = document.querySelector(".container");
const displayMessage = document.querySelector(".displayMessage");

class App {
  #randomImg;
  #pcScore = 0;
  #playerScore = 0;
  constructor() {
    startBtn.addEventListener("click", this._startGame.bind(this));

    rpsBtn.addEventListener("click", this._chosenBtn.bind(this));
  }
  _startGame() {
    // reset everything
    this._reset();
    // show rock papper scissors
    this._rpsInterval();
  }
  _rpsInterval() {
    rockPaperScissorsH1.textContent = "";
    this._resetChoose();
    rockPaperScissorsH1.textContent = "ROCK";
    const paper = setInterval(() => {
      rockPaperScissorsH1.textContent += " PAPER";
      const paperR = rockPaperScissorsH1.textContent.includes("PAPER");
      if (paperR) clearInterval(paper);
    }, 1000);
    const scissors = setInterval(() => {
      rockPaperScissorsH1.textContent += " SCISSORS";
      const scissorsR = rockPaperScissorsH1.textContent.includes("SCISSORS");
      if (scissorsR) clearInterval(scissors);
      // hide player image and display choose and display buttons
      this._choose();
    }, 2000);
  }
  _choose() {
    playerImg.classList.add("hidden");
    choose.classList.remove("hidden");
    rpsBtn.classList.remove("hidden");
  }
  _resetChoose() {
    playerImg.classList.remove("hidden");
    choose.classList.add("hidden");
    rpsBtn.classList.add("hidden");
  }
  _chosenBtn(e) {
    if (e.target.classList.contains("rock")) {
      choose.classList.add("hidden");
      playerImg.classList.remove("hidden");
      playerImg.src = "img\\1.png";
      // shuffle computer image
      this._shufflePcImg();
      // rock play
      this._rockPlay();
    }
    if (e.target.classList.contains("paper")) {
      choose.classList.add("hidden");
      playerImg.classList.remove("hidden");
      playerImg.src = "img\\2.png";
      // shuffle computer image
      this._shufflePcImg();
      // paper play
      this._paperPlay();
    }
    if (e.target.classList.contains("scissors")) {
      choose.classList.add("hidden");
      playerImg.classList.remove("hidden");
      playerImg.src = "img\\3.png";
      // shuffle computer image
      this._shufflePcImg();
      // scissors play
      this._scissors();
    }
  }
  _shufflePcImg() {
    this.#randomImg = Math.floor(Math.random() * 3) + 1;
    pcImg.src = `img\\${this.#randomImg}.png`;
    console.log(this.#randomImg);
  }
  _rockPlay() {
    if (this.#randomImg === 1) {
      this._forDraw();
    }
    if (this.#randomImg === 2) {
      this._forLose();
    }
    if (this.#randomImg === 3) {
      this._forWin();
    }
  }
  _paperPlay() {
    if (this.#randomImg === 1) {
      this._forWin();
    }
    if (this.#randomImg === 2) {
      this._forDraw();
    }
    if (this.#randomImg === 3) {
      this._forLose();
    }
  }
  _scissors() {
    if (this.#randomImg === 1) {
      this._forLose();
    }
    if (this.#randomImg === 2) {
      this._forWin();
    }
    if (this.#randomImg === 3) {
      this._forDraw();
    }
  }
  _forWin() {
    // add players score
    this.#playerScore += 1;
    // display player score
    playerScore.textContent = this.#playerScore;
    // display win message
    displayMessage.classList.remove("hidden");
    displayMessage.textContent = "YOU WIN";
  }
  _forLose() {
    // add pc score
    this.#pcScore += 1;
    // display pc score
    pcScore.textContent = this.#pcScore;
    // display lose message
    displayMessage.classList.remove("hidden");
    displayMessage.textContent = "YOU LOSE";
  }
  _forDraw() {
    //display draw message
    displayMessage.classList.remove("hidden");
    displayMessage.textContent = "DRAW";
  }
  _reset() {
    //reset everything
    this.#pcScore = 0;
    this.#playerScore = 0;
    displayMessage.textContent = "";
    pcScore.textContent = "0";
    playerScore.textContent = "0";
  }
}
const app = new App();
