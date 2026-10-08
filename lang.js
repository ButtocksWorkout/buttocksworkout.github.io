(function () {
  var root = document.documentElement;
  var param = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var browser = (navigator.language || 'ru').toLowerCase();
  var guess = /^(ru|uk|be|kk|uz|ky|tg)/.test(browser) ? 'ru' : 'en';
  var lang = param === 'en' || param === 'ru' ? param : (saved || guess);

  function apply(l) {
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l);
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.l === l ? 'true' : 'false');
    });
    try { localStorage.setItem('lang', l); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.dataset.l); });
    });
    apply(lang);
  });
  root.setAttribute('data-lang', lang);
})();
