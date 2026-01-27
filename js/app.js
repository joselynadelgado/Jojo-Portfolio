// =========================
// <!!> Project data
// =========================
const projects = {
  caguas: {
    title: "Soy de Caguas",
    hero: "images/Caguas/IMG_4121.jpg",
    leftCol: [
      ["Client", "Deerfield Academy"],
      ["Role", "Design / Production"],
      ["Year", "2025"],
    ],
    rightCol: ["Short project description goes here. Keep it to a few lines."],
    gallery: [
      {
        type: "image",
        src: "images/Caguas/IMG_4121.jpg",
        alt: "Soy de Caguas",
      },
    ],
  },

  buttons: {
    title: "Buttons",
    hero: "images/London/IMG_6896.jpg",
    leftCol: [
      ["Project", "Button Collection"],
      ["Role", "Photography"],
      ["Year", "2024"],
    ],
    rightCol: ["Another description here."],
    gallery: [
      {
        type: "image",
        src: "images/London/IMG_6896.jpg",
        alt: "Buttons",
      },
    ],
  },

  beer: {
    title: "Beer Can",
    hero: "images/Beer/can1.png",
    leftCol: [
      ["Role", "Design"],
      ["Year", "2024"],
    ],
    rightCol: ["Description..."],
    gallery: [
      {
        type: "image",
        src: "images/Beer/can1.png",
        alt: "Beer can",
      },
    ],
  },

  deerfield: {
    title: "Invitation",
    hero: "images/Deerfield/1797/IMG_3826.jpeg",
    leftCol: [
      ["Role", "Design"],
      ["Year", "2025"],
    ],
    rightCol: ["Description..."],
    gallery: [
      {
        type: "image",
        src: "images/Deerfield/1797/IMG_3826.jpeg",
        alt: "Invitation",
      },
    ],
  },

  punchy: {
    title: "Punchy Sans",
    hero: "images/Punchy/punchy5.png",
    leftCol: [
      ["Role", "Type"],
      ["Year", "2024"],
    ],
    rightCol: ["Description..."],
    gallery: [
      {
        type: "image",
        src: "images/Punchy/punchy5.png",
        alt: "Punchy Sans",
      },
    ],
  },

  kaleidoscope: {
    title: "Kaleidoscope",
    hero: "images/Kaleidoscope/IMG_5457.jpg",
    leftCol: [
      ["Role", "Design"],
      ["Year", "2024"],
    ],
    rightCol: ["Description..."],
    gallery: [
      {
        type: "image",
        src: "images/Kaleidoscope/IMG_5457.jpg",
        alt: "Kaleidoscope",
      },
    ],
  },

  radical: {
    title: "Radical Modernisms",
    hero: "images/Radical/radical.png",
    leftCol: [
      ["Role", "Design"],
      ["Year", "2024"],
    ],
    rightCol: ["Description..."],
    gallery: [
      {
        type: "image",
        src: "images/Radical/radical.png",
        alt: "Radical Modernisms",
      },
    ],
  },

  buckland: {
    title: "Buckland Billiards",
    hero: "images/BBB/Mockups/cue.png",
    leftCol: [
      ["Role", "Design"],
      ["Year", "2024"],
    ],
    rightCol: ["Description..."],
    gallery: [
      {
        type: "image",
        src: "images/BBB/Mockups/cue.png",
        alt: "Cue ball",
      },
    ],
  },

  questions: {
    title: "7 Questions",
    hero: "images/Questions/IMG_4185.jpg",
    leftCol: [
      ["Role", "Design"],
      ["Year", "2024"],
    ],
    rightCol: ["Description..."],
    gallery: [
      {
        type: "image",
        src: "images/Questions/IMG_4185.jpg",
        alt: "7 Questions spreads",
      },
    ],
  },

  motion: {
    title: "Motion",
    hero: "images/Motion/LIAE/Debut-Album.mp4",
    leftCol: [
      ["Role", "Motion"],
      ["Year", "2024"],
    ],
    rightCol: ["Description..."],
    gallery: [{ type: "video", src: "images/Motion/LIAE/Debut-Album.mp4" }],
  },
};

// =========================
// <!!> DOM hooks
// =========================
const featuredGrid = document.getElementById("featured-grid");
const detail = document.getElementById("project-detail");
const main = document.getElementById("main");
const homeLink = document.getElementById("home-link");

// <!!> Mobile pager (MUST exist in your HTML)
const pager = document.getElementById("mobile-pager");
const pagerPrev = document.getElementById("pager-prev");
const pagerNext = document.getElementById("pager-next");

// =========================
// <!!> State
// =========================
let currentSlug = null;
let bottomObserver = null;

// =========================
// <!!> Helpers
// =========================

// <!!> Sidebar order = whatever order the sidebar thumbs appear in
function getProjectOrder() {
  return Array.from(document.querySelectorAll(".project-thumb.small[data-slug]"))
    .map((el) => el.dataset.slug)
    .filter(Boolean);
}

function disconnectBottomObserver() {
  if (!bottomObserver) return;
  bottomObserver.disconnect();
  bottomObserver = null;
}

