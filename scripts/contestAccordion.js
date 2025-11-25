const root = document.querySelector('.accordion');

root.addEventListener('click', e => {
  const item = e.target.closest('.accordion__item');
  if (!item || !root.contains(item)) return;

  const active = root.querySelector('.item--active');
  if (active && active !== item) active.classList.remove('item--active');

  item.classList.toggle('item--active');
});
