(async function(){
  const root=document.getElementById('page-root');
  const files=['content-1.html','content-2.html','content-3.html'];
  const parts=await Promise.all(files.map(f=>fetch(f).then(r=>{if(!r.ok)throw new Error(f+' '+r.status);return r.text();})));
  root.innerHTML=parts.join('');
  await loadScript('chart.js');
  await loadScript('app.js');
  function loadScript(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.body.appendChild(s);});}
})().catch(err=>{
  document.getElementById('page-root').innerHTML='<p style="padding:24px;font-family:Arial,sans-serif">Page failed to load. Please refresh.</p>';
  console.error(err);
});
