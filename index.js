document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('.hover-video');
  const playButton = container.querySelector('.custom-play-button');
  const playIcon = playButton.querySelector('.play-icon');
  const pauseIcon = playButton.querySelector('.pause-icon');

  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline';
    } else {
      video.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  });

  video.addEventListener('ended', () => {
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
  });
});