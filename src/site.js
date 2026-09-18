
export function initApexIgnite() {
  if (typeof window === 'undefined') return;

  try {
    const topBar = document.getElementById('nrj_Header-topbar');
    const mainHeader = document.getElementById('headeriD-NRJ');

    function handleHeaderSticky() {
      var topH = topBar ? topBar.offsetHeight : 0;
      var mainH = mainHeader ? mainHeader.offsetHeight : 0;
      var totalH = topH + mainH;

      if (window.scrollY > 40) {
        try { document.body.style.paddingTop = totalH + 'px'; } catch (e) {}
        if (topBar) topBar.classList.add('hide');
        if (mainHeader && !mainHeader.classList.contains('sticky')) {
          mainHeader.classList.add('sticky');
        }
      } else {
        if (topBar) topBar.classList.remove('hide');
        if (mainHeader && mainHeader.classList.contains('sticky')) {
          mainHeader.classList.remove('sticky');
        }
        try { document.body.style.paddingTop = ''; } catch (e) {}
      }
    }

    window.addEventListener('scroll', handleHeaderSticky, { passive: true });
    handleHeaderSticky();

    const megaNavLinks = document.querySelectorAll('.nrj_Header-has-mega > .nrj_Header-nav-link');
    megaNavLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = this.parentElement;
        const isActive = parent.classList.contains('force-open');
        document.querySelectorAll('.nrj_Header-has-mega').forEach(li => li.classList.remove('force-open'));
        if (!isActive) parent.classList.add('force-open');
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nrj_Header-has-mega')) {
        document.querySelectorAll('.nrj_Header-has-mega').forEach(li => li.classList.remove('force-open'));
      }
    });

    const aboutLinks = document.querySelectorAll('.nrj_Header-mega-about-inner .nrj_Header-mega-link-item');
    const aboutImg = document.getElementById('nrj_Header-about-img');
    aboutLinks.forEach(link => {
      link.addEventListener('mouseenter', function () {
        const newImg = this.getAttribute('data-img');
        if (newImg && aboutImg) {
          aboutImg.style.opacity = '0.3';
          setTimeout(() => {
            aboutImg.src = newImg;
            aboutImg.style.opacity = '1';
          }, 150);
        }
      });
    });

    const prodLinks = document.querySelectorAll('.nrj_Header-mega-products-inner .nrj_Header-prod-item');
    const prodImg = document.getElementById('nrj_Header-prod-img');
    const prodCaption = document.getElementById('nrj_Header-prod-caption');
    prodLinks.forEach(link => {
      link.addEventListener('mouseenter', function () {
        const newImg = this.getAttribute('data-img');
        const newCaptionRaw = this.querySelector('a')?.innerText || '';
        if (newImg && prodImg) {
          prodImg.style.opacity = '0.3';
          setTimeout(() => {
            prodImg.src = newImg;
            prodImg.style.opacity = '1';
          }, 150);
        }
        if (newCaptionRaw && prodCaption) {
          prodCaption.innerHTML = "Precision<br/>" + newCaptionRaw + "<br/>for a Better<br/>Tomorrow";
        }
      });
    });

    const searchTrigger = document.getElementById('nrj_Header-search-trigger');
    const searchOverlay = document.getElementById('nrj_Header-search-overlay');
    const searchCloseZone = document.getElementById('nrj_Header-search-close-zone');
    const searchCloseBtn = document.getElementById('nrj_Header-search-close-btn');
    const searchInput = document.getElementById('nrj_Header-search-input');
    const searchResults = document.getElementById('nrj_Header-search-results');

    const siteSearchItems = [
      { label: 'Home', keywords: ['home', 'start', 'main'], target: 'body' },
      { label: 'About', keywords: ['about', 'company', 'who we are'], target: '#whYCHosee_NRJ_section' },
      { label: 'Products', keywords: ['products', 'components', 'solutions', 'molding'], target: '#NRJProduTT_Call' },
      { label: 'Why Choose Us', keywords: ['why choose', 'advantages', 'benefits'], target: '#whYCHosee_NRJ_section' },
      { label: 'FAQ', keywords: ['faq', 'questions', 'support', 'help'], target: '#faqNErgh' },
      { label: 'Contact', keywords: ['contact', 'quote', 'inquiry', 'send query'], target: '#talkToExpert' },
      { label: 'Quality', keywords: ['quality', 'certified', 'iso', 'standards'], target: '#nrj-Tab' }
    ];

    function openSearch() {
      if (searchOverlay) {
        searchOverlay.classList.add('open');
        if (searchInput) {
          searchInput.value = '';
          if (searchResults) searchResults.innerHTML = '<p style="color:#64748b; font-size:14px; margin-top:20px;">Start typing to see results...</p>';
          setTimeout(() => searchInput.focus(), 100);
        }
      }
    }

    function closeSearch() {
      if (searchOverlay) searchOverlay.classList.remove('open');
    }

    if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
    if (searchCloseZone) searchCloseZone.addEventListener('click', closeSearch);
    if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();
        if (!searchResults) return;
        if (!query) {
          searchResults.innerHTML = '<p style="color:#64748b; font-size:14px; margin-top:20px;">Start typing to see results...</p>';
          return;
        }
        const filtered = siteSearchItems.filter(item =>
          item.label.toLowerCase().includes(query) || item.keywords.some(k => k.includes(query))
        );
        if (!filtered.length) {
          searchResults.innerHTML = '<p style="color:#64748b; font-size:14px; margin-top:20px;">No matching results found.</p>';
          return;
        }
        let html = '<ul style="list-style:none; padding:10px 0; margin:15px 0 0 0; display:flex; flex-direction:column; gap:8px;">';
        filtered.forEach(res => {
          html += '<li class="search-result-row" data-target="' + res.target + '" style="padding:10px 14px; background:#f8fafc; border-radius:8px; cursor:pointer; color:#0045a1; font-weight:600; display:flex; justify-content:space-between; align-items:center;">' + res.label + ' <span style="font-size:12px; color:#64748b;">Jump to &rarr;</span></li>';
        });
        html += '</ul>';
        searchResults.innerHTML = html;
        searchResults.querySelectorAll('.search-result-row').forEach(row => {
          row.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const el = document.querySelector(target);
            if (el) {
              closeSearch();
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });
      });
    }

    const hamburgerTrigger = document.getElementById('nrj_Header-hamburger-trigger');
    const drawer = document.getElementById('nrj_Header-drawer');
    const drawerBackdrop = document.getElementById('nrj_Header-drawer-backdrop');
    const drawerClose = document.getElementById('nrj_Header-drawer-close');

    function openDrawer() {
      if (drawer) drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeDrawer() {
      if (drawer) drawer.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (hamburgerTrigger) hamburgerTrigger.addEventListener('click', openDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

    const accTriggers = document.querySelectorAll('.nrj_Header-drawer .nrj_Header-acc-trigger');
    accTriggers.forEach(btn => {
      btn.addEventListener('click', function () {
        const item = this.closest('.nrj_Header-acc-item');
        const isOpen = item && item.classList.contains('open');
        document.querySelectorAll('.nrj_Header-drawer .nrj_Header-acc-item').forEach(i => i.classList.remove('open'));
        if (item && !isOpen) item.classList.add('open');
      });
    });
  } catch (e) { console.error('Header init error:', e); }

  try {
    const items = document.querySelectorAll('.faq_nrj_item');
    function selectItem(target) {
      items.forEach(el => {
        el.classList.remove('faq_nrj_active');
        el.setAttribute('aria-expanded', 'false');
      });
      target.classList.add('faq_nrj_active');
      target.setAttribute('aria-expanded', 'true');
    }
    items.forEach(item => {
      item.addEventListener('click', function () { selectItem(item); });
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectItem(item);
        }
      });
    });
  } catch (e) { console.error('FAQ init error:', e); }

  try {
    const container = document.getElementById('nrj-Tab');
    if (container) {
      const buttons = container.querySelectorAll('.NRJ-tabMission-btn');
      const panes = container.querySelectorAll('.NRJ-tabMission-pane');
      function switchTab(clickedBtn) {
        const targetId = clickedBtn.getAttribute('data-tab-target');
        buttons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        panes.forEach(pane => pane.classList.remove('active'));
        clickedBtn.classList.add('active');
        clickedBtn.setAttribute('aria-selected', 'true');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      }
      buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          if (this.classList.contains('active')) return;
          switchTab(this);
        });
      });
    }
  } catch (e) { console.error('Tabs init error:', e); }

  try {
    const whyItems = document.querySelectorAll('.whYCHosee_NRJ_reveal');
    whyItems.forEach(el => {
      const delay = el.getAttribute('data-whychosee-delay') || 0;
      el.style.setProperty('--whychosee-delay', delay + 'ms');
      el.classList.add('whYCHosee_NRJ_active');
    });
  } catch (e) { console.error('WhyChooseUs init error:', e); }

  try {
    const hexWraps = document.querySelectorAll('.chitkara-hex-wrap');
    hexWraps.forEach((wrap, index) => {
      wrap.style.transitionDelay = ((index % 6) * 0.08) + 's';
      wrap.classList.add('is-visible');
    });
  } catch (e) { console.error('Hex grid init error:', e); }

  try {
    const NRJEl = {
      spacer: document.getElementById('NRJProduTT_Call'),
      bgSlide: document.querySelector('#NRJProduTT_Call .NRJ_right__bg_slide'),
      track: document.getElementById('NRJ_products_track'),
      overlay: document.getElementById('NRJ_overlay'),
      panel: document.getElementById('NRJ_slide_panel'),
      panelClose: document.getElementById('NRJ_panel_close_btn'),
      panelScroll: document.getElementById('NRJ_panel_scroll'),
      panelImg: document.getElementById('NRJ_panel_img'),
      panelTag: document.getElementById('NRJ_panel__tag'),
      panelHead: document.getElementById('NRJ_panel_heading'),
      panelDesc: document.getElementById('NRJ_panel_desc'),
      sendQuery: document.getElementById('NRJ_btn_send_query'),
      popupWrap: document.getElementById('NRJ_query_popup_wrap'),
      popupClose: document.getElementById('NRJ_popup_close'),
      popupProd: document.getElementById('NRJ_popup_product'),
      popupSubmit: document.getElementById('NRJ_popup_submit'),
      popupForm: document.getElementById('NRJ_popup_form_content'),
      successMsg: document.getElementById('NRJ_success_msg')
    };

    let NRJ_isMobile = window.innerWidth <= 900;
    let NRJ_spacerExtra = 0;
    let NRJ_bgTriggered = false;
    let NRJ_activeName = '';

    function NRJ_checkMobile() {
      NRJ_isMobile = window.innerWidth <= 900;
    }

    function NRJ_setHeight() {
      NRJ_checkMobile();
      if (NRJ_isMobile || !NRJEl.spacer || !NRJEl.track) {
        if (NRJEl.spacer) NRJEl.spacer.style.height = '';
        if (NRJEl.track) NRJEl.track.style.transform = 'none';
        return;
      }
      const grid = NRJEl.track.querySelector('.NRJ_products_grid');
      if (grid) {
        const gridH = Math.max(grid.scrollHeight, grid.offsetHeight, 1400);
        const extra = Math.max(0, gridH + 80 - window.innerHeight);
        NRJ_spacerExtra = extra;
        NRJEl.spacer.style.height = (window.innerHeight + extra) + 'px';
      }
    }

    function NRJ_onScroll() {
      if (NRJ_isMobile || !NRJEl.spacer || !NRJEl.track) return;
      const rect = NRJEl.spacer.getBoundingClientRect();
      const scrolled = -rect.top;

      if (NRJEl.bgSlide) {
        if (!NRJ_bgTriggered && rect.top < window.innerHeight * 0.85) {
          NRJEl.bgSlide.classList.add('NRJ_bg_active');
          NRJ_bgTriggered = true;
        }
        if (NRJ_bgTriggered && rect.top > window.innerHeight) {
          NRJEl.bgSlide.classList.remove('NRJ_bg_active');
          NRJ_bgTriggered = false;
        }
      }

      if (scrolled <= 0) {
        NRJEl.track.style.transform = 'translateY(0)';
      } else if (scrolled <= NRJ_spacerExtra) {
        NRJEl.track.style.transform = 'translateY(-' + scrolled + 'px)';
      } else {
        NRJEl.track.style.transform = 'translateY(-' + NRJ_spacerExtra + 'px)';
      }
    }

    document.querySelectorAll('.NRJ_btn_read_more').forEach(btn => {
      btn.addEventListener('click', function () {
        const card = this.closest('.NRJ_product_card');
        if (!card) return;
        const cardImg = card.querySelector('.NRJ_card_img_wrap img');
        const cardHeading = card.querySelector('.NRJ_card_body h3');
        const cardDesc = card.querySelector('.NRJ_card_body p');

        if (cardImg && NRJEl.panelImg) {
          NRJEl.panelImg.src = cardImg.src;
          NRJEl.panelImg.alt = cardHeading ? cardHeading.textContent : '';
        }
        if (card.getAttribute('data-tag') && NRJEl.panelTag) {
          NRJEl.panelTag.textContent = card.getAttribute('data-tag');
        }
        if (cardHeading && NRJEl.panelHead) {
          NRJEl.panelHead.textContent = cardHeading.textContent;
          NRJ_activeName = cardHeading.textContent;
          if (NRJEl.popupProd) NRJEl.popupProd.value = NRJ_activeName;
        }
        if (cardDesc && NRJEl.panelDesc) {
          NRJEl.panelDesc.textContent = cardDesc.textContent;
        }

        if (NRJEl.panel) NRJEl.panel.classList.add('NRJ_panel_open');
        if (NRJEl.overlay) NRJEl.overlay.classList.add('NRJ_overlay_active');
        document.body.style.overflow = 'hidden';
        if (NRJEl.panelScroll) NRJEl.panelScroll.scrollTop = 0;
      });
    });

    function NRJ_closePanel() {
      if (NRJEl.panel) NRJEl.panel.classList.remove('NRJ_panel_open');
      if (NRJEl.overlay) NRJEl.overlay.classList.remove('NRJ_overlay_active');
      document.body.style.overflow = '';
    }

    if (NRJEl.panelClose) NRJEl.panelClose.addEventListener('click', NRJ_closePanel);
    if (NRJEl.overlay) NRJEl.overlay.addEventListener('click', NRJ_closePanel);

    if (NRJEl.sendQuery) {
      NRJEl.sendQuery.addEventListener('click', function () {
        if (NRJEl.popupProd) NRJEl.popupProd.value = NRJ_activeName;
        if (NRJEl.popupForm) NRJEl.popupForm.style.display = '';
        if (NRJEl.successMsg) NRJEl.successMsg.classList.remove('NRJ_visible');
        if (NRJEl.popupWrap) NRJEl.popupWrap.classList.add('NRJ_popup_active');
      });
    }

    function NRJ_closePopup() {
      if (NRJEl.popupWrap) NRJEl.popupWrap.classList.remove('NRJ_popup_active');
    }
    if (NRJEl.popupClose) NRJEl.popupClose.addEventListener('click', NRJ_closePopup);
    if (NRJEl.popupWrap) {
      NRJEl.popupWrap.addEventListener('click', function (e) {
        if (e.target === NRJEl.popupWrap) NRJ_closePopup();
      });
    }

    if (NRJEl.popupSubmit) {
      NRJEl.popupSubmit.addEventListener('click', function () {
        const nameEl = document.getElementById('NRJ_f_name');
        const emailEl = document.getElementById('NRJ_f_email');
        const phoneEl = document.getElementById('NRJ_f_phone');
        if (!nameEl?.value.trim() || !emailEl?.value.trim() || !phoneEl?.value.trim()) {
          alert('Please fill Name, Email and Phone.');
          return;
        }
        if (NRJEl.popupForm) NRJEl.popupForm.style.display = 'none';
        if (NRJEl.successMsg) NRJEl.successMsg.classList.add('NRJ_visible');
        setTimeout(NRJ_closePopup, 2000);
      });
    }

    if ('ResizeObserver' in window && NRJEl.track) {
      const gridEl = NRJEl.track.querySelector('.NRJ_products_grid');
      if (gridEl) {
        new ResizeObserver(() => {
          NRJ_setHeight();
          NRJ_onScroll();
        }).observe(gridEl);
      }
    }

    if (NRJEl.track) {
      NRJEl.track.querySelectorAll('img').forEach(img => {
        if (img.complete) {
          NRJ_setHeight();
        } else {
          img.addEventListener('load', () => {
            NRJ_setHeight();
            NRJ_onScroll();
          });
        }
      });
    }

    [100, 300, 600, 1000, 1800].forEach(t => {
      setTimeout(() => {
        NRJ_setHeight();
        NRJ_onScroll();
      }, t);
    });

    window.addEventListener('scroll', NRJ_onScroll, { passive: true });
    window.addEventListener('resize', () => {
      NRJ_setHeight();
      NRJ_onScroll();
    }, { passive: true });

  } catch (e) { console.error('Products init error:', e); }

  try {
    const circleBtn = document.getElementById('Fotter_nrj-circle-btn');
    if (circleBtn) {
      let isHovered = false;
      let targetX = 0, targetY = 0;
      let currentX = 0, currentY = 0;
      let rotX = 0, rotY = 0;

      circleBtn.addEventListener('mouseenter', () => { isHovered = true; });
      circleBtn.addEventListener('mousemove', (e) => {
        const rect = circleBtn.getBoundingClientRect();
        targetX = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
        targetY = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
      });
      circleBtn.addEventListener('mouseleave', () => {
        isHovered = false;
        targetX = 0;
        targetY = 0;
        rotX = 0;
        rotY = 0;
      });

      function animCircle() {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        if (isHovered) {
          rotY = (currentX / 20) * 15;
          rotX = -(currentY / 20) * 15;
        } else {
          rotX += (0 - rotX) * 0.12;
          rotY += (0 - rotY) * 0.12;
        }
        circleBtn.style.transform = 'translate3d(' + currentX + 'px,' + currentY + 'px,0) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
        requestAnimationFrame(animCircle);
      }
      requestAnimationFrame(animCircle);
    }

    const backToTopBtn = document.getElementById('Fotter_nrj-back-to-top');
    if (backToTopBtn) {
      function checkScroll() {
        if (window.scrollY > 200) {
          backToTopBtn.classList.add('Fotter_nrj-back-to-top-visible');
        } else {
          backToTopBtn.classList.remove('Fotter_nrj-back-to-top-visible');
        }
      }
      window.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  } catch (e) { console.error('Footer init error:', e); }

  try {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 60,
        easing: 'ease-out-cubic'
      });
    }
  } catch (e) {}

  try {
    const video = document.querySelector('.baner_soderhaNrj-video');
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.play().catch(() => {});
    }
  } catch (e) {}
}
