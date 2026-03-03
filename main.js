/* ══════════════════════════════════════════════
   SALON REDA — main.js
   i18n (FR/AR/EN) + Nav + Reveal + Form
   ══════════════════════════════════════════════ */

// ──────────────────────────────────────────────
// TRANSLATIONS
// ──────────────────────────────────────────────
const T = {
  fr: {
    nav_home:'Accueil', nav_services:'Services', nav_gallery:'Galerie',
    nav_about:'À Propos', nav_contact:'Contact', nav_cta:'Réserver',
    nav_location:'Localisation',
    hero_eyebrow:'✦  Casablanca · Maroc  ✦',
    hero_desc:"Spécialiste Balayage, Ombré & Coloration à Casablanca.\nUne expérience capillaire d'exception, taillée sur mesure pour vous.",
    hero_cta1:'Prendre RDV', hero_cta2:'Voir Notre Travail',
    stat_followers:'Abonnés Instagram', stat_years:"Ans d'Expérience", stat_satis:'Satisfaction Client',
    scroll_down:'Découvrir',
    serv_eyebrow:'Nos Services',
    serv_title:'Une Expertise <em>Complète</em>',
    serv_sub:'Des prestations haut de gamme adaptées à chaque type de cheveu et chaque style de vie.',
    s1_name:'Coupe & Brushing',   s1_desc:"Coupe personnalisée selon votre morphologie et vos envies, brushing inclus.",
    s2_name:'Coloration',          s2_desc:"Coloration complète, racines ou mèches avec des produits premium haute protection.",
    s3_name:'Balayage & Ombré',   s3_desc:"Notre signature — un effet naturel et lumineux qui sublime chaque nuance de vos cheveux.",
    s4_name:'Lissage Kératine',   s4_desc:"Lissage durable qui discipline et nourrit vos cheveux en profondeur jusqu'à 6 mois.",
    s5_name:'Extensions',          s5_desc:"Extensions naturelles posées à la kératine ou à la tape pour plus de volume et longueur.",
    s6_name:'Coiffure Mariée',    s6_desc:"Mise en beauté complète pour votre grand jour : chignon, coiffure berbère, maquillage.",
    s7_name:'Soin Capillaire',    s7_desc:"Soins restructurants, masques nourrissants et traitements anti-chute personnalisés.",
    s8_name:'Relooking Complet',  s8_desc:"Changement de look total : conseil personnalisé, coupe, coloration et coiffage.",
    from:'Dès', on_quote:'Sur devis', badge_pop:'Populaire',
    gal_eyebrow:'Notre Galerie',
    gal_title:'Notre <em>Travail</em>',
    gal_sub:"Chaque coiffure est une œuvre d'art. Découvrez nos dernières créations.",
    gal_insta:'Voir plus sur Instagram @salon_reda_officiel',
    about_eyebrow:'À Propos',
    about_title:"L'Art au Service de <em>Votre Beauté</em>",
    about_p1:"Salon Reda est votre adresse de référence pour la coiffure de luxe à Casablanca. Spécialiste en techniques de coloration avancées — Balayage, Ombré, Teinture — notre équipe passionnée transforme chaque visite en expérience unique.",
    about_p2:"Situé au cœur du quartier Bourgogne, rue Regraga, le salon accueille chaque client dans un cadre élégant avec des produits professionnels des plus grandes maisons.",
    feat1:'Produits professionnels haut de gamme', feat2:'Techniques exclusives de coloration',
    feat3:'Conseil personnalisé gratuit',           feat4:'Équipe formée aux dernières tendances',
    about_cta:'Prendre Rendez-Vous', badge_followers:'Followers',
    loc_eyebrow:'Localisation',
    loc_title:'Nous <em>Trouver</em>',
    loc_sub:'Au cœur du quartier Bourgogne, facilement accessible depuis tout Casablanca.',
    loc_directions:'Obtenir l\'itinéraire',
    cont_eyebrow:'Contact',
    cont_title:'Prenons <em>Rendez-Vous</em>',
    cont_sub:'Contactez-nous via WhatsApp, téléphone ou remplissez le formulaire ci-dessous.',
    c_addr:'Adresse', c_phone:'Téléphone', c_hours:'Horaires',
    c_hours_val:'Lun – Sam : 9h – 20h<br>Dimanche : Sur RDV',
    wa_btn:'Discuter sur WhatsApp',
    f_name:'Nom Complet', f_name_ph:'Votre nom',
    f_phone:'Téléphone',  f_phone_ph:'06 XX XX XX XX',
    f_service:'Service Souhaité', f_select:'Choisir un service...',
    f_msg:'Message', f_msg_ph:'Votre message ou préférence horaire...',
    f_submit:'Envoyer la Demande',
    f_success:'Message envoyé ! Nous vous contacterons très bientôt.',
    f_error:'Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.',
    foot_desc:'Votre salon de coiffure de luxe au cœur de Casablanca. Spécialiste Balayage & Ombré.',
    foot_nav:'Navigation', foot_serv:'Services', foot_contact:'Infos',
    foot_copy:'© 2025 Salon Reda. Tous droits réservés.',
  },

  ar: {
    nav_home:'الرئيسية', nav_services:'الخدمات', nav_gallery:'المعرض',
    nav_about:'من نحن', nav_contact:'التواصل', nav_cta:'احجز موعد',
    nav_location:'الموقع',
    hero_eyebrow:'✦  الدار البيضاء · المغرب  ✦',
    hero_desc:'متخصصون في البالياج، الأومبري وتلوين الشعر بالدار البيضاء.\nتجربة استثنائية مصممة خصيصاً لك.',
    hero_cta1:'احجز موعدك', hero_cta2:'اكتشف أعمالنا',
    stat_followers:'متابع على إنستغرام', stat_years:'سنوات خبرة', stat_satis:'رضا العملاء',
    scroll_down:'اكتشف',
    serv_eyebrow:'خدماتنا',
    serv_title:'خبرة <em>متكاملة</em>',
    serv_sub:'خدمات فاخرة مناسبة لكل نوع شعر وكل أسلوب حياة.',
    s1_name:'قص وتمشيط',            s1_desc:'قصة شخصية حسب شكل وجهك وأذواقك، مع تمشيط احترافي.',
    s2_name:'تلوين الشعر',           s2_desc:'تلوين كامل، جذور أو خصلات بمنتجات فاخرة عالية الحماية.',
    s3_name:'بالياج وأومبري',        s3_desc:'توقيعنا المميز — تأثير طبيعي ومضيء يبرز كل درجة من درجات شعرك.',
    s4_name:'تمليس الكيراتين',       s4_desc:'تمليس دائم يروض ويغذي شعرك بعمق لمدة تصل إلى 6 أشهر.',
    s5_name:'امتدادات الشعر',        s5_desc:'امتدادات طبيعية بالكيراتين أو الشريط لمزيد من الحجم والطول.',
    s6_name:'تسريحة العروس',         s6_desc:'تجميل متكامل ليومك الكبير: تسريحة، مكياج، وإطلالة لا تُنسى.',
    s7_name:'علاج الشعر',            s7_desc:'علاجات مغذية وأقنعة مرممة وعلاجات مخصصة لتساقط الشعر.',
    s8_name:'تغيير إطلالة كامل',     s8_desc:'تغيير شامل للمظهر: استشارة شخصية، قص، تلوين وتصفيف.',
    from:'ابتداءً من', on_quote:'حسب الطلب', badge_pop:'الأكثر طلباً',
    gal_eyebrow:'معرضنا',
    gal_title:'<em>أعمالنا</em>',
    gal_sub:'كل تسريحة شعر تحفة فنية. اكتشف آخر إبداعاتنا.',
    gal_insta:'شاهد المزيد على إنستغرام @salon_reda_officiel',
    about_eyebrow:'من نحن',
    about_title:'التميز في خدمة <em>جمالك</em>',
    about_p1:'صالون ريدا هو عنوانكم المرجعي للحلاقة الفاخرة بالدار البيضاء. متخصصون في تقنيات التلوين المتقدمة — البالياج، الأومبري — فريقنا الشغوف يحول كل زيارة إلى تجربة فريدة.',
    about_p2:'يقع في قلب حي بورغون، شارع الرقراقة، يستقبل الصالون كل عميل في إطار أنيق بمنتجات احترافية من أفضل الماركات العالمية.',
    feat1:'منتجات احترافية فاخرة', feat2:'تقنيات تلوين حصرية',
    feat3:'استشارة شخصية مجانية',  feat4:'فريق مُدرَّب على أحدث الاتجاهات',
    about_cta:'احجز موعدك الآن', badge_followers:'متابع',
    loc_eyebrow:'الموقع',
    loc_title:'<em>جدنا</em>',
    loc_sub:'في قلب حي بورغون، يسهل الوصول إلينا من جميع أنحاء الدار البيضاء.',
    loc_directions:'الحصول على الاتجاهات',
    cont_eyebrow:'التواصل',
    cont_title:'لنحجز <em>موعدك</em>',
    cont_sub:'تواصل معنا عبر واتساب أو الهاتف أو أكمل النموذج أدناه.',
    c_addr:'العنوان', c_phone:'الهاتف', c_hours:'أوقات العمل',
    c_hours_val:'الإثنين – السبت: 9ص – 8م<br>الأحد: بموعد مسبق',
    wa_btn:'تحدث معنا على واتساب',
    f_name:'الاسم الكامل', f_name_ph:'اسمك الكريم',
    f_phone:'الهاتف',      f_phone_ph:'06 XX XX XX XX',
    f_service:'الخدمة المطلوبة', f_select:'اختر خدمة...',
    f_msg:'الرسالة', f_msg_ph:'رسالتك أو تفضيلات المواعيد...',
    f_submit:'إرسال الطلب',
    f_success:'تم إرسال رسالتك! سنتواصل معك قريباً جداً.',
    f_error:'حدث خطأ. حاول مجدداً أو تواصل معنا عبر واتساب.',
    foot_desc:'صالون حلاقة فاخر في قلب الدار البيضاء. متخصصون في البالياج والأومبري.',
    foot_nav:'التنقل', foot_serv:'الخدمات', foot_contact:'معلومات',
    foot_copy:'© 2025 صالون ريدا. جميع الحقوق محفوظة.',
  },

  en: {
    nav_home:'Home', nav_services:'Services', nav_gallery:'Gallery',
    nav_about:'About', nav_contact:'Contact', nav_cta:'Book Now',
    nav_location:'Location',
    hero_eyebrow:'✦  Casablanca · Morocco  ✦',
    hero_desc:'Balayage, Ombré & Color Specialist in Casablanca.\nAn exceptional hair experience crafted exclusively for you.',
    hero_cta1:'Book Appointment', hero_cta2:'See Our Work',
    stat_followers:'Instagram Followers', stat_years:'Years Experience', stat_satis:'Client Satisfaction',
    scroll_down:'Discover',
    serv_eyebrow:'Our Services',
    serv_title:'Complete <em>Expertise</em>',
    serv_sub:'Premium services adapted to every hair type and lifestyle.',
    s1_name:'Haircut & Blowout',   s1_desc:'Custom cut tailored to your face shape and style, blowout included.',
    s2_name:'Hair Coloring',        s2_desc:'Full color, roots or highlights with premium high-protection products.',
    s3_name:'Balayage & Ombré',    s3_desc:'Our signature — a natural, luminous effect that enhances every shade of your hair.',
    s4_name:'Keratin Treatment',   s4_desc:'Long-lasting treatment that disciplines and deeply nourishes your hair for up to 6 months.',
    s5_name:'Hair Extensions',      s5_desc:'Natural extensions applied with keratin or tape for more volume and length.',
    s6_name:'Bridal Styling',       s6_desc:'Complete bridal glam for your big day: updo, traditional styling, makeup.',
    s7_name:'Hair Treatment',       s7_desc:'Reconstructing treatments, nourishing masks and personalized anti-hair-loss treatments.',
    s8_name:'Full Makeover',        s8_desc:'Complete look transformation: personalized consultation, cut, color and styling.',
    from:'From', on_quote:'On request', badge_pop:'Popular',
    gal_eyebrow:'Our Gallery',
    gal_title:'Our <em>Work</em>',
    gal_sub:'Every hairstyle is a work of art. Discover our latest creations.',
    gal_insta:'See more on Instagram @salon_reda_officiel',
    about_eyebrow:'About Us',
    about_title:'Art in the Service of <em>Your Beauty</em>',
    about_p1:"Salon Reda is your reference address for luxury hairdressing in Casablanca. Specializing in advanced coloring techniques — Balayage, Ombré, Tinting — our passionate team transforms every visit into a unique experience.",
    about_p2:"Located in the heart of the Bourgogne district, Rue Regraga, the salon welcomes every client in an elegant setting with professional products from the finest brands.",
    feat1:'Premium professional products', feat2:'Exclusive coloring techniques',
    feat3:'Free personalized consultation',  feat4:'Team trained in the latest trends',
    about_cta:'Book an Appointment', badge_followers:'Followers',
    loc_eyebrow:'Location',
    loc_title:'Find <em>Us</em>',
    loc_sub:'In the heart of the Bourgogne district, easily accessible from all of Casablanca.',
    loc_directions:'Get Directions',
    cont_eyebrow:'Contact',
    cont_title:"Let's Book <em>Your Appointment</em>",
    cont_sub:'Contact us via WhatsApp, phone, or fill out the form below.',
    c_addr:'Address', c_phone:'Phone', c_hours:'Hours',
    c_hours_val:'Mon – Sat: 9am – 8pm<br>Sunday: By appointment',
    wa_btn:'Chat on WhatsApp',
    f_name:'Full Name', f_name_ph:'Your name',
    f_phone:'Phone',    f_phone_ph:'+212 6XX XX XX XX',
    f_service:'Desired Service', f_select:'Choose a service...',
    f_msg:'Message', f_msg_ph:'Your message or time preference...',
    f_submit:'Send Request',
    f_success:'Message sent! We will contact you very soon.',
    f_error:'Something went wrong. Please retry or contact us on WhatsApp.',
    foot_desc:'Your luxury hair salon in the heart of Casablanca. Balayage & Ombré specialists.',
    foot_nav:'Navigation', foot_serv:'Services', foot_contact:'Info',
    foot_copy:'© 2025 Salon Reda. All rights reserved.',
  }
};

