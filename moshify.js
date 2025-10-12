const navcontainer = document.querySelector(".nav-container");
const list = document.querySelector(".list");
const body = document.querySelector("body");

navcontainer.addEventListener("click", () => {
  list.classList.toggle("show");
  body.classList.toggle("show");
});
const icon = document.querySelectorAll(".svg");
const li = document.querySelectorAll(".li");

icon.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    li[index].classList.toggle("show");
    icon.classList.toggle("show");
  });
});


let lastScrollY = window.scrollY;

// Reusable logic
function handleEntries(entries, scrollYRef) {
  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      el.classList.add("show");
    } else {
      const scrollingUp = window.scrollY < scrollYRef.value;
      if (scrollingUp) {
        el.classList.remove("show");
      }
    }
  });
  scrollYRef.value = window.scrollY;
}

// Observer for fade+scale (.second) with threshold 0.3
const fadeScrollRef = { value: window.scrollY };
const fadeObserver = new IntersectionObserver((entries) => {
  handleEntries(entries, fadeScrollRef);
}, { threshold: 0.3 });
document.querySelectorAll('.second').forEach(el => fadeObserver.observe(el));
document.querySelectorAll('.first-left h1').forEach(el => fadeObserver.observe(el));
document.querySelectorAll('.banner').forEach(el => fadeObserver.observe(el));
document.querySelectorAll('.seventh').forEach(el => fadeObserver.observe(el));


// Observer for translateY (.third) with threshold 0
const translatefScrollRef = { value: window.scrollY };
const translatefObserver = new IntersectionObserver((entries) => {
  handleEntries(entries, translateScrollRef);
}, {
  threshold: 0,
  root: null,
  rootMargin: "-40px"
})
  ;

const translateScrollRef = { value: window.scrollY };
const translateObserver = new IntersectionObserver((entries) => {
  handleEntries(entries, translateScrollRef);
}, {
  threshold: 0.3
})
  ;  

const translatebScrollRef = { value: window.scrollY };
const translatebObserver = new IntersectionObserver((entries) => {
  handleEntries(entries, translateScrollRef);
}, { threshold: 0.1 });

const fadebScrollRef = { value: window.scrollY };
const fadebObserver = new IntersectionObserver((entries) => {
  handleEntries(entries, translateScrollRef);
}, { threshold: 0.5 });
document.querySelectorAll('.third').forEach(el => translatefObserver.observe(el));
document.querySelectorAll('.one').forEach(el => translateObserver.observe(el));
document.querySelectorAll('.two').forEach(el => translateObserver.observe(el));
document.querySelectorAll('.sixth-b .part-a img').forEach(el => translatebObserver.observe(el));
document.querySelectorAll('.sixth-b .part-b').forEach(el => translatebObserver.observe(el));
document.querySelectorAll('.fourth').forEach(el => fadebObserver.observe(el));
