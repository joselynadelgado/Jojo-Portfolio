// =========================
// 1) PROJECT DATA
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
    rightCol: [
      "Short project description goes here. Keep it to a few lines.",
      "Add one more sentence if you want.",
    ],
    gallery: [
      { type: "image", src: "images/Caguas/IMG_4121.jpg", alt: "Soy de Caguas cover" },
      { type: "image", src: "images/Caguas/IMG_4121.jpg", alt: "Soy spread" },
      { type: "video", src: "images/Motion/LIAE/Debut-Album.mp4" },
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
    gallery: [{ type: "image", src: "images/London/IMG_6896.jpg", alt: "Buttons" }],
  },

  beer: {
    title: "Beer Can",
    hero: "images/Beer/can1.png",
    leftCol: [["Role", "Illustration"], ["Year", "2024"]],
    rightCol: ["Description here."],
    gallery: [{ type: "image", src: "images/Beer/can1.png", alt: "Beer can" }],
  },

  deerfield: {
    title: "Invitation",
    hero: "images/Deerfield/1797/IMG_3826.jpeg",
    leftCol: [["Client", "Deerfield Academy"], ["Year", "2025"]],
    rightCol: ["Description here."],
    gallery: [{ type: "image", src: "images/Deerfield/1797/IMG_3826.jpeg", alt: "Invitation" }],
  },
};

// =========================
// 2) DOM HOOKS
// =========================
const sidebar = document.getElementById("sidebar");
const detail = document.getElementById("project-detail");
const main = document.getElementById("main");
const featuredGrid = document.getElementById("featured-grid");
const homeLink = document.getElementById("home-link");

// Treat <= 768px as mobile (match your CSS media query)
const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

// =========================
// 3) HELPERS
// =========================
function setActiveThumb(slug) {
  document.querySelectorAll(".project-thumb.small[data-slug]").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.slug === slug);
  });
}

function clearActiveThumbs() {
  document.querySelectorAll(".project-thumb.small[data-slug]").forEach((el) => {
    el.classList.remove("is-active");
  });
}

function showHomeView() {
  // Mobile home state (your CSS should hide center on mobile via body.is-home)
  document.body.classList.add("is-home");

  // Clear project detail
  if (detail) detail.innerHTML = "";

  // IMPORTANT:
  // Only show featured grid on DESKTOP home.
  // On mobile, your layout uses the sidebar feed instead.
  if (featuredGrid) {
    featuredGrid.style.display = isMobile() ? "none" : "";
  }

  clearActiveThumbs();
}

function goHome(push = true) {
  showHomeView();

  if (push) {
    history.pushState({ slug: null }, "", "./");
  } else {
    history.replaceState({ slug: null }, "", "./");
  }
}

function renderProject(slug, push = true) {
  const p = projects[slug];
  if (!p) return;

  // Leaving home state
  document.body.classList.remove("is-home");

  // Hide featured grid while viewing a project (both desktop + mobile)
  if (featuredGrid) featuredGrid.style.display = "none";

  setActiveThumb(slug);

  const leftHtml = (p.leftCol || [])
    .map(([label, value]) => `<p><strong>${label}:</strong> ${value}</p>`)
    .join("");

  const rightHtml = (p.rightCol || []).map((para) => `<p>${para}</p>`).join("");

  const galleryHtml = (p.gallery || [])
    .map((item) => {
      if (item.type === "video") {
        return `
          <video autoplay muted loop playsinline controls>
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
  `;

  // Scroll center column to top
  if (main) main.scrollTop = 0;

  // Update URL (no reload)
  if (push) {
    history.pushState({ slug }, "", `./${slug}`);
  } else {
    history.replaceState({ slug }, "", `./${slug}`);
  }
}

// =========================
// 4) CLICK HANDLERS
// =========================

// Sidebar thumbnails open projects
sidebar?.addEventListener("click", (e) => {
  const thumb = e.target.closest(".project-thumb.small[data-slug]");
  if (!thumb) return;
  renderProject(thumb.dataset.slug, true);
});

// Featured grid thumbnails open projects (desktop)
featuredGrid?.addEventListener("click", (e) => {
  const thumb = e.target.closest(".project-thumb[data-slug]");
  if (!thumb) return;
  renderProject(thumb.dataset.slug, true);
});

// Name = home
homeLink?.addEventListener("click", (e) => {
  e.preventDefault();
  goHome(true);
});

// =========================
// 5) BACK / FORWARD
// =========================
window.addEventListener("popstate", (e) => {
  const slug = e.state?.slug;

  if (!slug) {
    goHome(false);
    return;
  }

  if (projects[slug]) {
    renderProject(slug, false);
  } else {
    goHome(false);
  }
});

// =========================
// 6) INIT FROM URL
// =========================
(function initFromUrl() {
  const path = location.pathname.replace(/\/+$/, "");
  const slug = path.split("/").pop();

  if (projects[slug]) {
    renderProject(slug, false);
  } else {
    goHome(false);
  }
})();

// =========================
// 7) HANDLE RESIZE (if you rotate phone / resize window)
// =========================
window.addEventListener("resize", () => {
  // If you're on home, keep it consistent with current breakpoint
  if (document.body.classList.contains("is-home")) {
    showHomeView();
  }
});
