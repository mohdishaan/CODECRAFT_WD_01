window.addEventListener('scroll', function () {
    const navbar_content = document.getElementById('mynavbar');
    const scrollpos = window.scrollY;

    if (scrollpos > 50) {
        navbar_content.classList.add("fixed");
        navbar_content.classList.add("bg-slate-300");
        navbar_content.classList.add("w-full");
    } else {
        navbar_content.classList.remove("fixed");
        navbar_content.classList.remove("bg-slate-300");
        navbar_content.classList.remove("w-full");
    }
});


document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('text-white' , 'cursor-pointer');
    });

    item.addEventListener('mouseout', () => {
      item.classList.remove('text-white' , 'cursor-pointer');
    });
  });
});