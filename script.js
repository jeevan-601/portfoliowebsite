
const marqueeItems = [
    { name: 'Telegram', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 2.5l-19 7.4c-.9.4-.9 1.7.1 2l4.7 1.5 1.8 5.8c.2.7 1.1.9 1.6.4l2.6-2.4 4.6 3.4c.7.5 1.7.2 1.9-.7l3.4-16c.2-1-.8-1.7-1.7-1.4zM8.6 13.6l8.8-6.2c.3-.2.6.2.3.4l-7.3 7.1c-.3.3-.5.7-.5 1.1l-.3 2.8-1-5.2z"/></svg>' },
    { name: 'Discord', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 5.4A18 18 0 0015.6 4l-.3.5a14 14 0 014.2 1.6 14.8 14.8 0 00-15 0A14 14 0 014.7 4.5L4.4 4a18 18 0 00-4.7 1.4C-2 9.6-1 14 .3 18.2a17.8 17.8 0 005.3 2.7l.7-1a13 13 0 01-2-1l.5-.4a13 13 0 0011.4 0l.5.4a13 13 0 01-2 1l.7 1a17.8 17.8 0 005.3-2.7c1.5-4.6 1-8.9-1.9-12.8zM8.4 14.8c-1 0-1.7-.9-1.7-2s.8-2 1.7-2 1.7.9 1.7 2-.7 2-1.7 2zm6.8 0c-1 0-1.7-.9-1.7-2s.7-2 1.7-2 1.7.9 1.7 2-.7 2-1.7 2z"/></svg>' },
    { name: 'n8n', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M7.3 11l9.4-3.5M7.3 13l9.4 3.5"/></svg>' },
    { name: 'Zapier', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.6 7.4H22l-6 4.6 2.6 7.4L12 17l-6.6 4.4L8 14 2 9.4h7.4z"/></svg>' },
    { name: 'Make', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/></svg>' },
    { name: 'Notion', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7v10M7 7l10 10M17 7v10"/></svg>' },
    { name: 'Stripe', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 8.4c0-1 1-1.4 2.4-1.4a9 9 0 014.1 1.1V4.2A11 11 0 0016 3.2c-3.6 0-6 1.9-6 5 0 4.9 6.7 4.1 6.7 6.2 0 1.1-1 1.5-2.5 1.5a10 10 0 01-4.7-1.4v3.9a11 11 0 004.7 1c3.7 0 6.3-1.8 6.3-5 0-5.3-6.7-4.3-6.7-6.2z"/></svg>' },
    { name: 'OpenAI', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2"/></svg>' },
];

const websiteProjects = [
    {
        title: 'Elite Inn — Hotel Website', cat: 'Hospitality', stack: ['HTML', 'CSS', 'JavaScript'],
        img : "images/elite_inn.png",
        summary: 'A clean hotel website with room highlights, amenities, and direct inquiry flow.',
        problem: 'The hotel needed a modern website to showcase rooms and improve direct inquiries.',
        solution: 'Built a responsive landing experience with clear room sections and booking-focused CTAs.',
        result: 'The property now has a professional online presence that drives direct WhatsApp inquiries.',
        link: 'https://elite-inn.vercel.app/'
    },
    {
        title: 'Restaurant Landing Page', cat: 'Food & Beverage', stack: ['HTML', 'CSS', 'JavaScript'],
        summary: 'A modern restaurant landing page focused on menu discovery and table interest.',
        problem: 'The business needed a fast site visitors could browse easily on mobile.',
        solution: 'Designed a lightweight scrolling layout with strong visuals and clear action points.',
        result: 'Visitors can now quickly view offerings and reach out from one focused page.',
        link: 'https://jeevan-601.github.io/restaurantlandingpage/'
    },
    {
        title: 'Personal Portfolio Website', cat: 'Portfolio', stack: ['HTML', 'CSS', 'JavaScript'],
        summary: 'A portfolio website to present services, projects, and contact options.',
        problem: 'There was no central place to show work and service capabilities.',
        solution: 'Built a single-page portfolio with project sections, service cards, and direct contact CTA.',
        result: 'The portfolio now acts as the main credibility hub for client conversations.',
        link: 'https://jeevan-601.github.io/portfoliowebsite/'
    },
];

const botProjects = [
    {
        title: 'E-commerce Order & Inventory Automation',
        platform: 'n8n',
        outcome: 'Real-time order and stock synchronization',
        problem: 'Online stores struggle to keep order records, inventory levels, and customer updates synchronized.',
        solution: 'Built an n8n workflow to process new orders, update inventory, and send automatic order notifications.',
        result: 'Order processing and stock updates are now synchronized automatically.'
    },
    {
        title: 'AI-Powered Customer Support',
        platform: 'n8n',
        outcome: 'Faster customer query resolution',
        problem: 'Businesses receive repetitive customer enquiries that require time-consuming manual responses.',
        solution: 'Created an n8n workflow integrating AI and WhatsApp to answer common queries and forward complex requests to support staff.',
        result: 'Routine enquiries are handled automatically while important issues reach the right team.'
    },
    {
        title: 'Automated Sales & Lead Management',
        platform: 'n8n',
        outcome: 'Consistent lead tracking and follow-ups',
        problem: 'Potential customers are often missed due to delayed responses and scattered enquiry records.',
        solution: 'Developed an n8n workflow to capture website leads, classify enquiries, update CRM records, and trigger follow-up notifications.',
        result: 'Lead management and customer follow-ups are now handled through a centralized automated workflow.'
    }
];

const services = [
    {
        title: 'Website Design & Development', desc: 'Fast, modern sites built to convert visitors into customers.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="6.5" cy="6.5" r=".6" fill="currentColor"/></svg>'
    },
    {
        title: 'E-commerce Builds', desc: 'Storefronts engineered for speed, trust, and checkout completion.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>'
    },
    {
        title: 'Workflow Automation', desc: 'n8n-first automation pipelines that remove repetitive manual work.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M7.3 11l9.4-3.5M7.3 13l9.4 3.5"/></svg>'
    },
    {
        title: 'Telegram Bot Development', desc: 'Custom bots for orders, payments, support, and community management.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21.5 2.5l-19 7.4 4.7 1.5 1.8 5.8 2.6-2.4 4.6 3.4z"/></svg>'
    },
    {
        title: 'Discord Bot Development', desc: 'Moderation, onboarding, and engagement bots built from scratch.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="7" width="16" height="11" rx="3"/><path d="M9 4l1.5 3M15 4l-1.5 3"/><circle cx="9" cy="12.5" r="1" fill="currentColor"/><circle cx="15" cy="12.5" r="1" fill="currentColor"/></svg>'
    },
    {
        title: 'Maintenance & Support Retainers', desc: 'Ongoing updates, monitoring, and fixes so everything keeps running.',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 11-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l3-3-3-3z"/></svg>'
    },
];

const faqs = [
    { q: 'How long does a website or automation take to build?', a: 'Most websites take 2–4 weeks from kickoff to launch, depending on scope. n8n automations typically take 1–3 weeks. I\'ll give you a firm timeline after our first call, once I understand exactly what you need.' },
    { q: 'Do you offer ongoing maintenance after launch?', a: 'Yes. Every project can move onto a monthly retainer that covers updates, monitoring, small fixes, and priority support — so you\'re never stuck waiting on a freelancer who\'s moved on.' },
    { q: 'Can you automate my existing tools and workflows?', a: 'In most cases, yes. If your tools have an API, I can usually connect them with n8n. Tell me what you\'re currently doing by hand, and I\'ll tell you honestly whether it\'s automatable.' },
    { q: 'Do you build n8n workflows from scratch?', a: 'Yes — every workflow is built around your exact process, not a copy-paste template. That means it can handle routing, notifications, approvals, and reporting based on your business rules.' },
    { q: 'What are your pricing models?', a: 'Most work is quoted as a fixed project price based on scope, so you know the full cost upfront. For ongoing automation work or retainers, I offer monthly pricing. Tell me what you\'re building and I\'ll send a clear quote.' },
];


const marqueeTrack = document.getElementById('marqueeTrack');
const marqueeHtml = marqueeItems.map(m => `<div class="marquee-item">${m.icon}${m.name}</div>`).join('');
marqueeTrack.innerHTML = marqueeHtml + marqueeHtml;


const websiteGrid = document.getElementById('websiteGrid');
websiteGrid.innerHTML = websiteProjects.map((p, i) => `
  <div class="proj-card" data-type="website" data-index="${i}">
    <div class="proj-thumb">
      <div class="proj-thumb-grid"></div>
      <div class="proj-thumb-scene">
        <div class="row"><div class="chip" style="width:30%;"></div></div>
        <div class="block"><div class="scan"></div></div>
      </div>
      <span class="proj-cat">${p.cat}</span>
    </div>
    <div class="proj-body">
      <h4>${p.title}</h4>
      <div class="proj-tags">${p.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div>
      ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="btn btn-secondary" style="margin-top:14px; width:fit-content;">Visit Live</a>` : ``}
    </div>
  </div>
`).join('');


const botIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="7" width="16" height="11" rx="3"/><path d="M9 4l1.5 3M15 4l-1.5 3"/><circle cx="9" cy="12.5" r="1" fill="currentColor"/><circle cx="15" cy="12.5" r="1" fill="currentColor"/></svg>';
const botGrid = document.getElementById('botGrid');
botGrid.innerHTML = botProjects.map((p, i) => `
  <div class="bot-card" data-type="bot" data-index="${i}">
    <div class="bot-card-top">
      <div class="bot-icon">${botIcon}</div>
      <span class="platform-tag">${p.platform}</span>
    </div>
    <h4>${p.title}</h4>
    <div class="bot-outcome">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l5-5 4 4 8-8"/></svg>
      ${p.outcome}
    </div>
    <div class="bot-flow">
      ${[0, 1, 2, 3].map(i => `<div class="node" style="--i:${i}"></div>${i < 3 ? `<div class="line" style="--i:${i}"></div>` : ''}`).join('')}
    </div>
  </div>
`).join('');


document.getElementById('servicesGrid').innerHTML = services.map(s => `
  <div class="service-card">
    <div class="service-icon">${s.icon}</div>
    <h4>${s.title}</h4>
    <p>${s.desc}</p>
  </div>
`).join('');


const faqList = document.getElementById('faqList');
faqList.innerHTML = faqs.map((f, i) => `
  <div class="faq-item" data-index="${i}">
    <button class="faq-q">${f.q}<span class="faq-icon"></span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>
`).join('');
faqList.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqList.querySelectorAll('.faq-item').forEach(other => {
            other.classList.remove('open');
            other.querySelector('.faq-a').style.maxHeight = null;
        });
        if (!isOpen) {
            item.classList.add('open');
            a.style.maxHeight = a.scrollHeight + 'px';
        }
    });
});


const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
function openLightbox(html) {
    lightboxContent.innerHTML = html;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', () => {
        const p = websiteProjects[card.dataset.index];
        openLightbox(`
      <div class="lb-eyebrow">case study — website</div>
      <h3>${p.title}</h3>
      <div class="lb-block"><h4>The Problem</h4><p>${p.problem}</p></div>
      <div class="lb-block"><h4>The Solution</h4><p>${p.solution}</p></div>
      <div class="lb-block"><h4>The Result</h4><p>${p.result}</p></div>
      <div class="lb-tags">${p.stack.map(s => `<span class="tag">${s}</span>`).join('')}<span class="tag">${p.cat}</span></div>
      ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="btn btn-secondary" style="margin-top:18px; margin-right:10px;">View Live Project</a>` : ``}
      <a href="#contact" class="btn btn-primary" style="margin-top:28px;" onclick="closeLightboxNow()">Start a project like this</a>
    `);
    });
});
document.querySelectorAll('.bot-card').forEach(card => {
    card.addEventListener('click', () => {
        const p = botProjects[card.dataset.index];
        openLightbox(`
      <div class="lb-eyebrow">case study — automation</div>
      <h3>${p.title}</h3>
      <div class="lb-block"><h4>The Problem</h4><p>${p.problem}</p></div>
      <div class="lb-block"><h4>The Solution</h4><p>${p.solution}</p></div>
      <div class="lb-block"><h4>The Result</h4><p>${p.result}</p></div>
      <div class="lb-tags"><span class="tag">${p.platform}</span></div>
      <a href="#contact" class="btn btn-primary" style="margin-top:28px;" onclick="closeLightboxNow()">Start a project like this</a>
    `);
    });
});
function closeLightboxNow() { setTimeout(closeLightbox, 50); }

const terminalLines = [
    { prefix: '$', text: 'deploying workflow <span class="path">order-pipeline.json</span>' },
    { prefix: '→', text: '<span class="info">connecting</span> Telegram Bot API...' },
    { prefix: '✓', text: '<span class="ok">connected</span> — bot @OrbitOrders is live' },
    { prefix: '→', text: 'syncing inventory from <span class="path">Stripe</span>...' },
    { prefix: '✓', text: '<span class="ok">3 new orders</span> processed automatically' },
    { prefix: '→', text: 'sending confirmation to <span class="path">customer #1182</span>' },
    { prefix: '✓', text: '<span class="ok">deploy succeeded</span> — 0 errors, 0 manual steps' },
];
const terminalBody = document.getElementById('terminalBody');
let termRunning = false;
async function typeLine(el, html) {
    return new Promise(resolve => {
        el.innerHTML = '';
        el.classList.add('show');
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        const fullText = tmp.textContent;
        let i = 0;
        const speed = 14;
        function step() {
            if (i <= fullText.length) {
                // render progressively using innerHTML up to matching plain-text length
                let count = 0, out = '';
                let inTag = false;
                for (let c = 0; c < html.length; c++) {
                    const ch = html[c];
                    if (ch === '<') inTag = true;
                    if (!inTag) count++;
                    out += ch;
                    if (ch === '>') inTag = false;
                    if (count >= i && !inTag) break;
                }
                el.innerHTML = out;
                i++;
                setTimeout(step, speed);
            } else {
                resolve();
            }
        }
        step();
    });
}
async function runTerminal() {
    if (termRunning) return;
    termRunning = true;
    terminalBody.innerHTML = '';
    for (const line of terminalLines) {
        const row = document.createElement('div');
        row.className = 't-line show';
        const prefixSpan = document.createElement('span');
        prefixSpan.className = 't-prefix';
        prefixSpan.textContent = line.prefix;
        const textSpan = document.createElement('span');
        textSpan.className = 't-text';
        row.appendChild(prefixSpan);
        row.appendChild(textSpan);
        terminalBody.appendChild(row);
        await typeLine(textSpan, line.text);
        await new Promise(r => setTimeout(r, 260));
    }
    const cursorRow = document.createElement('div');
    cursorRow.className = 't-line show';
    cursorRow.innerHTML = '<span class="t-prefix">$</span><span class="cursor-blink"></span>';
    terminalBody.appendChild(cursorRow);
    termRunning = false;
}
const terminalObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { runTerminal(); }
    });
}, { threshold: .4 });
terminalObserver.observe(document.querySelector('.terminal'));


