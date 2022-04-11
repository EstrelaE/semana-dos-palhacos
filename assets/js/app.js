const readMoreChaco = document.getElementById("chaco");
readMoreChaco.addEventListener("click", showMoreChaco);
function showMoreChaco() {
  const aboutChacovachi = document.getElementById("aboutChacovachi");
  if (aboutChacovachi.classList.contains("hide")) {
    aboutChacovachi.classList.remove("hide");
    readMoreChaco.innerText = "Ver menos";
  } else {
    aboutChacovachi.classList.add("hide");
    readMoreChaco.innerText = "Ver mais";
  }
}

const readMoreDennis = document.getElementById("dennis");
readMoreDennis.addEventListener("click", showMoreDennis);
function showMoreDennis() {
  const aboutDennis = document.getElementById("aboutDennis");
  if (aboutDennis.classList.contains("hide")) {
    aboutDennis.classList.remove("hide");
    readMoreDennis.innerText = "Ver menos";
  } else {
    aboutDennis.classList.add("hide");
    readMoreDennis.innerText = "Ver mais";
  }
}
