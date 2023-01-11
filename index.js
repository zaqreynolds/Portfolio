// const btn = document.querySelector("button");

// const colorFlip = () => {
//   document.body.style.backgroundColor = "black";
// };
// btn.onclick = colorFlip;

const btn = document.getElementById("colorflip");

let clicks = 0;

btn.addEventListener("click", () => {
  clicks += 1;
  for (let i = clicks; i > 0; i + 0) {
    if (i % 2 != 0) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "snow";
      document.querySelector(".light-theme").style.display = "none";
      document.querySelector(".dark-theme").style.display = "block";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.querySelector(".light-theme").style.display = "block";
      document.querySelector(".dark-theme").style.display = "none";
    }
    break;
  }
});
