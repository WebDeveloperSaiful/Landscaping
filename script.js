const menuBtn=document.querySelector(".menu-btn");
const mobileMenu=document.querySelector(".mobile-menu");
menuBtn?.addEventListener("click",()=>mobileMenu.classList.toggle("open"));
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));
