/* ══════════════════════════════════════════════
   GALLERY LIGHTBOX — Salon Reda · Editorial Edition
   Full-bleed immersive viewer with floating UI
   ══════════════════════════════════════════════ */

(function () {

  /* ── Gallery data: per-category photo collections ── */
  const GALLERY_DATA = {
    balayage: {
      name: 'Balayage',
      eyebrow: 'Technique Signature',
      images: [
        { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=90&auto=format&fit=crop', label: 'Balayage naturel' },
        { src: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=1200&q=90&auto=format&fit=crop', label: 'Balayage doré' },
        { src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1200&q=90&auto=format&fit=crop', label: 'Balayage & Finition' },
        { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=90&auto=format&fit=crop', label: 'Effet soleil' },
        { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=90&auto=format&fit=crop', label: 'Balayage chocolat' },
      ]
    },
    coloration: {
      name: 'Coloration',
      eyebrow: 'Expertise Couleur',
      images: [
        { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=90&auto=format&fit=crop', label: 'Coloration sur mesure' },
        { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=90&auto=format&fit=crop', label: 'Couleur vibrante' },
        { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=90&auto=format&fit=crop', label: 'Coloration totale' },
        { src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1200&q=90&auto=format&fit=crop', label: 'Nuancier exclusif' },
      ]
    },
    ombre: {
      name: 'Ombré',
      eyebrow: 'Dégradé Naturel',
      images: [
        { src: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=1200&q=90&auto=format&fit=crop', label: 'Ombré classique' },
        { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=90&auto=format&fit=crop', label: 'Dégradé doré' },
        { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=90&auto=format&fit=crop', label: 'Ombré lumineux' },
        { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=90&auto=format&fit=crop', label: 'Sunset ombré' },
      ]
    },
    brushing: {
      name: 'Brushing & Style',
      eyebrow: 'Coiffage Expert',
      images: [
        { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=90&auto=format&fit=crop', label: 'Brushing volume' },
        { src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1200&q=90&auto=format&fit=crop', label: 'Style lissé' },
        { src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1200&q=90&auto=format&fit=crop', label: 'Finition brillance' },
        { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=90&auto=format&fit=crop', label: 'Brushing wavy' },
      ]
    },
    soin: {
      name: 'Soin Capillaire',
      eyebrow: 'Luxe & Nutrition',
      images: [
        { src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1200&q=90&auto=format&fit=crop', label: 'Soin kératine' },
        { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=90&auto=format&fit=crop', label: 'Masque nourrissant' },
        { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=90&auto=format&fit=crop', label: 'Traitement profond' },
      ]
    },
    coupe: {
      name: 'Coupe & Finition',
      eyebrow: 'Précision & Style',
      images: [
        { src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1200&q=90&auto=format&fit=crop', label: 'Coupe personnalisée' },
        { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=90&auto=format&fit=crop', label: 'Finition parfaite' },
        { src: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=1200&q=90&auto=format&fit=crop', label: 'Style moderne' },
        { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=90&auto=format&fit=crop', label: 'Coupe tendance' },
      ]
    }
  };

  /* ── State ── */
  let currentCategory  = null;
  let currentIndex     = 0;
  let touchStartX      = 0;
  let isTransitioning  = false;

  /* ── Build DOM — editorial floating-UI layout ── */
  const overlay = document.createElement('div');
  overlay.id = 'glbOverlay';
  overlay.className = 'glb-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-hidden', 'true');

  overlay.innerHTML = `
    <!-- Full-bleed stage: image + arrows -->
    <div class="glb-stage" id="glbStage">
      <div class="glb-main-img-wrap">
        <img class="glb-main-img" id="glbMainImg" src="" alt="">
      </div>
      <button class="glb-arrow glb-arrow-prev" id="glbPrev" aria-label="Précédent">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <button class="glb-arrow glb-arrow-next" id="glbNext" aria-label="Suivant">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <!-- Top floating bar: category info + controls -->
    <div class="glb-top-bar">
      <div class="glb-top-left">
        <div class="glb-category-eyebrow" id="glbEyebrow">Galerie</div>
        <div class="glb-category-name"    id="glbCategoryName">–</div>
      </div>
      <div class="glb-top-right">
        <div class="glb-counter" id="glbCounter">1 / 1</div>
        <button class="glb-close" id="glbClose" aria-label="Fermer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Bottom floating bar: caption + thumbnails -->
    <div class="glb-bottom-bar">
      <div class="glb-img-label" id="glbImgLabel"></div>
      <div class="glb-thumbs"    id="glbThumbs"></div>
      <div class="glb-swipe-hint">← Swipe →</div>
    </div>
  `;

  document.body.appendChild(overlay);

  const glbOverlay  = overlay;
  const glbClose    = document.getElementById('glbClose');
  const glbPrev     = document.getElementById('glbPrev');
  const glbNext     = document.getElementById('glbNext');
  const glbMainImg  = document.getElementById('glbMainImg');
  const glbImgLabel = document.getElementById('glbImgLabel');
  const glbCounter  = document.getElementById('glbCounter');
  const glbCatName  = document.getElementById('glbCategoryName');
  const glbEyebrow  = document.getElementById('glbEyebrow');
  const glbThumbs   = document.getElementById('glbThumbs');
  const glbStage    = document.getElementById('glbStage');

  /* ── Open lightbox ── */
  function openLightbox(category, startIdx) {
    startIdx = startIdx || 0;
    const data = GALLERY_DATA[category];
    if (!data) return;

    currentCategory = category;
    currentIndex    = startIdx;

    glbCatName.textContent = data.name;
    glbEyebrow.textContent = data.eyebrow;

    // Build thumbnails
    glbThumbs.innerHTML = '';
    data.images.forEach(function(img, idx) {
      var thumb = document.createElement('div');
      thumb.className = 'glb-thumb' + (idx === startIdx ? ' glb-thumb-active' : '');
      var thumbSrc = img.src.replace('w=1200', 'w=200');
      thumb.innerHTML = '<img src="' + thumbSrc + '" alt="" loading="lazy">';
      thumb.addEventListener('click', function() { goTo(idx); });
      glbThumbs.appendChild(thumb);
    });

    // Reveal overlay
    glbOverlay.style.display = 'flex';
    glbOverlay.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { glbOverlay.classList.add('glb-open'); });
    });
    document.body.style.overflow = 'hidden';

    loadImage(startIdx, false);
  }

  /* ── Close ── */
  function closeLightbox() {
    glbOverlay.classList.remove('glb-open');
    glbOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function() { glbOverlay.style.display = 'none'; }, 500);
  }

  /* ── Load image ── */
  function loadImage(idx, animate) {
    if (isTransitioning) return;
    var data = GALLERY_DATA[currentCategory];
    if (!data) return;
    var item = data.images[idx];

    // Counter
    glbCounter.textContent = (idx + 1) + ' / ' + data.images.length;

    // Arrows
    glbPrev.disabled = (idx === 0);
    glbNext.disabled = (idx === data.images.length - 1);

    // Thumbnails
    glbThumbs.querySelectorAll('.glb-thumb').forEach(function(t, i) {
      t.classList.toggle('glb-thumb-active', i === idx);
    });
    var activeThumb = glbThumbs.querySelectorAll('.glb-thumb')[idx];
    if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    if (animate !== false) {
      isTransitioning = true;
      glbMainImg.classList.remove('glb-img-visible');
      glbImgLabel.style.opacity = '0';

      setTimeout(function() {
        glbMainImg.src = item.src;
        glbImgLabel.textContent = item.label || '';
        glbMainImg.onload = function() {
          glbMainImg.classList.add('glb-img-visible');
          glbImgLabel.style.opacity = '1';
          isTransitioning = false;
        };
        glbMainImg.onerror = function() { isTransitioning = false; };
      }, 220);
    } else {
      glbMainImg.src = item.src;
      glbImgLabel.textContent = item.label || '';
      glbMainImg.onload = function() {
        glbMainImg.classList.add('glb-img-visible');
        glbImgLabel.style.opacity = '1';
      };
    }

    currentIndex = idx;
  }

  function goTo(idx) {
    var data = GALLERY_DATA[currentCategory];
    if (!data) return;
    if (idx < 0 || idx >= data.images.length) return;
    loadImage(idx, true);
  }

  /* ── Event bindings ── */
  glbClose.addEventListener('click', closeLightbox);

  // Click outside image closes
  glbOverlay.addEventListener('click', function(e) {
    if (e.target === glbOverlay || e.target === glbStage) closeLightbox();
  });

  glbPrev.addEventListener('click', function(e) { e.stopPropagation(); goTo(currentIndex - 1); });
  glbNext.addEventListener('click', function(e) { e.stopPropagation(); goTo(currentIndex + 1); });

  // Keyboard
  document.addEventListener('keydown', function(e) {
    if (!glbOverlay.classList.contains('glb-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  goTo(currentIndex - 1);
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  });

  // Touch swipe
  glbStage.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  glbStage.addEventListener('touchend', function(e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      goTo(diff > 0 ? currentIndex + 1 : currentIndex - 1);
    }
  }, { passive: true });

  /* ── Wire up gallery items ── */
  const ITEM_MAP = {
    'Balayage':         'balayage',
    'Coloration':       'coloration',
    'Ombré':            'ombre',
    'Brushing & Style': 'brushing',
    'Soin Capillaire':  'soin',
    'Coupe & Finition': 'coupe',
  };

  function initGalleryItems() {
    document.querySelectorAll('.gallery-item').forEach(function(item) {
      var labelEl = item.querySelector('.gallery-overlay span');
      if (!labelEl) return;
      var label    = labelEl.textContent.trim();
      var category = ITEM_MAP[label];
      if (!category) return;

      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', 'Voir la galerie ' + label);

      item.addEventListener('click', function(e) {
        e.preventDefault();
        openLightbox(category, 0);
      });

      item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(category, 0);
        }
      });

      // Hover icon — expand/zoom indicator
      var icon = document.createElement('div');
      icon.style.cssText = [
        'position:absolute',
        'top:14px',
        'right:14px',
        'z-index:5',
        'width:32px',
        'height:32px',
        'border-radius:50%',
        'background:rgba(4,4,4,0.6)',
        'backdrop-filter:blur(10px)',
        'border:1px solid rgba(201,169,110,0.28)',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'color:#C9A96E',
        'opacity:0',
        'transition:opacity 0.3s ease, transform 0.3s ease',
        'pointer-events:none',
      ].join(';');
      icon.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
      item.appendChild(icon);

      item.addEventListener('mouseenter', function() {
        icon.style.opacity = '1';
        icon.style.transform = 'scale(1.05)';
      });
      item.addEventListener('mouseleave', function() {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(1)';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGalleryItems);
  } else {
    initGalleryItems();
  }

})();
