document.querySelectorAll('[data-citation] .copy-citation').forEach((button) => {
  const section = button.closest('[data-citation]');
  const code = section.querySelector('code');
  const status = section.querySelector('[role="status"]');
  const label = button.querySelector('span');
  let reset;
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      if (label) {
        label.textContent = 'Copied';
        status.classList.add('sr-only');
        clearTimeout(reset);
        reset = setTimeout(() => { label.textContent = 'BibTeX'; }, 2000);
      }
      status.textContent = 'Citation copied.';
    } catch {
      code.closest('pre').hidden = false;
      status.classList.remove('sr-only');
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected. Use your usual copy command.';
    }
  });
});
