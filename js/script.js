const epicMix = [
  "I Don't Wanna Wait",
  "Do You Realize?",
  "Space Song",
  "Heavy Balloon",
  "My Favorite Mutiny",
  "That's Why We Dance",
  "For Sure",
  "Never Tear Us Apart",
  "Johnny and Mary",
  "Mandinka",
  "Try a Little Tenderness",
  "Baby Girl",
  "I Found Someone",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
