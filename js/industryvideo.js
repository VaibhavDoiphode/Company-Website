// JavaScript for custom play/pause functionality
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("industry-video");
    const playButton = document.getElementById("custom-play-btn");

    // Initially hide video controls and show play button
    video.controls = false;

    // Play or Pause the video and toggle controls
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playButton.classList.add("hidden"); // Hide play button when playing
            video.controls = true; // Show video controls
        } else {
            video.pause();
            playButton.classList.remove("hidden"); // Show play button when paused
            video.controls = false; // Hide video controls when paused
        }
    }

    // When clicking on the play button, play the video
    playButton.addEventListener("click", togglePlayPause);

    // Pause or play video when clicking directly on the video
    video.addEventListener("click", togglePlayPause);

    // Show play button again when video ends
    video.addEventListener("ended", () => {
        playButton.classList.remove("hidden");
        video.controls = false;
    });
});