// ──────────────────────────────────────────────
// APPLY LANGUAGE
// ──────────────────────────────────────────────
let currentLang = 'fr';

function applyLang(lang) {
  const t = T[lang];
  if (!t) return;
  currentLang = lang;

  // RTL toggle
  const html = document.documentElement;
  html.lang = lang;
  if (lang === 'ar') {
    html.dir = 'rtl';
    html.classList.add('ar');
  } else {
    html.dir = 'ltr';
    html.classList.remove('ar');
  }

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    // Preserve inner HTML for keys with <em> tags
    if (t[key].includes('<')) {
      el.innerHTML = t[key];
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else if (el.tagName === 'OPTION') {
      el.textContent = t[key];
    } else {
      // Handle \n as <br> in hero_desc and c_hours_val
      el.innerHTML = t[key].replace(/\n/g, '<br>');
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Lang switcher click
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ──────────────────────────────────────────────
// NAV SCROLL EFFECT
// ──────────────────────────────────────────────
const nav = document.getElementById('nav');
function onScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 40);

  // Active nav link highlight
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

// ──────────────────────────────────────────────
// MOBILE BURGER
// ──────────────────────────────────────────────
const burger    = document.getElementById('burger');
const navLinks  = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
  });
});

// ──────────────────────────────────────────────
// SCROLL REVEAL (Intersection Observer)
// ──────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      // Small stagger per element group
      const delay = (idx % 6) * 60;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

