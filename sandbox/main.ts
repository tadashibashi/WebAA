import {AudioEngine, Music} from "..";

let audio: AudioEngine = null;
let music: Music = null;

window.onload = async () => {
    audio = new AudioEngine;
    audio.init();

    music = audio.loadMusic("audio/music.mp3");

    const playMusicBtn = document.getElementById("play-music");
    playMusicBtn.addEventListener("click", evt => {
        music.play();
    });
};
