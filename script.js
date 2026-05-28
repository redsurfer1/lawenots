(function(){var m={services:'/services',about:'/about',contact:'/contact'},h=location.hash.replace('#','');if(m[h])location.replace(m[h]+location.search)})();

var mobileToggle=document.getElementById('mobileToggle');
if(mobileToggle){mobileToggle.addEventListener('click',function(){var navLinks=document.getElementById('navLinks');var open=navLinks&&navLinks.classList.toggle('open');mobileToggle.setAttribute('aria-expanded',open?'true':'false');mobileToggle.setAttribute('aria-label',open?'Close menu':'Open menu')})}
document.querySelectorAll('.nav-links a').forEach(function(l){l.addEventListener('click',function(){var nl=document.getElementById('navLinks');if(nl)nl.classList.remove('open')})});

// Sticky header border on scroll
(function(){var nav=document.querySelector('nav');if(!nav)return;window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>20)},{passive:true})})();

// Scroll-to-top button
(function(){var btn=document.createElement('button');btn.className='scroll-top';btn.setAttribute('aria-label','Back to top');btn.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>';document.body.appendChild(btn);window.addEventListener('scroll',function(){btn.classList.toggle('visible',window.scrollY>300)},{passive:true});btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})})();

// Cookie notice (localStorage-dismissed)
(function(){if(localStorage.getItem('cookieOk'))return;var notice=document.createElement('div');notice.className='cookie-notice';notice.setAttribute('role','region');notice.setAttribute('aria-label','Cookie notice');notice.innerHTML='<span>We use essential cookies to keep the site running. <a href="/privacy">Privacy policy<\/a>.<\/span><div class="cookie-notice-actions"><button class="cookie-dismiss" id="cookieDismiss">Dismiss<\/button><button class="cookie-accept" id="cookieAccept">Got it<\/button><\/div>';document.body.appendChild(notice);requestAnimationFrame(function(){notice.classList.add('visible')});function dismiss(){notice.classList.remove('visible');localStorage.setItem('cookieOk','1');setTimeout(function(){notice.remove()},300)}document.getElementById('cookieAccept').addEventListener('click',dismiss);document.getElementById('cookieDismiss').addEventListener('click',dismiss)})();

// Contact form — Web3Forms fetch submission
// Replace YOUR_WEB3FORMS_KEY in contact/index.html with your key from web3forms.com (free)
var contactForm=document.querySelector('.contact-form');
if(contactForm){contactForm.addEventListener('submit',function(e){e.preventDefault();var b=this.querySelector('.btn-submit');var data=new FormData(this);b.textContent='Sending…';b.disabled=true;fetch('https://api.web3forms.com/submit',{method:'POST',body:data}).then(function(r){return r.json()}).then(function(r){if(r.success){b.textContent="Sent. We’ll be in touch.";b.style.opacity='0.6'}else{b.textContent='Error — try again';b.disabled=false}}).catch(function(){b.textContent='Error — try again';b.disabled=false})})}
