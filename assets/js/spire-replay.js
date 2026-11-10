const player = document.querySelector('.spire-player');
const movie = player.querySelector('video');
const chapters = player.querySelector('.spire-chapters');
const buttons = [...chapters.querySelectorAll('button')];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let resume = !reduced.matches;
let onscreen = false;

function sync() {
  const active = buttons.filter(b => movie.currentTime >= Number(b.dataset.start)).pop();
  buttons.forEach(b => b.setAttribute('aria-current', String(b === active)));
}
function visibility() {
  if (!onscreen || document.hidden) {
    if (!movie.paused) { resume = true; movie.pause(); }
  } else if (resume) {
    resume = false;
    movie.play().catch(() => {});
  }
}
new IntersectionObserver(([entry]) => {
  onscreen = entry.isIntersecting;
  visibility();
}).observe(movie);
document.addEventListener('visibilitychange', visibility);
reduced.addEventListener('change', () => {
  resume = !reduced.matches;
  if (reduced.matches) movie.pause(); else visibility();
});
buttons.forEach(b => b.addEventListener('click', () => {
  movie.currentTime = Number(b.dataset.start);
  if (!reduced.matches) movie.play().catch(() => {});
  sync();
}));
movie.addEventListener('timeupdate', sync);
movie.addEventListener('seeked', sync);
chapters.hidden = false;
sync();
