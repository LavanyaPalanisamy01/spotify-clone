
const songTitle = document.getElementById("songTitle");
const playPause = document.getElementById("playPause");
const playerStatus = document.getElementById("playerStatus");
const createPlaylist = document.getElementById("createPlaylist");
const playlistMessage = document.getElementById("playlistMessage");

let currentSong = "";
let isPlaying = false;

function updatePlayer() {
  playPause.textContent = isPlaying ? "Ⅱ" : "▶";
  playerStatus.textContent = isPlaying ? "Playing preview" : "Paused";
}

document.querySelectorAll(".card").forEach((card) => {
  const button = card.querySelector(".play");

  button.addEventListener("click", () => {
    const selectedSong = card.dataset.song;

    if (currentSong === selectedSong) {
      isPlaying = !isPlaying;
    } else {
      currentSong = selectedSong;
      isPlaying = true;
    }

    songTitle.textContent = currentSong;
    updatePlayer();
  });
});

playPause.addEventListener("click", () => {
  if (!currentSong) {
    playerStatus.textContent = "Choose a track first";
    return;
  }

  isPlaying = !isPlaying;
  updatePlayer();
});

createPlaylist.addEventListener("click", () => {
  playlistMessage.textContent = "Your first playlist is ready to create!";
});
