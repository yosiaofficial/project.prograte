function updateBackToTop() {
  var button = document.getElementById('to-top');
  if (!button) return;

  var visible = window.pageYOffset > 50;
  button.style.opacity = visible ? '1' : '0';
  button.style.pointerEvents = visible ? 'auto' : 'none';
  button.style.transform = visible ? 'translateY(0)' : 'translateY(10px)';
}

window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();

const scrollLink = (id)=> {
  var target = document.getElementById(id);
  if (!target) return;

  window.scrollTo({
    top: target.getBoundingClientRect().top + window.pageYOffset - 90,
    behavior: 'smooth'
  });

  var menu = document.getElementById('menu-toggle');
  if (menu) menu.checked = false;
}

document.querySelectorAll('.site-nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    var menu = document.getElementById('menu-toggle');
    if (menu) menu.checked = false;
  });
});
