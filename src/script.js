"use strict";
const bassDrum = document
  .getElementById("bass-drum")
  .addEventListener("mousedown", () => {
    const bassSound = new Audio("/sounds/bass-drum.wav");
    bassSound.play();
  });

const boomDrum = document
  .getElementById("boom-sound")
  .addEventListener("mousedown", () => {
    const boomSound = new Audio("/sounds/kick.wav");
    boomSound.play();
  });
const clappingDrum = document
  .getElementById("clapping-sound")
  .addEventListener("mousedown", () => {
    const clappingSound = new Audio("/sounds/clap.wav");
    clappingSound.play();
  });
const hitHatDrum = document
  .getElementById("hit-hat-sound")
  .addEventListener("mousedown", () => {
    const hithatSound = new Audio("/sounds/hihat.wav");
    hithatSound.play();
  });
const openHatDrum = document
  .getElementById("open-hat-sound")
  .addEventListener("mousedown", () => {
    const openhatSound = new Audio("/sounds/openhat.wav");
    openhatSound.play();
  });
const snareDrum = document
  .getElementById("snare-sound")
  .addEventListener("mousedown", () => {
    const snareSound = new Audio("/sounds/snare.wav");
    snareSound.play();
  });
const thinkDrum = document
  .getElementById("think-sound")
  .addEventListener("mousedown", () => {
    const thinkSound = new Audio("/sounds/tink.wav");
    thinkSound.play();
  });
const tomtomDrum = document
  .getElementById("tomtom-sound")
  .addEventListener("mousedown", () => {
    const tomSound = new Audio("/sounds/tom.wav");
    tomSound.play();
  });
const rideDrum = document
  .getElementById("ride-sound")
  .addEventListener("mousedown", () => {
    const rideSound = new Audio("/sounds/ride.wav");
    rideSound.play();
  });
