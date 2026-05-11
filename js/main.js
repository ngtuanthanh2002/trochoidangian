// =========================================================
// Trò Chơi Dân Gian — Tương tác chính
// =========================================================
(function () {
    'use strict';

    // ----- Reveal on scroll -----
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible');
                    io.unobserve(e.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // ----- Header: trong suốt khi ở đầu trang, có nền khi cuộn -----
    const header = document.querySelector('.site-header');
    const detailPage = document.body.classList.contains('page-game-detail');

    const updateHeader = () => {
        if (!header) return;
        if (detailPage) {
            header.classList.add('is-scrolled');
            return;
        }
        header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    // ----- Mobile menu toggle -----
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('#primary-nav .nav-menu');

    const closeNav = () => {
        if (!header) return;
        header.classList.remove('nav-open');
        if (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Mở menu');
        }
        document.body.style.overflow = '';
    };

    if (toggle && menu && header) {
        toggle.addEventListener('click', () => {
            const open = header.classList.toggle('nav-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
            document.body.style.overflow = open ? 'hidden' : '';
        });

        menu.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', closeNav);
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 720) closeNav();
        });
    }
})();
