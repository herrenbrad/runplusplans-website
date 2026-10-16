const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

const setMenu = (open) => {
  menuButton?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
};

menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

// Analytics: push CTA clicks + UTM attribution to dataLayer
window.dataLayer = window.dataLayer || [];
const track = (event, details = {}) => window.dataLayer.push({ event, ...details });
const params = new URLSearchParams(window.location.search);
const attribution = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].reduce((result, key) => {
  if (params.get(key)) result[key] = params.get(key);
  return result;
}, {});
try {
  if (Object.keys(attribution).length) sessionStorage.setItem('runeq_attribution', JSON.stringify(attribution));
} catch (_) {}

document.querySelectorAll('[data-track]').forEach((link) => link.addEventListener('click', () => {
  let stored = {};
  try { stored = JSON.parse(sessionStorage.getItem('runeq_attribution') || '{}'); } catch (_) {}
  track('marketing_cta_click', { cta: link.dataset.track, label: link.textContent.trim(), destination: link.href, ...stored });
}));

document.querySelectorAll('.faq-list details').forEach((item) => item.addEventListener('toggle', () => {
  if (item.open) track('faq_open', { question: item.querySelector('summary')?.textContent.trim() });
}));
