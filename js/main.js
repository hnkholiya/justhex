/**
 * JustHex - Main Application Logic
 * Dark mode, search, and utility functions
 */

// ==========================================
// DARK MODE MANAGEMENT
// ==========================================

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
}

function setTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeToggle();
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

function updateThemeToggle() {
  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    const theme = document.documentElement.getAttribute('data-theme');
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Theme toggle button
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================

function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
      const name = card.querySelector('.tool-name')?.textContent.toLowerCase() || '';
      const description = card.querySelector('.tool-description')?.textContent.toLowerCase() || '';
      const category = card.querySelector('.tool-category')?.textContent.toLowerCase() || '';
      
      const matches = name.includes(query) || 
                     description.includes(query) || 
                     category.includes(query);
      
      card.style.display = matches ? 'block' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeSearch);

// ==========================================
// COPY TO CLIPBOARD
// ==========================================

function copyToClipboard(text, source = null) {
  if (!text) {
    showFeedback('Nothing to copy', 'error');
    return;
  }
  
  navigator.clipboard.writeText(text).then(() => {
    showFeedback('Copied to clipboard!', 'success');
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showFeedback('Copied to clipboard!', 'success');
  });
}

// ==========================================
// FEEDBACK NOTIFICATIONS
// ==========================================

function showFeedback(message, type = 'success') {
  // Remove existing feedback
  const existing = document.querySelector('.copy-feedback');
  if (existing) existing.remove();
  
  const feedback = document.createElement('div');
  feedback.className = 'copy-feedback';
  feedback.textContent = message;
  feedback.style.backgroundColor = type === 'error' ? 'var(--color-error)' : 'var(--color-success)';
  
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.remove();
  }, 3000);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Debounce helper for search and other frequent events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Lazy load images if needed
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}