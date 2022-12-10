"use strict";
window.addEventListener("keydown", (e) => {
  if (e.key == "a" || e.key == "A") {
    const bassSound = new Audio("/sounds/bass-drum.wav");
    bassSound.play();
  }
});

const bassDrum = document
  .getElementById("bass-drum")
  .addEventListener("mousedown", () => {
    const bassSound = new Audio("/sounds/bass-drum.wav");
    bassSound.play();
  });

window.addEventListener("keydown", (e) => {
  if (e.key == "s" || e.key == "S") {
    const boomSound = new Audio("/sounds/kick.wav");
    boomSound.play();
  }
});
const boomDrum = document
  .getElementById("boom-sound")
  .addEventListener("mousedown", () => {
    const boomSound = new Audio("/sounds/kick.wav");
    boomSound.play();
  });

window.addEventListener("keydown", (e) => {
  if (e.key == "d" || e.key == "D") {
    const clappingSound = new Audio("/sounds/clap.wav");
    clappingSound.play();
  }
});
const clappingDrum = document
  .getElementById("clapping-sound")
  .addEventListener("mousedown", () => {
    const clappingSound = new Audio("/sounds/clap.wav");
    clappingSound.play();
  });

window.addEventListener("keydown", (e) => {
  if (e.key == "f" || e.key == "F") {
    const hithatSound = new Audio("/sounds/hihat.wav");
    hithatSound.play();
  }
});
const hitHatDrum = document
  .getElementById("hit-hat-sound")
  .addEventListener("mousedown", () => {
    const hithatSound = new Audio("/sounds/hihat.wav");
    hithatSound.play();
  });

window.addEventListener("keydown", (e) => {
  if (e.key == "ö" || e.key == "Ö") {
    const openhatSound = new Audio("/sounds/openhat.wav");
    openhatSound.play();
  }
});

const openHatDrum = document
  .getElementById("open-hat-sound")
  .addEventListener("mousedown", () => {
    const openhatSound = new Audio("/sounds/openhat.wav");
    openhatSound.play();
  });

window.addEventListener("keydown", (e) => {
  if (e.key == "j" || e.key == "J") {
    const snareSound = new Audio("/sounds/snare.wav");
    snareSound.play();
  }
});
const snareDrum = document
  .getElementById("snare-sound")
  .addEventListener("mousedown", () => {
    const snareSound = new Audio("/sounds/snare.wav");
    snareSound.play();
  });

window.addEventListener("keydown", (e) => {
  if (e.key == "k" || e.key == "K") {
    const thinkSound = new Audio("/sounds/tink.wav");
    thinkSound.play();
  }
});
const thinkDrum = document
  .getElementById("think-sound")
  .addEventListener("mousedown", () => {
    const thinkSound = new Audio("/sounds/tink.wav");
    thinkSound.play();
  });

window.addEventListener("keydown", (e) => {
  if (e.key == "l" || e.key == "L") {
    const tomSound = new Audio("/sounds/tom.wav");
    tomSound.play();
  }
});
const tomtomDrum = document
  .getElementById("tomtom-sound")
  .addEventListener("mousedown", () => {
    const tomSound = new Audio("/sounds/tom.wav");
    tomSound.play();
  });
