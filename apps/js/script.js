const hiddenText = document.querySelectorAll("#hidden-text");
const cards = document.querySelectorAll(".cards");

function dropDown(card) {
  const img = card.querySelector("img");
  img.addEventListener("click", function (e) {
    e.preventDefault();
    const paragpraph = card.querySelector("p");
    if (paragpraph.classList.contains("hidden")) {
      paragpraph.classList.remove("hidden");
      paragpraph.classList.add("show");
      img.src = "assets/images/icon-minus.svg";
    } else {
      paragpraph.classList.remove("show");
      paragpraph.classList.add("hidden");
      img.src = "assets/images/icon-plus.svg";
    }
  });
}

cards.forEach((card) => {
  dropDown(card);
});
