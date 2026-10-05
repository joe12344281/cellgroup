const body = document.body;
const zhBtn = document.getElementById('zhBtn');
const enBtn = document.getElementById('enBtn');

function setLang(lang){
  body.dataset.lang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
  zhBtn.classList.toggle('active', lang === 'zh');
  enBtn.classList.toggle('active', lang === 'en');
  localStorage.setItem('pj-language', lang);
}

zhBtn.addEventListener('click', () => setLang('zh'));
enBtn.addEventListener('click', () => setLang('en'));

const saved = localStorage.getItem('pj-language');
if (saved === 'en') setLang('en');
else setLang('zh');