// Observe all .reveal elements outside hero (hero uses CSS animation)
document.querySelectorAll('.reveal').forEach(el => {
  if (!el.closest('.hero')) revealObs.observe(el);
});

// ──────────────────────────────────────────────
// SMOOTH SCROLL (offset for fixed nav)
// ──────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const sel = this.getAttribute('href');
    if (sel === '#') return;
    const target = document.querySelector(sel);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 76, behavior: 'smooth' });
    }
  });
});

// ──────────────────────────────────────────────
// CONTACT FORM — Formspree email
// ──────────────────────────────────────────────

// Formspree is configured for niimafolla@gmail.com
// ⚠️  One-time setup needed:
//    1. Go to https://formspree.io → Sign up with niimafolla@gmail.com
//    2. Click "New Form" → name it "Salon Reda"
//    3. Copy the form ID from your dashboard (e.g. xpwzgkla)
//    4. Replace YOUR_FORM_ID below with that ID
const FORMSPREE_ID = 'xdalqaqg';

async function handleSubmit(e) {
  e.preventDefault();
  const form    = e.target;
  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  const error   = document.getElementById('formError');
  const t       = T[currentLang];

  const name    = form.querySelector('input[type="text"]').value.trim();
  const phone   = form.querySelector('input[type="tel"]').value.trim();
  const service = form.querySelector('select').value.trim();
  const message = form.querySelector('textarea').value.trim();

  btn.disabled = true;
  btn.querySelector('span').textContent =
    currentLang === 'ar' ? 'جارٍ الإرسال…' :
    currentLang === 'en' ? 'Sending…' : 'Envoi en cours…';

  if (error) error.classList.remove('show');

  let emailOk = false;
  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:    name,
        phone:   phone,
        service: service,
        message: message
      })
    });
    const data = await res.json();
    emailOk = res.ok && !data.errors;
  } catch(err) {
    emailOk = false;
  }

  btn.querySelector('span').textContent = t['f_submit'];
  btn.disabled = false;

  if (emailOk) {
    success.classList.add('show');
    form.reset();
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => success.classList.remove('show'), 6000);
  } else {
    if (error) error.classList.add('show');
  }
}

