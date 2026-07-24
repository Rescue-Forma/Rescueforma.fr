/* Header + footer communs à toutes les pages */

const HEADER_HTML = `
<div class="header-top">
  <div class="wrap">
    <span>Organisme de formation professionnelle — Région PACA</span>
    <span class="ht-right">
      <a href="mailto:contact@rescueforma.fr">contact@rescueforma.fr</a>
    </span>
  </div>
</div>
<div class="header-main">
  <div class="wrap">
    <a href="index.html" class="brand">
      <svg class="brand-mark" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3L5 10v9c0 8 6 14.5 14 16.5C27 33.5 33 27 33 19v-9L19 3z" fill="none" stroke="#1E6091" stroke-width="2"/>
        <path d="M19 9l-5 9h4l-2 8 8-11h-4l2-6z" fill="#1E6091"/>
      </svg>
      <span class="brand-name">
        <span class="l1">Rescue Forma</span>
        <span class="l2">FORMATION &middot; PR&Eacute;VENTION</span>
      </span>
    </a>
    <nav class="main-nav" id="mainNav">
      <a href="index.html" data-page="index">Accueil</a>
      <a href="formations.html" data-page="formations">Formations</a>
      <a href="secteurs.html" data-page="secteurs">Secteurs d'expertise</a>
      <a href="supports.html" data-page="supports">Supports stagiaires</a>
      <a href="contact.html" class="nav-devis" data-page="contact">Demander un devis</a>
    </nav>
    <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</div>`;

const FOOTER_HTML = `
<div class="wrap">
  <div class="footer-grid">
    <div>
      <h5>Rescue Forma</h5>
      <p class="footer-brand-txt">Organisme de formation professionnelle spécialisé en prévention des risques, secourisme, incendie et sûreté. Formateurs issus du terrain, en activité.</p>
    </div>
    <div>
      <h5>Formations</h5>
      <ul>
        <li><a href="formations.html#SEC">Secourisme</a></li>
        <li><a href="formations.html#INC">Incendie &amp; évacuation</a></li>
        <li><a href="formations.html#SUR">Sûreté &amp; sécurité</a></li>
        <li><a href="formations.html#PRE">Prévention &amp; santé</a></li>
        <li><a href="formations.html#HYG">Restauration &amp; hygiène</a></li>
      </ul>
    </div>
    <div>
      <h5>Secteurs</h5>
      <ul>
        <li><a href="secteurs.html#sante">Santé &amp; médico-social</a></li>
        <li><a href="secteurs.html#resto">Restauration &amp; hôtellerie</a></li>
        <li><a href="secteurs.html#entreprises">Entreprises &amp; collectivités</a></li>
      </ul>
    </div>
    <div>
      <h5>Contact &amp; ressources</h5>
      <ul>
        <li><a href="mailto:contact@rescueforma.fr">contact@rescueforma.fr</a></li>
        <li><a href="contact.html">Demander un devis</a></li>
        <li><a href="supports.html">Supports stagiaires</a></li>
        <li><a href="#">Région PACA</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2026 Rescue Forma SAS &mdash; Organisme de formation professionnelle &middot; SAS en cours d'immatriculation</span>
    <span>NDA en cours &middot; Certification Qualiopi visée &middot; Habilitation INRS visée</span>
  </div>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  if (header) header.innerHTML = HEADER_HTML;
  if (footer) footer.innerHTML = FOOTER_HTML;

  const burger = document.getElementById('burger');
  const nav = document.getElementById('mainNav');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('.main-nav a').forEach(a => {
      if (a.dataset.page === page) a.classList.add('active');
    });
  }
});
