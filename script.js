// Basic interactivity: mobile nav, demo scenarios, form handling, CTA tracking

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

  // Demo form handling (compose mailto to info@10xgrow.ai)
  const demoForm = document.getElementById('demo-form');
  if(demoForm){
    demoForm.addEventListener('submit', (e)=>{
      e.preventDefault();

      const formData = new FormData(demoForm);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const company = (formData.get('company') || '').toString().trim();
      const notes = (formData.get('notes') || '').toString().trim();
      let datetime = (formData.get('datetime') || '').toString().trim();

      // If a suggested slot is chosen, prefer that
      const slotChecked = document.querySelector('input[name="slot"]:checked');
      if(slotChecked && slotChecked.value){
        datetime = slotChecked.value;
      }

      const to = 'info@10xgrow.ai';
      const subject = `10xGrow Demo Request — ${name || email || 'New Request'}`;
      const body = [
        'Demo request details:',
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Preferred time: ${datetime}`,
        `Notes: ${notes}`,
        '',
        'Sent from: 10xgrow.ai demo page'
      ].join('\n');

      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      const msg = document.getElementById('demo-form-msg');
      if(msg){
        msg.style.color = 'green';
        msg.textContent = 'Preparing an email with your demo request — please send it from your email client.';
      }
      demoForm.reset();
      trackCTA('demo-request-submitted');
    });

    document.getElementById('contact-sales')?.addEventListener('click', ()=>{
      window.location.href = 'mailto:info@10xgrow.ai';
      trackCTA('contact-sales-mailto');
    });
  }

  // Contact form handling (compose mailto to info@10xgrow.ai)
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const company = (formData.get('company') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();

      const to = 'info@10xgrow.ai';
      const subject = `10xGrow Contact — ${name || email || 'New Message'}`;
      const body = [
        'Contact message:',
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Message: ${message}`,
        '',
        'Sent from: 10xgrow.ai contact page'
      ].join('\n');

      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      const msg = document.getElementById('contact-form-msg');
      if(msg){
        msg.style.color = 'green';
        msg.textContent = 'Preparing an email with your message — please send it from your email client.';
      }
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