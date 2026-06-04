// ---------- Data ----------
const services = [
  { icon: "🌳", title: "Landschaftsgestaltung", desc: "Planifikim dhe dizajn i kompletuar i kopshteve dhe hapësirave të jashtme." },
  { icon: "🌼", title: "Pflanzung von Blumen & Bäumen", desc: "Mbjellje profesionale e luleve, shkurreve dhe pemëve sipas stinës." },
  { icon: "🌱", title: "Begrünung & Pflege", desc: "Gjelbërim dhe mirëmbajtje e rregullt për bar dhe bimë gjatë gjithë vitit." },
  { icon: "🪨", title: "Gehweg-Verlegung", desc: "Vendosje e shtigjeve dhe rrugicave me gurë dhe pllaka cilësore." },
  { icon: "🏡", title: "Hofdekoration", desc: "Dekorim dhe rregullim i oborreve për një ambient të ngrohtë e elegant." },
  { icon: "🔧", title: "Hausmeisterservice", desc: "Shërbime të plota Hausmeister për prona, ndërtesa dhe hapësira të përbashkëta." },
];

const projects = [
  { img: "assets/project-1.jpg", title: "Gehweg-Verlegung", tag: "Shtigje me gurë" },
  { img: "assets/project-2.jpg", title: "Blumenbeet", tag: "Mbjellje lulesh" },
  { img: "assets/project-3.jpg", title: "Rasenpflege", tag: "Mirëmbajtje bari" },
  { img: "assets/project-4.jpg", title: "Hofdekoration", tag: "Dekorim oborri" },
];

// ---------- Render ----------
document.getElementById("services-grid").innerHTML = services.map((s, i) => `
  <div class="card service reveal" style="transition-delay:${i * 60}ms">
    <div class="icon">${s.icon}</div>
    <h3>${s.title}</h3>
    <p class="muted">${s.desc}</p>
  </div>`).join("");

document.getElementById("projects-grid").innerHTML = projects.map((p, i) => `
  <div class="project reveal" style="transition-delay:${i * 60}ms">
    <img src="${p.img}" alt="${p.title}" loading="lazy" />
    <div class="project-info">
      <p class="tag">${p.tag}</p>
      <h3>${p.title}</h3>
    </div>
  </div>`).join("");

// ---------- Navbar scroll ----------
const navbar = document.getElementById("navbar");
const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll);

// ---------- Mobile menu ----------
const menu = document.getElementById("mobile-menu");
document.getElementById("menu-toggle").addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));

// ---------- Scroll reveal ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------- Toast ----------
const toast = document.getElementById("toast");
let toastTimer;
function showToast(msg, isError) {
  toast.textContent = msg;
  toast.classList.toggle("error", !!isError);
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// ---------- Contact form ----------
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) { showToast("Ju lutemi plotësoni të gjitha fushat.", true); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast("Ju lutemi shkruani një email të vlefshëm.", true); return; }
  showToast("Faleminderit! Mesazhi juaj u dërgua me sukses.");
  e.target.reset();
});

// ---------- Year ----------
document.getElementById("year").textContent = new Date().getFullYear();