// =========================
// <!!> Mode switching
// =========================
function setModeHome({ push = true } = {}) {
  document.body.classList.remove("is-project");
  document.body.classList.add("is-home");

  currentSlug = null;
  detail.innerHTML = "";

  // <!!> Desktop shows featured grid; mobile hides it via CSS
  if (featuredGrid) featuredGrid.style.display = "";

  // <!!> Hide pager on home
  if (pager) {
    pager.classList.remove("is-visible");
    pager.setAttribute("aria-hidden", "true");
  }

  // <!!> Clear active state
  document
    .querySelectorAll(".project-thumb.is-active")
    .forEach((el) => el.classList.remove("is-active"));

  disconnectBottomObserver();

  if (push) history.pushState({}, "", "./");
  if (main) main.scrollTop = 0;
}

function setModeProject() {
  document.body.classList.add("is-project");
  document.body.classList.remove("is-home");

  // <!!> Hide featured grid on desktop when in a project
  if (featuredGrid) featuredGrid.style.display = "none";
}

// =========================
// <!!> Pager reveal (only when at bottom)
// =========================
function setupBottomReveal() {
  if (!pager) return;

  // <!!> Sentinel is rendered inside project HTML in renderProject()
  const sentinel = document.getElementById("pager-sentinel");
  if (!sentinel) return;

  disconnectBottomObserver();

  bottomObserver = new IntersectionObserver(
    (entries) => {
      const isAtBottom = entries.some((e) => e.isIntersecting);
      pager.classList.toggle("is-visible", isAtBottom);
      pager.setAttribute("aria-hidden", isAtBottom ? "false" : "true");
    },
    {
      // <!!> Desktop: main scrolls; Mobile: root=null uses viewport
      root: main || null,
      threshold: 0.1,
    }
  );

  bottomObserver.observe(sentinel);
}

function updatePagerButtons() {
  if (!pagerPrev || !pagerNext) return;

  const order = getProjectOrder();
  const idx = order.indexOf(currentSlug);

  const prevSlug = idx > 0 ? order[idx - 1] : null;
  const nextSlug = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;

  pagerPrev.disabled = !prevSlug;
  pagerNext.disabled = !nextSlug;

  pagerPrev.dataset.to = prevSlug || "";
  pagerNext.dataset.to = nextSlug || "";
}

// =========================
// <!!> Render
// =========================
function renderProject(slug, { push = true } = {}) {
  const p = projects[slug];
  if (!p) return;

  currentSlug = slug;
  setModeProject();

  // <!!> Highlight active thumb (sidebar + featured grid)
  document.querySelectorAll(".project-thumb[data-slug]").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.slug === slug);
  });

  const leftHtml = (p.leftCol || [])
    .map(([label, value]) => `<p><strong>${label}:</strong> ${value}</p>`)
    .join("");

  const rightHtml = (p.rightCol || [])
    .map((para) => `<p>${para}</p>`)
    .join("");

  const galleryHtml = (p.gallery || [])
    .map((item) => {
      if (item.type === "video") {
        return `
          <video controls playsinline>
            <source src="${item.src}" type="video/mp4">
          </video>
        `;
      }
      return `<img src="${item.src}" alt="${item.alt || ""}">`;
    })
    .join("");

  detail.innerHTML = `
    <img class="project-hero" src="${p.hero}" alt="${p.title}">

    <div class="project-meta">
      <div>${leftHtml}</div>
      <div>${rightHtml}</div>
    </div>

    <div class="project-gallery">
      ${galleryHtml}
    </div>

    <!-- Sentinel: when this is visible, show pager -->
    <div id="pager-sentinel" style="height: 1px;"></div>
  `;

  // <!!> Always jump to top when switching projects
  if (main) main.scrollTop = 0; // desktop (center column scroll)
  window.scrollTo(0, 0);        // mobile (page scroll)

  if (push) history.pushState({ slug }, "", `./#${slug}`);

  updatePagerButtons();
  setupBottomReveal();
}

// =========================
// <!!> Events
// =========================

// <!!> Click any thumbnail (featured grid or sidebar)
document.addEventListener("click", (e) => {
  const thumb = e.target.closest(".project-thumb[data-slug]");
  if (!thumb) return;

  const slug = thumb.dataset.slug;
  if (slug) renderProject(slug);
});

// <!!> Name goes home
if (homeLink) {
  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    setModeHome();
  });
}

// <!!> Pager buttons click
if (pager) {
  pager.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-to]");
    if (!btn) return;

    e.preventDefault();
    const to = btn.dataset.to;
    if (to) renderProject(to);
  });
}

// <!!> Back/forward support
window.addEventListener("popstate", (e) => {
  const slug =
    e.state?.slug || (location.hash ? location.hash.replace("#", "") : "");

  if (slug && projects[slug]) renderProject(slug, { push: false });
  else setModeHome({ push: false });
});

// =========================
// <!!> Init
// =========================
(function init() {
  const slug = location.hash ? location.hash.replace("#", "") : "";

  if (slug && projects[slug]) {
    history.replaceState({ slug }, "", `./#${slug}`);
    renderProject(slug, { push: false });
  } else {
    setModeHome({ push: false });
  }
})();
