export function buttonClick() {
  for (let btn of document.querySelectorAll('.button')) {
    btn.addEventListener('click', () => btn.textContent = 'Спасибо!')
  }
}
