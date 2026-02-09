// =========================
// Project data
// =========================
const projects = {
about: {
  title: "About",
  leftCol: [
    ["Where I've worked...", "<br> Deerfield Academy // 2023 → Current <br> Tees & More // Summer 2022"],
    ["Where I've learned...", "<br> UConn (go huskies) // 2023 <br> CSM (London, innit) // Fall 2022"],
    ["Recognitions...", "<br>link"],
    ["Interests include...", "<br> Vintage photobooths, collecting owl trinkets, modern soul music, & guinness"],
    [
  "What I'm currently listening to...",
  `<br><a href="https://open.spotify.com/playlist/5xSGEiqf37kZJHW5fbbrZO?si=4a9e6de1827449a6" target="_blank" rel="noopener">
    For my spotify friends only ;-)
  </a>`
],
    [
  "Say hey...",
  `<br><a href="https://www.linkedin.com/in/jojo-delgado" target="_blank" rel="noopener">
    Linkedin
  </a>`
],

  ],
  rightCol: [
    `I’m a graphic designer who’s drawn to concept-driven work, thoughtful systems, and projects that live somewhere between structure and play. I’m especially interested in how design can translate ideas, research, and stories into visuals that feel intuitive, engaging, and human.`,
    `"A [Jill] of all trades is a master of none, but oftentimes better than a master of one."`,
    `<img class="about-photo" src="images/About/photobooth.jpg" alt="Jojo photo">`,
  ],
  // no hero
  // no gallery
},


  game: {
    title: "Game",
    hero: "images/Deerfield/Game/gamebox-outside.jpg",
    leftCol: [
      ["Client » ", "Deerfield Academy"],
      ["Art Director » ", "Brent Hale"],
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
    ],
  },


  caguas: {
    title: "Soy de Caguas",
    hero: "images/Caguas/IMG_4121.jpg",
    leftCol: [
      ["Title » ", "I was born in / Soy de Caguas"],
      ["Project » ", "Publication"],
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


  beer: {
    title: "Beer Can",
    hero: "images/Beer/can1.png",
    leftCol: [
      ["Client » ", "Recess in Chicago"],
      ["Project » ", "Packaging design"],
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

  buttons: {
    title: "Buttons",
    hero: "images/London/IMG_6896.jpg",
    leftCol: [
      ["Title » ", "London Circles"],
      ["Project » ", "Publication, Buttons"],
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


  deerfield: {
    title: "Deerfield Academy",
    hero: "images/Deerfield/Doodles/IMG_4127.jpeg",
    leftCol: [
      ["Client » ", "Deerfield Academy"],
      ["Project » ", "Admissions swag"],
    ],
    rightCol: [
      `Deerfield Doodles is an illustrated visual system created for Deerfield Academy that brings together school landmarks, traditions, and everyday moments into a playful, cohesive language. Designed to feel youthful and approachable for students while still polished enough for parents and alumni, the illustrations balance charm with clarity. The system was intentionally flexible, allowing the artwork to scale across a wide range of applications—from tote bags and chocolate bars to water bottles and beach towels—without losing cohesion. By creating a modular set of icons and scenes, the project supports consistent storytelling across merchandise and communications while keeping the tone light, energetic, and welcoming.`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Deerfield/Doodles/IMG_4138.jpeg", alt: "Tote bag" },
      { type: "image", src: "images/Deerfield/Doodles/IMG_4136.jpeg", alt: "Tote bag" },
      { type: "image", src: "images/Deerfield/Doodles/tuck1.PNG", alt: "chcolate bar" },
      { type: "image", src: "images/Deerfield/Doodles/tuck3.PNG", alt: "chocolate bar" },
      { type: "image", src: "images/Deerfield/Doodles/towel.png", alt: "beach towel", full: true },
      { type: "image", src: "images/Deerfield/Doodles/IMG_4141.jpeg", alt: "water bottle" },
      { type: "image", src: "images/Deerfield/Doodles/IMG_6233.jpeg", alt: "towels" },

    ],
  },


  punchy: {
    title: "Punchy Sans",
    hero: "images/Punchy/punchy5.png",
    leftCol: [
      ["Title » ", "Punchy Sans"],
      ["Project » ", "Type Design"],
    ],
    rightCol: [
      `Punchy Sans is a custom typeface developed through an exploration of ecography—the relationship between language, environment, and material process. Instead of designing purely on screen, I physically constructed the letterforms by hole-punching each character and assembling them into a large, taped specimen sheet. By using light as a compositional tool, the punched forms cast shadows that reveal a second, hidden typeface beneath the first, allowing both to exist simultaneously. The resulting specimen turns type into a spatial, tactile experience, where absence, material, and environment play as much of a role as the letterforms themselves. <br>
      <a class="project-award" href="https://winning.work/work/2331-punchy-sans-typeface" target="_blank" rel="noopener">
         CADC Excellence Award 2023
       </a>`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Punchy/punchy4.png", alt: "Punchy Sans", full: true },
      { type: "image", src: "images/Punchy/punchy1.png", alt: "Punchy Sans" },
      { type: "image", src: "images/Punchy/punchy2.png", alt: "Punchy Sans" },
      { type: "image", src: "images/Punchy/punchy3.png", alt: "Punchy Sans", full: true },
    ],
  },

  kaleidoscope: {
    title: "Kaleidoscope",
    hero: "images/Kaleidoscope/IMG_5457.jpg",
    leftCol: [
      ["Title » ", "Kaleidoscope"],
      ["Project » ", "Industrial Design"],
    ],
    rightCol: [
      `This project explores interaction, movement, and light as core design elements. Designed as a physical, hands-on experience, the piece features two large, rotating color wheels made from layered acrylic that invite viewers to touch, spin, and experiment. When light passes through the wheels, overlapping colors cast shifting, kaleidoscopic shadows onto the surrounding space. By changing the direction and speed of each wheel, viewers actively shape the visual outcome, turning the piece into a constantly evolving display. The goal was to create something intuitive and playful—an object that rewards curiosity and encourages engagement through simple, tactile interaction.`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Kaleidoscope/IMG_5441.jpg", alt: "Kaleidoscope" },
      { type: "image", src: "images/Kaleidoscope/IMG_5448.jpg", alt: "Kaleidoscope" },
      { type: "image", src: "images/Kaleidoscope/IMG_5442.jpg", alt: "Kaleidoscope", full: true },
      { type: "image", src: "images/Kaleidoscope/IMG_5452.jpg", alt: "Kaleidoscope" },
      { type: "image", src: "images/Kaleidoscope/IMG_5451.jpg", alt: "Kaleidoscope" },
      { type: "image", src: "images/Kaleidoscope/IMG_5449.jpg", alt: "Kaleidoscope", full: true },
    ],
  },



  radical: {
    title: "Radical Modernisms",
    hero: "images/Radical/radical.png",
    leftCol: [
      ["Title » ", "Radical Modernisms"],
      ["Project » ", "Publication"],
    ],
    rightCol: [
      `Radical Modernisms is a collaborative publication project inspired by the work and teaching of Dan Friedman, whose experimental approach to type and structure encouraged designers to challenge conventions. For this book, each contributor designed an individual eight-spread section, exploring personal interpretations of modernism through editorial and typographic decisions. The project required coordination across multiple contributors while maintaining a cohesive editorial rhythm and visual language, balancing individual expression with shared structure. The book was hand-sewn, reinforcing its crafted, process-driven nature and reflecting a mindful engagement with material and form. <br>
      <a class="project-award" href="https://winning.work/work/1995-radical-modernisms" target="_blank" rel="noopener">
         CADC Spirit of Creativity Award 2022
       </a>`,,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/Radical/IMG_3778.png", alt: "Radical Modernisms", full: true },
      { type: "image", src: "images/Radical/IMG_3779.png", alt: "Radical Modernisms" },
      { type: "image", src: "images/Radical/IMG_3780.png", alt: "Radical Modernisms" },
    ],
  },

  buckland: {
    title: "Buckland Billiards",
    hero: "images/BBB/Mockups/cue.png",
    leftCol: [
      ["Client » ", "Buckland Billiards"],
      ["Project » ", "Branding / Design"],
    ],
    rightCol: [
      `Buckland Billiards & Bar needed a refreshed visual identity that better represented the space and avoided unintended visual distractions present in the previous logo. The rebrand focused on clarity, balance, and legibility, simplifying the mark while retaining cues tied to billiards and bar culture. Through refined typography and a more intentional symbol system, the updated logo feels confident and approachable rather than confusing or overly literal. The result is a cleaner, more versatile identity that works across signage, print, and digital applications while presenting the business in a way that feels modern, intentional, and aligned with its atmosphere.`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "image", src: "images/BBB/Mockups/shirt.png", alt: "Buckland Billiards brand" },
      { type: "image", src: "images/BBB/Mockups/coaster.png", alt: "Buckland Billiards brand" },
      { type: "image", src: "images/BBB/Mockups/napkins.png", alt: "Buckland Billiards brand" },
      { type: "image", src: "images/BBB/Mockups/hat.png", alt: "Buckland Billiards brand" },
      { type: "image", src: "images/BBB/Mockups/paper.png", alt: "Buckland Billiards brand" },
      { type: "image", src: "images/BBB/Mockups/beer.png", alt: "Buckland Billiards brand" },
    ],
  },


  motion: {
    title: "Motion",
    leftCol: [
      ["Project » ", "Motion graphics"],
    ],
    rightCol: [
      `A collection of motion graphics and looping animations created in After Effects, focused on translating static design concepts into movement through timing, rhythm, and form.`,
    ],
    galleryFullFirst: false,
    gallery: [
      { type: "video", src: "images/Motion/fizzi/fizzi-music.mp4", loop: true },
      { type: "video", src: "images/Motion/taco/taco-tuesday.mp4", loop: true },
      { type: "video", src: "images/Motion/LIAE/FUI-Render.mp4", loop: true },
      { type: "video", src: "images/Motion/LIAE/Astral-Projection.mp4", loop: true },
      { type: "video", src: "images/Motion/LIAE/Parallax.mp4", full: true, loop: true  },
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
const aboutLink = document.getElementById("about-link");


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

  if (pager) {
    pager.classList.remove("is-visible");
    pager.setAttribute("aria-hidden", "true");
  }
  disconnectBottomObserver();


  currentSlug = slug;
  setModeProject();

  document.querySelectorAll(".project-thumb[data-slug]")
    .forEach((el) => el.classList.toggle("is-active", el.dataset.slug === slug));

  const leftHtml = (p.leftCol || [])
    .map(([l, v]) => `<p><strong>${l}</strong> ${v}</p>`)
    .join("");

  const rightHtml = (p.rightCol || [])
  .map((t) => {
    const s = String(t).trim();
    // If they gave raw HTML (like <img ...>), don't wrap in <p>
    if (s.startsWith("<")) return s;
    return `<p>${t}</p>`;
  })
  .join("");


  const galleryHtml = (p.gallery || [])
    .map((item, i) => {
      const isFull = !!item.full || (i === 0 && p.galleryFullFirst !== false);
      const cls = `gallery-item${isFull ? " full" : ""}`;

      if (item.type === "video") {
  return `<div class="${cls}">
    <video
      controls
      playsinline
      ${item.loop ? "loop" : ""}
    >
      <source src="${item.src}" type="video/mp4">
    </video>
  </div>`;
}


      return `
        <div class="${cls}">
          <img src="${item.src}" alt="${item.alt || ""}">
        </div>
      `;
    })
    .join("");

  const heroHtml = p.hero
  ? `<img class="project-hero" src="${p.hero}" alt="${p.title}">`
  : "";

detail.innerHTML = `
  ${heroHtml}
  <div class="project-meta">
    <div>${leftHtml}</div>
    <div>${rightHtml}</div>
  </div>
  <div class="project-gallery">${galleryHtml}</div>
  <div id="pager-sentinel" style="height:1px"></div>
`;


  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);

  if (push) {
  if (slug === "about") {
    history.pushState({ slug }, "", "./#about");
  } else {
    // keep projects clean so refresh goes home
    history.pushState({ slug }, "", "./");
  }
}


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

if (aboutLink) {
  aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    renderProject("about");
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
