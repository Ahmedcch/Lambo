// start mega button section
const megaMenu = document.querySelector(".header #mega-menu");
const megaMenuButton = document.querySelector(
  ".container .main-nav #mega-menu-button"
);
let count = 1;
// console.log(megaMenu);
megaMenuButton.addEventListener("click", () => {
  count++;
  getClicked();
  //   console.log(count);
});

function getClicked() {
  if (count == 2) {
    megaMenu.style.opacity = "1";
    megaMenu.style.zIndex = "100";
    megaMenu.style.top = "calc(100% + 1px)";
  } else {
    megaMenu.style.opacity = "0";
    megaMenu.style.zIndex = "-1";
    megaMenu.style.top = "calc(100% + 50px)";
    count = 1;
  }
}
// End mega button section

// start skill border Section

const border = document.querySelectorAll(".skills .skill .the-progress > span");
const borderTitle = document.querySelectorAll(".skills .skill h3 > span");
const sectionStarted = document.querySelector(".our-skills");

// console.log(border);
// console.log(borderTitle);
let scroll = addEventListener("scroll", () => {
  if (window.scrollY >= sectionStarted.offsetTop - 30) {
    border.forEach((fill) => {
      //   console.log(fill.dataset.width);
      fill.style.width = fill.dataset.width;
    });
    borderTitle.forEach((show) => {
      show.style.opacity = "1";
    });
  }
});
// End skill border Section
// Start count numbers Section
const numbers = document.querySelectorAll(".container .box > .number");
const countSectionStarted = document.querySelector(".stats");
let started = false;

let scroll2 = addEventListener("scroll", () => {
  if (window.scrollY >= countSectionStarted.offsetTop - 200) {
    if (!started) {
      numbers.forEach((test) => fillNumbers(test));
    }
    started = true;
  }
});

function fillNumbers(fill) {
  let goal = fill.dataset.goal;
  let time = setInterval(() => {
    fill.innerText++;

    if (fill.innerText == goal) {
      clearInterval(time);
    }
  }, 4000 / goal);
}
// End count numbers Section
// start countdown timer in latest Event section

// new Date() only without any value in it it will give you the full date of today
// .getTime() it will give you the new Date() time but in milliseconds [1000 milsec = 1sec]
// new Date("May 14, 2024 23:59:59") it will gives you the full date in the future in May 14
let countDownDate = new Date("May 14, 2024 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  //Get date now
  let dateNow = new Date().getTime();
  // console.log(dateNow);
  // the date difference between now and countdown date
  let dateDiff = countDownDate - dateNow;
  //Get Time Units
  //Math.floor() to aproximate the number to a hole number and remove the decimal
  //let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24); // you get the number of days
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); // same result as the uppers days variable
  // console.log(days);
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // console.log(hours);
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  // console.log(minutes);
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  // console.log(seconds)
  document.querySelector(".time .unit .days").innerHTML = days;
  document.querySelector(".time .unit .hours").innerHTML = hours;
  document.querySelector(".time .unit .minutes").innerHTML = minutes;
  document.querySelector(".time .unit .seconds").innerHTML = seconds;

  if (dateDiff <= 0) {
    // this because it will count with negative numbers to infinite
    clearInterval(counter);
  }
}, 1000);
/*
 */
// End countdown timer in latest Event section
