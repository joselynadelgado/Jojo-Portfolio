// =========================
// Project data
// =========================
const projects = {
  caguas: {
    title: "Soy de Caguas",
    hero: "images/Caguas/IMG_4121.jpg",
    leftCol: [
      ["Title", "I was born in / Soy de Caguas"],
      ["Project", "Publication"],
    ],
    rightCol: [
      `A conversation with my grandmother about her upbringing in Puerto Rico and experience moving to the US.<br>
       <a class="project-award" href="https://winning.work/work/2300-i-was-born-in-caguas" target="_blank" rel="noopener">
         CADC Gold Award, 2023
       </a>`
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Caguas/IMG_4093.jpg", alt: "Soy de Caguas spread" },
      { type: "image", src: "images/Caguas/IMG_4098.jpg", alt: "Soy de Caguas spread" },
      { type: "image", src: "images/Caguas/IMG_4104.jpg", alt: "Soy de Caguas spread", full: true },
      { type: "image", src: "images/Caguas/IMG_4107.jpg", alt: "Soy de Caguas spread" },
      { type: "image", src: "images/Caguas/IMG_4111.jpg", alt: "Soy de Caguas spread" },
    ],
  },

  buttons: {
    title: "Buttons",
    hero: "images/London/IMG_6896.jpg",
    leftCol: [["Project", "Button Collection"], ["Role", "Photography"], ["Year", "2024"]],
    rightCol: ["Another description here."],
    gallery: [{ type: "image", src: "images/London/IMG_6896.jpg", alt: "Buttons" }],
  },

  beer: {
    title: "Beer Can",
    hero: "images/Beer/can1.png",
    leftCol: [["Role", "Design"], ["Year", "2024"]],
    rightCol: ["Description..."],
    gallery: [{ type: "image", src: "images/Beer/can1.png", alt: "Beer can" }],
  },

  deerfield: {
    title: "Invitation",
    hero: "images/Deerfield/1797/IMG_3826.jpeg",
    leftCol: [["Role", "Design"], ["Year", "2025"]],
    rightCol: ["Description..."],
    gallery: [{ type: "image", src: "images/Deerfield/1797/IMG_3826.jpeg", alt: "Invitation" }],
  },

  punchy: {
    title: "Punchy Sans",
    hero: "images/Punchy/punchy5.png",
    leftCol: [["Role", "Type"], ["Year", "2024"]],
    rightCol: ["Description..."],
    gallery: [{ type: "image", src: "images/Punchy/punchy5.png", alt: "Punchy Sans" }],
  },

  kaleidoscope: {
    title: "Kaleidoscope",
    hero: "images/Kaleidoscope/IMG_5457.jpg",
    leftCol: [["Role", "Design"], ["Year", "2024"]],
    rightCol: ["Description..."],
    gallery: [{ type: "image", src: "images/Kaleidoscope/IMG_5457.jpg", alt: "Kaleidoscope" }],
  },

  radical: {
    title: "Radical Modernisms",
    hero: "images/Radical/radical.png",
    leftCol: [["Role", "Design"], ["Year", "2024"]],
    rightCol: ["Description..."],
    gallery: [{ type: "image", src: "images/Radical/radical.png", alt: "Radical Modernisms" }],
  },

  buckland: {
    title: "Buckland Billiards",
    hero: "images/BBB/Mockups/cue.png",
    leftCol: [["Role", "Design"], ["Year", "2024"]],
    rightCol: ["Description..."],
    gallery: [{ type: "image", src: "images/BBB/Mockups/cue.png", alt: "Cue ball" }],
  },

  questions: {
    title: "7 Questions",
    hero: "images/Questions/IMG_4185.jpg",
    leftCol: [["Role", "Design"], ["Year", "2024"]],
    rightCol: ["Description..."],
    gallery: [{ type: "image", src: "images/Questions/IMG_4185.jpg", alt: "7 Questions spreads" }],
  },

  motion: {
    title: "Motion",
    hero: "images/Motion/LIAE/Debut-Album.mp4",
    leftCol: [["Role", "Motion"], ["Year", "2024"]],
    rightCol: ["Description..."],
    gallery: [{ type: "video", src: "images/Motion/LIAE/Debut-Album.mp4" }],
  },
};

// =========================
// DOM hooks
// =========================
const featuredGrid = document.getElementById("featured-grid");
const detail = document.getElementById("project-detail");
const main = document.getElementById("main");
const homeLink = document.getElementById("home-link");

const pager = document.getElementById("mobile-pager");
const pagerPrev = document.getElementById("pager-prev");
const pagerNext = document.getElementById("pager-next");

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

// =========================
// State
// =========================
let currentSlug = null;
let bottomObserver = null;

