const btn = document.getElementById("my_btn");
const sound = document.getElementById("click_sound");

btn.addEventListener("click", () => {
  sound.play();
});
