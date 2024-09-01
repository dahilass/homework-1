export function personal() {
  const personalBtns = document.querySelector('.nav__list');
  for (let btn of personalBtns.children) {
    btn.addEventListener('mouseout', () => {
      btn.style.animation = 'translateOut 1s linear forwards';
    });
  }
}
