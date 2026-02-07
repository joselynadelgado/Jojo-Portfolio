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
      `<i>Soy de Caguas</i> began as an interview-based publication exploring personal history through conversation. I interviewed my grandmother about her upbringing in Puerto Rico and her experience moving to the United States, then translated that dialogue into a printed narrative. When closed, the book reveals layered edges—serving as a metaphor for peeling back the layers of her story. Each page includes full translations of english and spanish, and archival photographs from her personal collection were used throughout to ground the publication in memory and material history.<br>
      <a class="project-award" href="https://winning.work/work/2300-i-was-born-in-caguas" target="_blank" rel="noopener">
         CADC Gold Award, 2023
       </a>`,
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
    leftCol: [
      ["Title", "London Circles"],
      ["Project", "Publication, Buttons"],
    ],
    rightCol: [
      `<i>London Circles</i> began as a self-directed exploration of collecting and organizing visual material in public space. I photographed every circle I encountered throughout London—chosen for its simplicity and frequency—resulting in an archive of over 100 images. The challenge was to impose structure without diminishing variation, allowing subtle differences in surface, context, and use to emerge through comparison. I designed two publications in which each spread features a single, full-bleed circle, encouraging a slow, sequential reading of the collection, and extended the system into a series of hand-pressed buttons to explore how repetition and constraint translate into physical form.<br>
       <a class="project-award" href="https://winning.work/work/2313-london-circles" target="_blank" rel="noopener">
         CADC Silver Award, 2023
       </a>`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/London/IMG_4189.jpeg", alt: "London Circles book covers" },
      { type: "image", src: "images/London/IMG_4192.jpeg", alt: "London Circles book covers" },
      { type: "image", src: "images/London/IMG_4196.jpeg", alt: "London Circles spreads", full: true },
      { type: "image", src: "images/London/IMG_6897.jpg", alt: "London Circles buttons" },
      { type: "image", src: "images/London/IMG_6946.jpeg", alt: "London Circles open studios" },
    ],
  },

  beer: {
    title: "Beer Can",
    hero: "images/Beer/can1.png",
    leftCol: [
      ["Client", "Recess in Chicago"],
      ["Project", "Packaging design"],
    ],
    rightCol: [
      `This beer can design was created for Recess, with the goal of visually expressing the brand’s idea of recess as a moment of escape. I leaned into a surreal, celestial direction, using koi fish swimming through a cloud-filled night sky to suggest a dreamlike departure from everyday reality. The hazy purple palette and floating elements reinforce an in-between state—part playful, part mysterious—mirroring the feeling of stepping briefly outside routine. The result is a bold, illustrative label that balances whimsy and atmosphere while remaining visually distinctive on the shelf.`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Beer/can2.png", alt: "Beer can artwork" },
      { type: "image", src: "images/Beer/can4.png", alt: "Beer can artwork" },
    ],
  },

  deerfield: {
    title: "Game",
    hero: "images/Deerfield/Game/gamebox-outside.jpg",
    leftCol: [
      ["Client", "Deerfield Academy"],
      ["Art Director", "Brent Hale"],
    ],
    rightCol: [
      `As part of Deerfield Academy’s admissions acceptance package, we created an immersive, interactive experience designed to introduce admitted students to campus life before they arrived. Working under an art director, I led the graphic design for 101 Things to Do at Deerfield Before You Graduate, a custom board game that reframed the acceptance letter as an experience rather than a piece of mail. The project combined playful illustration, clear information design, and production-forward details—including custom game components, foil-printed artwork, and accompanying merch—to balance excitement for students with clarity for families. The final package generated significant engagement across social media and won multiple awards, reinforcing Deerfield’s sense of community while making the decision to enroll feel personal and celebratory.<br>
      <a class="project-award" href="https://www.case.org/awards/circle-excellence/2025/101-things-never-bored-boarding-school-board-game" target="_blank" rel="noopener">
         CASE Gold Award, 2025
       </a> <br>
       <a class="project-award" href="https://www.idesignawards.com/winners/zoom.php?eid=9-59167-24" target="_blank" rel="noopener">
         IDA Honorable Mention Award 2025
       </a>`,
    ],
    gallery: [
      { type: "image", src: "images/Deerfield/Game/gamebox-cover.jpg", alt: "Game box" },
      { type: "image", src: "images/Deerfield/Game/gamebox-close.jpg", alt: "Game box" },
      { type: "image", src: "images/Deerfield/Game/gamebox-open.jpg", alt: "Game box" },
      { type: "image", src: "images/Deerfield/Game/gamebox-outside.jpg", alt: "Game box", full: true },
    ],
  },

  punchy: {
    title: "Punchy Sans",
    hero: "images/Punchy/punchy5.png",
    leftCol: [
      ["Title", "Punchy Sans"],
      ["Project", "Type"],
    ],
    rightCol: [
      `Description...`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Punchy/punchy5.png", alt: "Punchy Sans", full: true },
    ],
  },

  kaleidoscope: {
    title: "Kaleidoscope",
    hero: "images/Kaleidoscope/IMG_5457.jpg",
    leftCol: [
      ["Title", "Kaleidoscope"],
      ["Project", "Design"],
    ],
    rightCol: [
      `Description...`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Kaleidoscope/IMG_5457.jpg", alt: "Kaleidoscope", full: true },
    ],
  },

  radical: {
    title: "Radical Modernisms",
    hero: "images/Radical/radical.png",
    leftCol: [
      ["Title", "Radical Modernisms"],
      ["Project", "Design"],
    ],
    rightCol: [
      `Description...`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Radical/radical.png", alt: "Radical Modernisms", full: true },
    ],
  },

  buckland: {
    title: "Buckland Billiards",
    hero: "images/BBB/Mockups/cue.png",
    leftCol: [
      ["Title", "Buckland Billiards"],
      ["Project", "Branding / Design"],
    ],
    rightCol: [
      `Description...`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/BBB/Mockups/cue.png", alt: "Buckland Billiards cue ball", full: true },
    ],
  },

  questions: {
    title: "7 Questions",
    hero: "images/Questions/IMG_4185.jpg",
    leftCol: [
      ["Title", "7 Questions"],
      ["Project", "Publication"],
    ],
    rightCol: [
      `Description...`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Questions/IMG_4185.jpg", alt: "7 Questions spreads", full: true },
    ],
  },

  motion: {
    title: "Motion",
    hero: "images/Motion/LIAE/Debut-Album.mp4",
    leftCol: [
      ["Title", "Motion"],
      ["Project", "Video / Motion"],
    ],
    rightCol: [
      `Description...`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "video", src: "images/Motion/LIAE/Debut-Album.mp4", full: true },
      { type: "video", src: "images/Motion/LIAE/Debut-Album.mp4" },
      { type: "video", src: "images/Motion/LIAE/Debut-Album.mp4" },
    ],
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
  lightboxImg.alt = "";
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
  if (!pagerPrev || !pagerNext) return;

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

  const leftHtml = (p.leftCol || [])
    .map(([l, v]) => `<p><strong>${l}:</strong> ${v}</p>`)
    .join("");

  const rightHtml = (p.rightCol || [])
    .map((t) => `<p>${t}</p>`)
    .join("");

  const galleryHtml = (p.gallery || [])
    .map((item, i) => {
      const isFull = !!item.full || (i === 0 && p.galleryFullFirst !== false);
      const cls = `gallery-item${isFull ? " full" : ""}`;

      if (item.type === "video") {
        return `
          <div class="${cls}">
            <video controls playsinline>
              <source src="${item.src}" type="video/mp4">
            </video>
          </div>
        `;
      }

      return `
        <div class="${cls}">
          <img src="${item.src}" alt="${item.alt || ""}">
        </div>
      `;
    })
    .join("");

  detail.innerHTML = `
    <img class="project-hero" src="${p.hero}" alt="${p.title}">
    <div class="project-meta">
      <div>${leftHtml}</div>
      <div>${rightHtml}</div>
    </div>
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
  // Lightbox: click gallery images
  const galleryImg = e.target.closest(".project-gallery img");
  if (galleryImg) {
    openLightbox(galleryImg.src, galleryImg.alt || "");
    return;
  }

  // Navigation: click thumbs
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
  if (slug && projects[slug]) renderProject(slug, { push: false });
  else setModeHome({ push: false });
});

// =========================
// Init
// =========================
(function init() {
  const slug = location.hash.replace("#", "");
  if (slug && projects[slug]) renderProject(slug, { push: false });
  else setModeHome({ push: false });
})();