// =========================
// Helpers
// =========================
function getProjectOrder() {
  return Array.from(document.querySelectorAll(".project-thumb.small[data-slug]"))
    .map((el) => el.dataset.slug)
    .filter(Boolean);
}

function disconnectBottomObserver() {
  if (bottomObserver) {
    bottomObserver.disconnect();
    bottomObserver = null;
  }
}

// =========================
// Lightbox helpers
// =========================
function openLightbox(src, alt = "") {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

// =========================
// Mode switching
// =========================
function setModeHome({ push = true } = {}) {
  document.body.classList.remove("is-project");
  document.body.classList.add("is-home");

  currentSlug = null;
  detail.innerHTML = "";
  if (featuredGrid) featuredGrid.style.display = "";

  if (pager) {
    pager.classList.remove("is-visible");
    pager.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll(".project-thumb.is-active")
    .forEach((el) => el.classList.remove("is-active"));

  disconnectBottomObserver();

  if (push) history.pushState({}, "", "./");
  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);
}

function setModeProject() {
  document.body.classList.add("is-project");
  document.body.classList.remove("is-home");
  if (featuredGrid) featuredGrid.style.display = "none";
}

// =========================
// Pager logic
// =========================
function setupBottomReveal() {
  if (!pager) return;
  const sentinel = document.getElementById("pager-sentinel");
  if (!sentinel) return;

  disconnectBottomObserver();

  bottomObserver = new IntersectionObserver(
    (entries) => {
      const show = entries.some((e) => e.isIntersecting);
      pager.classList.toggle("is-visible", show);
      pager.setAttribute("aria-hidden", show ? "false" : "true");
    },
    { root: main || null, threshold: 0.1 }
  );

  bottomObserver.observe(sentinel);
}

function updatePagerButtons() {
  const order = getProjectOrder();
  const idx = order.indexOf(currentSlug);
  pagerPrev.disabled = idx <= 0;
  pagerNext.disabled = idx === -1 || idx >= order.length - 1;
  pagerPrev.dataset.to = order[idx - 1] || "";
  pagerNext.dataset.to = order[idx + 1] || "";
}

// =========================
// Render project
// =========================
function renderProject(slug, { push = true } = {}) {
  const p = projects[slug];
  if (!p) return;

  currentSlug = slug;
  setModeProject();

  document.querySelectorAll(".project-thumb[data-slug]")
    .forEach((el) => el.classList.toggle("is-active", el.dataset.slug === slug));

  const leftHtml = (p.leftCol || []).map(
    ([l, v]) => `<p><strong>${l}:</strong> ${v}</p>`
  ).join("");

  const rightHtml = (p.rightCol || []).map((t) => `<p>${t}</p>`).join("");

  const galleryHtml = (p.gallery || []).map((item, i) => {
    const isFull = !!item.full || (i === 0 && p.galleryFullFirst !== false);
    const cls = `gallery-item${isFull ? " full" : ""}`;

    if (item.type === "video") {
      return `<div class="${cls}"><video controls playsinline><source src="${item.src}" type="video/mp4"></video></div>`;
    }
    return `<div class="${cls}"><img src="${item.src}" alt="${item.alt || ""}"></div>`;
  }).join("");

  detail.innerHTML = `
    <img class="project-hero" src="${p.hero}" alt="${p.title}">
    <div class="project-meta"><div>${leftHtml}</div><div>${rightHtml}</div></div>
    <div class="project-gallery">${galleryHtml}</div>
    <div id="pager-sentinel" style="height:1px"></div>
  `;

  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);
  if (push) history.pushState({ slug }, "", `./#${slug}`);

  updatePagerButtons();
  setupBottomReveal();
}

// =========================
// Events
// =========================
document.addEventListener("click", (e) => {
  const galleryImg = e.target.closest(".project-gallery img");
  if (galleryImg) {
    openLightbox(galleryImg.src, galleryImg.alt || "");
    return;
  }

  const thumb = e.target.closest(".project-thumb[data-slug]");
  if (thumb) renderProject(thumb.dataset.slug);
});

if (homeLink) {
  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    setModeHome();
  });
}

if (pager) {
  pager.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-to]");
    if (btn && btn.dataset.to) renderProject(btn.dataset.to);
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

window.addEventListener("popstate", (e) => {
  const slug = e.state?.slug || location.hash.replace("#", "");
  slug && projects[slug] ? renderProject(slug, { push: false }) : setModeHome({ push: false });
});

// =========================
// Init
// =========================
(function init() {
  const slug = location.hash.replace("#", "");
  slug && projects[slug]
    ? renderProject(slug, { push: false })
    : setModeHome({ push: false });
})();
