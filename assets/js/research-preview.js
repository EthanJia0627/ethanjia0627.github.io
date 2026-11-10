document.querySelectorAll('.research-preview').forEach((figure) => {
  const video = figure.querySelector('video');
  const button = figure.querySelector('button');
  const icon = button.querySelector('i');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let wantsPlay = !motion.matches;
  let visible = false;

  function updatePlayback() {
    if (wantsPlay && visible && !document.hidden) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }
  function updateButton() {
    const label = video.paused ? 'Play preview' : 'Pause preview';
    button.title = label;
    button.setAttribute('aria-label', label);
    icon.className = video.paused ? 'fa-solid fa-play' : 'fa-solid fa-pause';
  }
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    updatePlayback();
  }).observe(video);
  button.addEventListener('click', () => {
    wantsPlay = video.paused;
    updatePlayback();
  });
  motion.addEventListener('change', () => {
    wantsPlay = !motion.matches;
    updatePlayback();
  });
  document.addEventListener('visibilitychange', updatePlayback);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.controls = false;
  button.hidden = false;
});
