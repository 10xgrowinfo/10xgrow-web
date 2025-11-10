// Basic interactivity: mobile nav, demo scenarios, form validation, CTA tracking

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggles
  ['nav-toggle','nav-toggle-2','nav-toggle-3','nav-toggle-4'].forEach(id=>{
    const btn = document.getElementById(id);
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      const nav = btn.previousElementSibling;
      if(nav && nav.classList.contains('nav')){
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  });

  // Demo scenarios (simulated)
  const demoOutput = document.getElementById('demo-output');
  document.querySelectorAll('.scenario').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const s = btn.getAttribute('data-scenario');
      simulateScenario(s);
      trackCTA(btn.getAttribute('data-cta') || `scenario-${s}`);
    });
  });

  function simulateScenario(name){
    if(!demoOutput) return;
    demoOutput.textContent = 'Simulating...';
    setTimeout(()=>{
      if(name === 'support'){
        demoOutput.textContent = 'AI Agent: "Hi! I can help with your order. What is the order number?" → Provides a resolution & ticket created.';
      } else if(name === 'booking'){
        demoOutput.textContent = 'AI Agent: "I can book that for you. Are mornings or afternoons better?" → Appointment booked and calendar invite sent.';
      } else {
        demoOutput.textContent = 'AI Agent: "Quick qualification questions..." → Lead qualified and passed to sales with summary.';
      }
    }, 700);
  }

  // Form submissions (client-side only)
  const demoForm = document.getElementById('demo-form');
  if(demoForm){
    demoForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const msg = document.getElementById('demo-form-msg');
      msg.textContent = 'Thanks — your demo request has been received. We will contact you shortly.';
      demoForm.reset();
      trackCTA('demo-request-submitted');
    });
    document.getElementById('contact-sales')?.addEventListener('click', ()=>{
      window.location.href = 'mailto:sales@10xgrow.com';
      trackCTA('contact-sales-mailto');
    });
  }

  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const msg = document.getElementById('contact-form-msg');
      msg.textContent = 'Message sent. Our team will reply within one business day.';
      contactForm.reset();
      trackCTA('contact-request-submitted');
    });
  }

  // CTA tracking (placeholder)
  document.querySelectorAll('[data-cta]').forEach(el=>{
    el.addEventListener('click', ()=> {
      trackCTA(el.getAttribute('data-cta'));
    });
  });

  function trackCTA(name){
    // Placeholder tracking — replace with analytics integration
    console.info('CTA click:', name, 'time:', new Date().toISOString());
    // Example: send to your analytics endpoint
    // navigator.sendBeacon('/analytics', JSON.stringify({event:'cta_click', name, ts:Date.now()}));
  }

});