const particleField = document.getElementById('particleField');
for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1.5;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.opacity = Math.random() * 0.5 + 0.15;
    particleField.appendChild(p);
    const duration = Math.random() * 14 + 10;
    p.animate([
        { transform: 'translateY(0px)' },
        { transform: `translateY(${-(Math.random() * 70 + 40)}px)` },
        { transform: 'translateY(0px)' }
    ], { duration: duration * 1000, iterations: Infinity, easing: 'ease-in-out' });
}


const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: .15 });
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => revealObserver.observe(el));


const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            const duration = 1600;
            const start = performance.now();
            function tick(now) {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(eased * target);
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            countObserver.unobserve(el);
        }
    });
}, { threshold: .5 });
document.querySelectorAll('.count-up').forEach(el => countObserver.observe(el));


const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });
navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.classList.remove('open');
}));

const cursorGlow = document.getElementById('cursorGlow');
let glowActive = false;
window.addEventListener('mousemove', e => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    if (!glowActive) { cursorGlow.style.opacity = '1'; glowActive = true; }
});
window.addEventListener('mouseleave', () => { cursorGlow.style.opacity = '0'; glowActive = false; });


document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const id = link.getAttribute('href');
        if (id.length > 1 && document.querySelector(id)) {
            e.preventDefault();
            const target = document.querySelector(id);
            const offset = target.getBoundingClientRect().top + window.scrollY - 84;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    });
});
