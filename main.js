function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('expanded-menu')
}

function closeMenu() {
  document.body.classList.remove('expanded-menu')
}