// ──────────────────────────────────────────────
// GALLERY — subtle parallax on mouse move
// ──────────────────────────────────────────────
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    const img = item.querySelector('img');
    if (img) img.style.transform = `scale(1.08) translate(${x}px,${y}px)`;
  });
  item.addEventListener('mouseleave', () => {
    const img = item.querySelector('img');
    if (img) img.style.transform = '';
  });
});

// ──────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────
applyLang('fr');
onScroll();

// ──────────────────────────────────────────────
// SHOWCASE SLIDER — Cinematic Auto-Play
// ──────────────────────────────────────────────
(function() {
  const slides    = document.querySelectorAll('.showcase-slide');
  const dots      = document.querySelectorAll('.showcase-dot');
  const thumbs    = document.querySelectorAll('.strip-thumb');
  const progress  = document.getElementById('showcaseProgress');
  const prevBtn   = document.getElementById('showcasePrev');
  const nextBtn   = document.getElementById('showcaseNext');

  if (!slides.length) return;

  const DURATION  = 5200; // ms per slide
  let current     = 0;
  let timer       = null;
  let progTimer   = null;
  let progVal     = 0;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    thumbs[current].classList.remove('active');

    current = (idx + slides.length) % slides.length;

    slides[current].classList.add('active');
    dots[current].classList.add('active');
    thumbs[current].classList.add('active');

    resetProgress();
  }

  function resetProgress() {
    clearInterval(progTimer);
    progVal = 0;
    if (progress) progress.style.width = '0%';
    progTimer = setInterval(() => {
      progVal += (100 / (DURATION / 80));
      if (progress) progress.style.width = Math.min(progVal, 100) + '%';
      if (progVal >= 100) clearInterval(progTimer);
    }, 80);
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), DURATION);
  }

  function pause() {
    clearInterval(timer);
    clearInterval(progTimer);
  }

  // Dot & thumb click
  dots.forEach(dot => dot.addEventListener('click', () => {
    goTo(parseInt(dot.dataset.idx));
    startAuto();
  }));
  thumbs.forEach(t => t.addEventListener('click', () => {
    goTo(parseInt(t.dataset.idx));
    startAuto();
  }));

  // Arrow buttons
  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  // Pause on hover
  const stage = document.querySelector('.showcase-stage');
  if (stage) {
    stage.addEventListener('mouseenter', pause);
    stage.addEventListener('mouseleave', () => { resetProgress(); startAuto(); });
  }

  // Touch/swipe support
  let touchX = 0;
  if (stage) {
    stage.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive:true });
    stage.addEventListener('touchend', e => {
      const diff = touchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { goTo(diff > 0 ? current+1 : current-1); startAuto(); }
    }, { passive:true });
  }

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { goTo(current-1); startAuto(); }
    if (e.key === 'ArrowRight') { goTo(current+1); startAuto(); }
  });

  // Init
  goTo(0);
  startAuto();
})();