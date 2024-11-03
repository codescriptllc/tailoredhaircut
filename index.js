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


document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.hover-video');

  videos.forEach(video => {
    const videoSource = video.querySelector('source').src;
    video.removeAttribute('src'); // Initially remove the source

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.src = videoSource;  // Set the source only when in view
          video.load();
          observer.unobserve(video);
        }
      });
    });
    observer.observe(video);
  });
});



// REWIEVS
let currentReview = 0;
const reviews = document.querySelectorAll(".review");
const reviewCount = reviews.length;

// Function to update the review display
function showReview(index) {
  const offset = -index * 100;
  document.querySelector(".review-slider").style.transform = `translateX(${offset}%)`;
}

// Previous review button function
function prevReview() {
  currentReview = (currentReview > 0) ? currentReview - 1 : reviewCount - 1;
  showReview(currentReview);
}

// Next review button function
function nextReview() {
  currentReview = (currentReview < reviewCount - 1) ? currentReview + 1 : 0;
  showReview(currentReview);
}

// Auto-scroll every 30 seconds
setInterval(nextReview, 30000);
