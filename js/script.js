const header = document.querySelector('.header'),
  template = document.querySelector('.template'),
  height = header.clientHeight + template.clientHeight;
document.addEventListener('scroll',() => {
  let scrollOffset = this.scrollY;

  scrollCheck(scrollOffset);
})

const scrollCheck = (scrollOffset) => {
  if (scrollOffset > height)
  {
    header.classList.add('fixed')
  }
  else
  {
    header.classList.remove('fixed');
  }
}