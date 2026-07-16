/* =========================================================================
   TO'Y TAKLIFNOMASI — logic (ikki tilli · двуязычный)
   Barcha matn/rasm/musiqa config.js faylidan olinadi.
   ========================================================================= */

(function () {
  const cfg = window.weddingConfig || {};
  const ui = cfg.ui || {};
  document.body.classList.add("locked");

  let lang = cfg.defaultLang === "ru" ? "ru" : "uz";

  const pick = (v) => {
    if (v && typeof v === "object" && ("uz" in v || "ru" in v)) return v[lang] ?? v.uz ?? "";
    return v;
  };

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
  };

  let twRunning = false; // typewriter ishlayaptimi

  function applyTexts() {
    setText("groomNameHero", cfg.groomName);
    setText("brideNameHero", cfg.brideName);
    if (!twRunning) {
      setText("coverGroom", cfg.groomName);
      setText("coverBride", cfg.brideName);
    }
    setText("heroDate", pick(cfg.displayDate));
    setText("coverDate", pick(cfg.displayDate));

    setText("inviteTitle", pick(cfg.inviteTitle));
    setText("inviteSubtitle", pick(cfg.inviteSubtitle));
    setText("welcomeMessage", pick(cfg.welcomeMessage));
    setText("detailDate", pick(cfg.displayDate));
    setText("detailTime", pick(cfg.displayTime));
    setText("venueName", pick(cfg.venueName));
    setText("venueAddress", pick(cfg.venueAddress));
    setText("footerMessage", pick(cfg.footerMessage));
    setText("footerNames", cfg.footerNames);

    setText("coverEyebrow", pick(ui.coverEyebrow));
    setText("openBtnText", pick(ui.openBtn));
    setText("heroEyebrow", pick(ui.heroEyebrow));
    setText("scrollHint", pick(ui.scrollHint));
    setText("countdownEyebrow", pick(ui.countdownEyebrow));
    setText("galleryEyebrow", pick(ui.galleryEyebrow));
    setText("locationEyebrow", pick(ui.locationEyebrow));
    setText("detailDateLabel", pick(ui.detailDateLabel));
    setText("detailTimeLabel", pick(ui.detailTimeLabel));
    setText("directionsText", pick(ui.directionsBtn));
    setText("lbl-days", pick(ui.cdDays));
    setText("lbl-hours", pick(ui.cdHours));
    setText("lbl-minutes", pick(ui.cdMinutes));
    setText("lbl-seconds", pick(ui.cdSeconds));

    document.documentElement.lang = lang;
    document.title = `${cfg.groomName || ""} & ${cfg.brideName || ""} — ` +
      (lang === "ru" ? "Приглашение на свадьбу" : "To'y taklifnomasi");
  }

  const langToggle = document.getElementById("langToggle");
  function setLang(next) {
    lang = next === "ru" ? "ru" : "uz";
    if (langToggle) {
      langToggle.querySelectorAll("button").forEach((b) => {
        b.classList.toggle("active", b.dataset.lang === lang);
      });
    }
    applyTexts();
  }
  langToggle?.querySelectorAll("button").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });

  const heroBg = document.getElementById("heroBg");
  if (heroBg && cfg.heroImage) heroBg.style.backgroundImage = `url('${cfg.heroImage}')`;

  const coupleImg = document.getElementById("coupleImg");
  if (coupleImg && cfg.coupleImage) coupleImg.src = cfg.coupleImage;

  const mapFrame = document.getElementById("mapFrame");
  if (mapFrame && cfg.mapEmbedUrl) mapFrame.src = cfg.mapEmbedUrl;

  const directionsBtn = document.getElementById("directionsBtn");
  if (directionsBtn && cfg.mapDirectionsUrl) directionsBtn.href = cfg.mapDirectionsUrl;

  const galleryGrid = document.getElementById("galleryGrid");
  const gallery = Array.isArray(cfg.gallery) ? cfg.gallery : [];
  if (galleryGrid) {
    gallery.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Rasm ${i + 1}`;
      img.dataset.index = i;
      galleryGrid.appendChild(img);
    });
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  let currentIndex = 0;
  function openLightbox(index) {
    if (!gallery.length) return;
    currentIndex = index;
    lightboxImg.src = gallery[currentIndex];
    lightbox.classList.add("open");
  }
  function closeLightbox() { lightbox.classList.remove("open"); }
  function showRelative(delta) {
    currentIndex = (currentIndex + delta + gallery.length) % gallery.length;
    lightboxImg.src = gallery[currentIndex];
  }
  if (galleryGrid) {
    galleryGrid.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG") openLightbox(Number(e.target.dataset.index));
    });
  }
  document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev")?.addEventListener("click", () => showRelative(-1));
  document.getElementById("lightboxNext")?.addEventListener("click", () => showRelative(1));
  lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showRelative(-1);
    if (e.key === "ArrowRight") showRelative(1);
  });

  function updateCountdown() {
    const target = new Date(cfg.weddingDate).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    const pad = (n) => String(n).padStart(2, "0");
    setText("cd-days", pad(days));
    setText("cd-hours", pad(hours));
    setText("cd-minutes", pad(minutes));
    setText("cd-seconds", pad(seconds));
  }
  if (cfg.weddingDate) { updateCountdown(); setInterval(updateCountdown, 1000); }

  const audio = document.getElementById("bgMusic");
  const musicToggle = document.getElementById("musicToggle");
  if (audio && cfg.musicFile) audio.src = cfg.musicFile;
  function startMusic() {
    if (!audio || !audio.src) return;
    audio.play().then(() => { musicToggle?.classList.add("playing"); }).catch(() => {});
  }
  musicToggle?.addEventListener("click", () => {
    if (!audio.src) return;
    if (audio.paused) { startMusic(); }
    else { audio.pause(); musicToggle.classList.remove("playing"); }
  });

  const cover = document.getElementById("cover");
  document.getElementById("openBtn")?.addEventListener("click", () => {
    if (cfg.musicAutoplay !== false) startMusic();
    cover?.classList.add("cover-hidden");
    document.body.classList.remove("locked");
  });

  const animatedEls = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("in-view"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  animatedEls.forEach((el) => observer.observe(el));

  document.getElementById("scrollDown")?.addEventListener("click", () => {
    document.querySelector(".countdown-section")?.scrollIntoView({ behavior: "smooth" });
  });

  setLang(lang);

  /* ---------- Ismlar uchun "yozuv mashinkasi" effekti · эффект печатной машинки ---------- */
  function runCoverTypewriter() {
    const groomEl = document.getElementById("coverGroom");
    const brideEl = document.getElementById("coverBride");
    const ampEl = document.querySelector("#cover .ampersand");
    if (!groomEl || !brideEl) return;

    const groom = cfg.groomName || "";
    const bride = cfg.brideName || "";

    // Harakatni kamaytirish yoqilgan bo'lsa — darrov to'liq ko'rsatamiz
    const reduce = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    twRunning = true;
    groomEl.textContent = "";
    brideEl.textContent = "";
    if (ampEl) ampEl.style.opacity = "0";

    const caret = document.createElement("span");
    caret.className = "tw-caret";
    caret.textContent = "|";

    const type = (el, text, speed, done) => {
      el.appendChild(caret);
      let i = 0;
      (function step() {
        if (i <= text.length) {
          caret.remove();
          el.textContent = text.slice(0, i);
          el.appendChild(caret);
          i++;
          setTimeout(step, speed);
        } else if (done) {
          done();
        }
      })();
    };

    // 1) kuyov ismi -> 2) "&" ko'rinadi -> 3) kelin ismi -> 4) kursor o'chadi
    setTimeout(() => {
      type(groomEl, groom, 130, () => {
        if (ampEl) { ampEl.style.transition = "opacity .5s ease"; ampEl.style.opacity = "1"; }
        setTimeout(() => {
          type(brideEl, bride, 130, () => {
            setTimeout(() => { caret.remove(); twRunning = false; }, 1400);
          });
        }, 450);
      });
    }, 500);
  }
  runCoverTypewriter();
})();
