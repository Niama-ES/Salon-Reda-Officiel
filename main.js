/* ══════════════════════════════════════════════
   SALON REDA — main.js
   i18n (FR/AR/EN) + Nav + Reveal + Form + Cal.com
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
    loc_directions:"Obtenir l'itinéraire",
    cont_eyebrow:'Réservation',
    cont_title:'Prenons <em>Rendez-Vous</em>',
    cont_sub:'Sélectionnez votre service et réservez votre créneau en quelques secondes.',
    cic_title:'Nous Trouver',
    bcc_eyebrow:'Réservation en ligne',
    bcc_title:'Choisissez votre service',
    bcc_cta:'Réserver mon Rendez-Vous',
    bcc_note:'Confirmation immédiate par email',
    qc_prefer:'Préférez nous contacter directement ?',
    qc_msg:'Envoyer un message',
    c_addr:'Adresse', c_phone:'Téléphone', c_hours:'Horaires',
    c_hours_val:'Lun – Sam : 9h – 20h<br>Dimanche : Sur RDV',
    wa_btn:'Discuter sur WhatsApp',
    tab_book:'Réserver un créneau', tab_msg:'Envoyer un message',
    cal_choose:'Choisissez votre créneau',
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
    bso_eyebrow:'Réservation confirmée',
    bso_title:'Votre Rendez-Vous<br>est Réservé !',
    bso_sub:'Un email de confirmation vous a été envoyé avec tous les détails de votre rendez-vous.',
    bso_wa:'Nous contacter',
    bso_close:'Fermer',
    bso_date_lbl:'Date', bso_time_lbl:'Heure', bso_serv_lbl:'Service',
    nav_reviews:'Avis',
    rev_eyebrow:'Témoignages',
    rev_title:'Ce que disent <em>nos clients</em>',
    rev_count:'105 avis Google',
    rev_see_all:'Voir tous les avis',
    rev_date_1:'il y a 4 mois · Google',
    rev_date_2:'il y a 2 mois · Google',
    rev_date_3:'il y a 1 mois · Google',
    rev_date_4:'il y a 3 semaines · Google',
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
    cont_eyebrow:'الحجز',
    cont_title:'لنحجز <em>موعدك</em>',
    cont_sub:'اختر خدمتك واحجز موعدك في ثوانٍ.',
    cic_title:'أين نجدنا',
    bcc_eyebrow:'الحجز الإلكتروني',
    bcc_title:'اختر خدمتك',
    bcc_cta:'احجز موعدي',
    bcc_note:'تأكيد فوري عبر البريد الإلكتروني',
    qc_prefer:'تفضل التواصل المباشر معنا؟',
    qc_msg:'إرسال رسالة',
    c_addr:'العنوان', c_phone:'الهاتف', c_hours:'أوقات العمل',
    c_hours_val:'الإثنين – السبت: 9ص – 8م<br>الأحد: بموعد مسبق',
    wa_btn:'تحدث معنا على واتساب',
    tab_book:'احجز موعداً', tab_msg:'أرسل رسالة',
    cal_choose:'اختر وقتك',
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
    bso_eyebrow:'تم تأكيد الحجز',
    bso_title:'تم حجز موعدك<br>بنجاح !',
    bso_sub:'تم إرسال بريد إلكتروني بتفاصيل موعدك.',
    bso_wa:'تواصل معنا',
    bso_close:'إغلاق',
    bso_date_lbl:'التاريخ', bso_time_lbl:'الوقت', bso_serv_lbl:'الخدمة',
    nav_reviews:'التقييمات',
    rev_eyebrow:'آراء عملائنا',
    rev_title:'ما يقوله <em>عملاؤنا</em>',
    rev_count:'105 تقييم على Google',
    rev_see_all:'عرض جميع التقييمات',
    rev_date_1:'منذ 4 أشهر · Google',
    rev_date_2:'منذ شهرين · Google',
    rev_date_3:'منذ شهر · Google',
    rev_date_4:'منذ 3 أسابيع · Google',
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
    cont_eyebrow:'Booking',
    cont_title:"Let's Book <em>Your Appointment</em>",
    cont_sub:'Select your service and book your slot in seconds.',
    cic_title:'Find Us',
    bcc_eyebrow:'Online Booking',
    bcc_title:'Choose your service',
    bcc_cta:'Book my Appointment',
    bcc_note:'Instant email confirmation',
    qc_prefer:'Prefer to contact us directly?',
    qc_msg:'Send a message',
    c_addr:'Address', c_phone:'Phone', c_hours:'Hours',
    c_hours_val:'Mon – Sat: 9am – 8pm<br>Sunday: By appointment',
    wa_btn:'Chat on WhatsApp',
    tab_book:'Book a slot', tab_msg:'Send a message',
    cal_choose:'Choose your slot',
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
    bso_eyebrow:'Booking Confirmed',
    bso_title:'Your Appointment<br>is Booked !',
    bso_sub:'A confirmation email has been sent to you with all the details of your appointment.',
    bso_wa:'Contact us',
    bso_close:'Close',
    bso_date_lbl:'Date', bso_time_lbl:'Time', bso_serv_lbl:'Service',
    nav_reviews:'Reviews',
    rev_eyebrow:'Testimonials',
    rev_title:'What our <em>clients say</em>',
    rev_count:'105 Google reviews',
    rev_see_all:'See all reviews',
    rev_date_1:'4 months ago · Google',
    rev_date_2:'2 months ago · Google',
    rev_date_3:'1 month ago · Google',
    rev_date_4:'3 weeks ago · Google',
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

  const html = document.documentElement;
  html.lang = lang;
  if (lang === 'ar') {
    html.dir = 'rtl';
    html.classList.add('ar');
  } else {
    html.dir = 'ltr';
    html.classList.remove('ar');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    if (t[key].includes('<')) {
      el.innerHTML = t[key];
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else if (el.tagName === 'OPTION') {
      el.textContent = t[key];
    } else {
      el.innerHTML = t[key].replace(/\n/g, '<br>');
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ──────────────────────────────────────────────
// NAV SCROLL EFFECT
// ──────────────────────────────────────────────
const nav = document.getElementById('nav');
function onScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 40);
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
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

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
// SCROLL REVEAL
// ──────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      const delay = (idx % 6) * 60;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

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
// CONTACT FORM — Formspree
// ──────────────────────────────────────────────
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
      body: JSON.stringify({ name, phone, service, message })
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
// GALLERY — parallax on mouse move
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
  const slides   = document.querySelectorAll('.showcase-slide');
  const dots     = document.querySelectorAll('.showcase-dot');
  const thumbs   = document.querySelectorAll('.strip-thumb');
  const progress = document.getElementById('showcaseProgress');
  const prevBtn  = document.getElementById('showcasePrev');
  const nextBtn  = document.getElementById('showcaseNext');

  if (!slides.length) return;

  const DURATION = 5200;
  let current    = 0;
  let timer      = null;
  let progTimer  = null;
  let progVal    = 0;

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

  dots.forEach(dot => dot.addEventListener('click', () => { goTo(parseInt(dot.dataset.idx)); startAuto(); }));
  thumbs.forEach(t => t.addEventListener('click', () => { goTo(parseInt(t.dataset.idx)); startAuto(); }));

  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  const stage = document.querySelector('.showcase-stage');
  if (stage) {
    stage.addEventListener('mouseenter', pause);
    stage.addEventListener('mouseleave', () => { resetProgress(); startAuto(); });
  }

  let touchX = 0;
  if (stage) {
    stage.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive:true });
    stage.addEventListener('touchend', e => {
      const diff = touchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { goTo(diff > 0 ? current+1 : current-1); startAuto(); }
    }, { passive:true });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { goTo(current-1); startAuto(); }
    if (e.key === 'ArrowRight') { goTo(current+1); startAuto(); }
  });

  goTo(0);
  startAuto();
})();

// ──────────────────────────────────────────────
// SERVICE CHIP SELECTION
// ──────────────────────────────────────────────
(function () {
  function initServiceChips() {
    var chips = document.querySelectorAll('.serv-chip');
    var label = document.getElementById('calServiceLabel');
    var step1 = document.getElementById('bstep1');
    var step2 = document.getElementById('bstep2');

    if (!chips.length) return;

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');

        // Update frame header label (service name, no emoji)
        if (label) {
          var nameEl = chip.querySelector('[data-i18n]');
          label.textContent = nameEl ? nameEl.textContent.trim() : (chip.dataset.serv || '');
        }

        // Update step indicator: step 1 done, step 2 active
        if (step1) { step1.classList.remove('active'); step1.classList.add('done'); }
        if (step2) { step2.classList.remove('done');   step2.classList.add('active'); }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServiceChips);
  } else {
    initServiceChips();
  }
})();

// ──────────────────────────────────────────────
// CONTACT FORM TOGGLE
// ──────────────────────────────────────────────
function toggleContactForm(btn) {
  var wrap = document.getElementById('rdv-message');
  if (!wrap) return;
  var isOpen = wrap.style.display !== 'none' && wrap.style.display !== '';
  wrap.style.display = isOpen ? 'none' : 'block';
  // Update the text span inside the button (keep SVG icon)
  if (btn) {
    var span = btn.querySelector('span[data-i18n]') || btn.querySelector('span');
    if (span) {
      span.textContent = isOpen ? 'Envoyer un message' : 'Fermer le formulaire';
    }
    btn.classList.toggle('active', !isOpen);
  }
  if (!isOpen) {
    setTimeout(function () { wrap.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
  }
}

// ──────────────────────────────────────────────
// RDV TAB SWITCHER (legacy compat, hidden tabs)
// ──────────────────────────────────────────────
(function () {
  function initTabs() {
    var tabs = document.querySelectorAll('.rdv-tab');
    var panels = document.querySelectorAll('.rdv-panel');
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); p.style.display = 'none'; });
        tab.classList.add('active');
        var target = document.getElementById('rdv-' + tab.dataset.rdvTab);
        if (target) { target.classList.add('active'); target.style.display = 'block'; }
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
  } else {
    initTabs();
  }
})();

// ──────────────────────────────────────────────
// CAL.COM POPUP INIT
// ──────────────────────────────────────────────
(function () {
  function initCal() {
    if (typeof Cal === 'undefined') {
      setTimeout(initCal, 400);
      return;
    }
    // Popup mode: Cal.com auto-wires buttons with data-cal-link attribute
    Cal("init", "reservation-salon-reda", { origin: "https://cal.com" });
    Cal.ns["reservation-salon-reda"]("ui", {
      theme: "dark",
      styles: { branding: { brandColor: "#C9A96E" } },
      cssVarsPerTheme: {
        dark: {
          "cal-bg":             "#0e0e0e",
          "cal-bg-emphasis":    "#181818",
          "cal-bg-subtle":      "#141414",
          "cal-border":         "rgba(201,169,110,0.15)",
          "cal-border-emphasis":"rgba(201,169,110,0.30)",
          "cal-text":           "#F0EDE8",
          "cal-text-emphasis":  "#F0EDE8",
          "cal-text-muted":     "#8A8178",
          "cal-brand":          "#C9A96E",
          "cal-brand-emphasis": "#d4b87e",
          "cal-brand-text":     "#080808"
        }
      },
      hideEventTypeDetails: true,
      layout: "month_view"
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCal);
  } else {
    initCal();
  }
})();

// ──────────────────────────────────────────────
// BOOKING SUCCESS OVERLAY
// ──────────────────────────────────────────────
function showBSO(bookingData) {
  var overlay = document.getElementById('bsOverlay');
  if (!overlay) return;

  // Re-run i18n on the overlay card
  var t = T[currentLang] || T.fr;
  overlay.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    if (t[key].includes('<')) { el.innerHTML = t[key]; }
    else { el.textContent = t[key]; }
  });

  // Build booking details block
  var detailsEl = document.getElementById('bsoDetails');
  if (detailsEl) {
    detailsEl.innerHTML = '';
    var startTime = bookingData && (bookingData.startTime || (bookingData.booking && bookingData.booking.startTime));
    var title = bookingData && (bookingData.title || (bookingData.booking && bookingData.booking.title));

    var rows = '';

    // Date & Time row
    if (startTime) {
      var dt = new Date(startTime);
      var dateFmt = dt.toLocaleDateString(
        currentLang === 'ar' ? 'ar-MA' : (currentLang === 'en' ? 'en-GB' : 'fr-FR'),
        { weekday:'long', day:'numeric', month:'long', year:'numeric' }
      );
      var timeFmt = dt.toLocaleTimeString(
        currentLang === 'ar' ? 'ar-MA' : (currentLang === 'en' ? 'en-GB' : 'fr-FR'),
        { hour:'2-digit', minute:'2-digit' }
      );
      var calIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
      var clockIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
      rows +=
        '<div class="bso-detail-row">' +
          '<div class="bso-detail-icon">' + calIcon + '</div>' +
          '<div><div class="bso-detail-label">' + (t.bso_date_lbl || 'Date') + '</div>' +
               '<div class="bso-detail-val">' + dateFmt + '</div></div>' +
        '</div>' +
        '<div class="bso-detail-row">' +
          '<div class="bso-detail-icon">' + clockIcon + '</div>' +
          '<div><div class="bso-detail-label">' + (t.bso_time_lbl || 'Heure') + '</div>' +
               '<div class="bso-detail-val">' + timeFmt + '</div></div>' +
        '</div>';
    }

    // Service row (from selected chip or title)
    var activeChip = document.querySelector('.serv-chip.active [data-i18n]');
    var serviceName = (activeChip && activeChip.textContent.trim()) || title || '';
    if (serviceName) {
      var scissIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>';
      rows +=
        '<div class="bso-detail-row">' +
          '<div class="bso-detail-icon">' + scissIcon + '</div>' +
          '<div><div class="bso-detail-label">' + (t.bso_serv_lbl || 'Service') + '</div>' +
               '<div class="bso-detail-val">' + serviceName + '</div></div>' +
        '</div>';
    }

    if (rows) { detailsEl.innerHTML = rows; }
  }

  // Show
  overlay.style.display = 'flex';
  overlay.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(function() {
    requestAnimationFrame(function() { overlay.classList.add('bso-visible'); });
  });
  document.body.style.overflow = 'hidden';
}

function closeBSO() {
  var overlay = document.getElementById('bsOverlay');
  if (!overlay) return;
  overlay.classList.remove('bso-visible');
  overlay.setAttribute('aria-hidden', 'true');
  setTimeout(function() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }, 420);
}

// Hook Cal.com bookingSuccessful event
(function () {
  var bsoShown = false; // guard: only show once per booking

  function triggerBSO(data) {
    if (bsoShown) return;
    bsoShown = true;
    // Show our custom overlay immediately
    showBSO(data || {});
    // Close Cal.com popup in background (user never sees it close)
    setTimeout(function() {
      try {
        document.dispatchEvent(new KeyboardEvent('keydown', {
          key: 'Escape', keyCode: 27, bubbles: true, cancelable: true
        }));
      } catch(e) {}
      try {
        var btn = document.querySelector(
          '[data-testid="close-button"], button[aria-label="Close"], ' +
          'button[aria-label="close"], .cal-embed [aria-label*="lose"]'
        );
        if (btn) btn.click();
      } catch(e) {}
    }, 80);
    // Reset guard after overlay is dismissed so next booking works
    setTimeout(function() { bsoShown = false; }, 5000);
  }

  // ── Method 1: window.postMessage (main channel for popup embeds) ──
  window.addEventListener('message', function(e) {
    try {
      var msg = e.data;
      if (typeof msg === 'string') { try { msg = JSON.parse(msg); } catch(_) { return; } }
      if (!msg) return;
      // Cal.com sends: { action:"bookingSuccessful", ... } or nested in .data
      var action = msg.action || (msg.data && msg.data.action) || msg.type || '';
      if (/bookingSuccessful/i.test(action)) {
        triggerBSO(msg.data || msg);
      }
    } catch(e) {}
  });

  // ── Method 2: Cal namespace .on() (works for inline embeds) ──
  function hookCalNamespace() {
    if (typeof Cal === 'undefined') { setTimeout(hookCalNamespace, 600); return; }
    var ns = Cal.ns && Cal.ns['reservation-salon-reda'];
    if (!ns) { setTimeout(hookCalNamespace, 600); return; }
    ['bookingSuccessful', 'bookingSuccessfulV2'].forEach(function(evtName) {
      try {
        ns('on', {
          action: evtName,
          callback: function(e) {
            var data = (e && e.detail && (e.detail.data || e.detail)) || {};
            triggerBSO(data);
          }
        });
      } catch(e) {}
    });
    // Also try on global Cal
    try {
      ['bookingSuccessful', 'bookingSuccessfulV2'].forEach(function(evtName) {
        Cal('on', { action: evtName, callback: function(e) {
          var data = (e && e.detail && (e.detail.data || e.detail)) || {};
          triggerBSO(data);
        }});
      });
    } catch(e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookCalNamespace);
  } else {
    hookCalNamespace();
  }
})();

// ──────────────────────────────────────────────
// NAV "RÉSERVER" → scroll to #contact + open calendar tab
// ──────────────────────────────────────────────
(function () {
  function initNavCta() {
    const cta = document.querySelector('.nav-cta');
    if (!cta) return;
    cta.addEventListener('click', function () {
      setTimeout(function () {
        const calTab   = document.querySelector('.rdv-tab[data-rdv-tab="calendar"]');
        const calPanel = document.getElementById('rdv-calendar');
        const msgTab   = document.querySelector('.rdv-tab[data-rdv-tab="message"]');
        const msgPanel = document.getElementById('rdv-message');
        if (calTab && calPanel) {
          if (msgTab)   msgTab.classList.remove('active');
          if (msgPanel) msgPanel.classList.remove('active');
          calTab.classList.add('active');
          calPanel.classList.add('active');
        }
      }, 600);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavCta);
  } else {
    initNavCta();
  }
})();