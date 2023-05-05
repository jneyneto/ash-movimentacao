const boneco = document.querySelector('.character');
const quadro = document.querySelector('.game');
const body = document.querySelector('body');

let iT = 0;
let iR = 0;

body.addEventListener('keydown', (event) => {
    event.preventDefault();

    if (event.code == "ArrowDown" && iT <= 550) {
        boneco.src = "assets/front.png";
        boneco.style.marginTop = `${iT += 50}px`;
    } else if (event.code == "ArrowUp" && iT >= 50) {
        boneco.src = "assets/back.png";
        boneco.style.marginTop = `${iT -= 50}px`;
    } else if (event.code == "ArrowRight" && iR >= 50) {
        boneco.src = "assets/right.png";
        boneco.style.marginRight = `${iR -= 50}px`;
    } else if (event.code == "ArrowLeft" && iR <= 700) {
        boneco.src = "assets/left.png";
        boneco.style.marginRight = `${iR += 50}px`;
    }
})
