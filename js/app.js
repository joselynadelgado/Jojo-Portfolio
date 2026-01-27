/* =========================
   app.js
   (replace your whole JS with this)
   Uses hash routing so it works on file:// and GitHub Pages.
========================= */

// 1) Project data (edit these as you add projects)
const projects = {
  caguas: {
    title: "Soy de Caguas",
    hero: "images/Caguas/IMG_4121.jpg",
    leftCol: [
      ["Client", "Deerfield Academy"],
      ["Role", "Design / Production"],
      ["Year", "2025"]
    ],
    rightCol: [
      "Short project description goes here. Keep it to a few lines.",
      "Add one more sentence if you want."
    ],
    gallery: [
      { type: "image", src: "images/Caguas/IMG_4121.jpg", alt: "Soy cover" }
      // add more images here
    ]
  },

  buttons: {
    title: "Buttons",
    hero: "images/London/IMG_6896.jpg",
    leftCol: [
      ["Project", "Button Collection"],
      ["Role", "Photography"],
      ["Year", "2024"]
    ],
    rightCol: [
      "Another description here."
    ],
    gallery: [
      { type: "image", src: "images/London/IMG_6896.jpg", alt: "Buttons" }
    ]
  },

  beer: {
    title: "Beer Can",
    hero: "images/Beer/can1.png",
    leftCol: [
      ["Project", "Beer label artwork"],
      ["Role", "Illustration / Design"],
      ["Year", "2024"]
    ],
    rightCol: [
      "Add a short description here."
    ],
    gallery: [
      { type: "image", src: "images/Beer/can1.png", alt: "Beer can" }
    ]
  },

  deerfield: {
    title: "Deerfield Invitation",
    hero: "images/Deerfield/1797/IMG_3826.jpeg",
    leftCol: [
      ["Client", "Deerfield Academy"],
      ["Role", "Design"],
      ["Year", "2025"]
    ],
    rightCol: [
      "Add a short description here."
    ],
    gallery: [
      { type: "image", src: "images/Deerfield/1797/IMG_3826.jpeg", alt: "Invitation" }
    ]
  },

  motion: {
    title: "Motion — Debut Album",
    hero: "images/Beer/can1.png", // swap to a real still if you want
    leftCol: [
      ["Type", "Motion"],
      ["Role", "Animation"],
      ["Year", "2025"]
    ],
    rightCol: [
      "Short motion project description here."
    ],
    gallery: [
      { type: "video", src: "images/Motion/LIAE/Debut-Album.mp4" }
    ]
  }
};

// 2) DOM hooks
const sidebar = document.getElementById("sidebar");
const detail = document.getElementById("project-detail");
const main = document.getElementById("main");
const featuredGrid = document.getElementById("featured-grid");
const homeLink = document.getElementById("home-link");


// 3) Render helper

function goHome() {
  detail.innerHTML = "";

  if (featuredGrid) featuredGrid.style.display = "grid";

  document.querySelectorAll(".project-thumb.small").forEach(el => {
    el.classList.remove("is-active");
  });

  main.scrollTop = 0;
  history.replaceState(null, "", location.pathname);
}



function renderProject(slug) {
  const p = projects[slug];
  if (!p) return;

  // Highlight active thumb
  document.querySelectorAll(".project-thumb.small[data-slug]").forEach(el => {
    el.classList.toggle("is-active", el.dataset.slug === slug);
  });

  // Hide the featured grid once a project is opened (Cargo-ish)
  if (featuredGrid) featuredGrid.style.display = "none";

  // Build left meta column
  const leftHtml = (p.leftCol || []).map(([label, value]) => {
    return `<p><strong>${label}:</strong> ${value}</p>`;
  }).join("");

  // Build right meta column
  const rightHtml = (p.rightCol || []).map(para => `<p>${para}</p>`).join("");

  // Build gallery
  const galleryHtml = (p.gallery || []).map(item => {
    if (item.type === "video") {
      return `
        <video autoplay muted loop playsinline controls>
          <source src="${item.src}" type="video/mp4">
        </video>
      `;
    }
    return `<img src="${item.src}" alt="${item.alt || ""}">`;
  }).join("");

  // Inject
  detail.innerHTML = `
    <img class="project-hero" src="${p.hero}" alt="${p.title}">
    <div class="project-meta">
      <div>${leftHtml}</div>
      <div>${rightHtml}</div>
    </div>
    <div class="project-gallery">
      ${galleryHtml}
    </div>
  `;

  // Scroll the CENTER column to top when switching projects
  main.scrollTop = 0;
}

// 4) Click handling (event delegation)
sidebar.addEventListener("click", (e) => {
  const thumb = e.target.closest(".project-thumb.small[data-slug]");
  if (!thumb) return;

  const slug = thumb.dataset.slug;
  renderProject(slug);

  // Hash routing (works locally + GitHub Pages)
  location.hash = slug;
});

featuredGrid.addEventListener("click", (e) => {
  const thumb = e.target.closest(".project-thumb[data-slug]");
  if (!thumb) return;

  const slug = thumb.dataset.slug;
  renderProject(slug);
  location.hash = slug;
});


// 5) Handle hash changes (back/forward)
window.addEventListener("hashchange", () => {
  const slug = location.hash.replace("#", "");
  if (projects[slug]) {
    renderProject(slug);
  } else {
    goHome();
  }
});


// 6) Load from hash on first load
(function initFromUrl() {
  const slug = location.hash.replace("#", "");
  if (projects[slug]) renderProject(slug);
})();

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  goHome();
});

