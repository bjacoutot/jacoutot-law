/**
 * theme.js — Jacoutot Law WordPress Theme
 *
 * Handles:
 *  - Sticky nav shadow on scroll
 *  - Mobile hamburger menu toggle
 *  - Topic chip filter (Beyond Law page)
 *  - Fade-up scroll animations
 */

document.addEventListener('DOMContentLoaded', function () {

  // ── Nav scroll shadow ──────────────────────────────────────────────────────
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    });
  }

  // ── Mobile nav toggle ──────────────────────────────────────────────────────
  window.toggleNav = function () {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
      navLinks.classList.toggle('open');
    }
  };

  // Close mobile nav when a link is clicked
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ── Topic chips (Beyond Law page) ──────────────────────────────────────────
  document.querySelectorAll('.topic-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.topic-chip').forEach(function (c) {
        c.classList.remove('active');
      });
      chip.classList.add('active');

      // Filter post items by data-topic attribute if present
      const topic = chip.dataset.topic;
      if (topic && topic !== 'all') {
        document.querySelectorAll('.post-item').forEach(function (item) {
          const itemTopic = item.dataset.topic || '';
          item.style.display = itemTopic === topic ? '' : 'none';
        });
      } else {
        document.querySelectorAll('.post-item').forEach(function (item) {
          item.style.display = '';
        });
      }
    });
  });

  // ── Fade-up scroll animations ──────────────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

});
