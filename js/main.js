/**
 * JustHex - Main Application Logic
 * Dark mode, search, FAQ, and utility functions
 */

// ==========================================
// DARK MODE MANAGEMENT (Tailwind Compatible)
// ==========================================

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const html = document.documentElement;
  
  // If no saved theme, check system preference
  if (!savedTheme) {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  } else {
    // Apply saved theme
    if (savedTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
  
  updateThemeToggle();
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  
  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  
  updateThemeToggle();
}

function updateThemeToggle() {
  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    const isDark = document.documentElement.classList.contains('dark');
    btn.innerHTML = isDark ? '☀️' : '🌙';
  }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    initializeTheme();
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
    let visibleCount = 0;
    
    toolCards.forEach(card => {
      const name = card.querySelector('.tool-name')?.textContent.toLowerCase() || '';
      const description = card.querySelector('.tool-description')?.textContent.toLowerCase() || '';
      const category = card.querySelector('.tool-category')?.textContent.toLowerCase() || '';
      
      const matches = name.includes(query) || 
                     description.includes(query) || 
                     category.includes(query);
      
      if (matches) {
        card.style.display = 'block';
        card.style.animation = 'fadeInDown 0.3s ease-out';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    // Show no results message if needed
    if (visibleCount === 0 && query.length > 0) {
      showFeedback('No tools found matching "' + query + '"', 'info');
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeSearch);

// ==========================================
// FAQ ACCORDION FUNCTIONALITY
// ==========================================

function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (!question || !answer) return;
    
    question.addEventListener('click', () => {
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
      
      // Close all other FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherToggle = otherItem.querySelector('.faq-toggle');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = '0px';
            otherAnswer.style.opacity = '0';
            otherToggle.style.transform = 'rotate(0deg)';
          }
        }
      });
      
      // Toggle current FAQ
      const toggle = item.querySelector('.faq-toggle');
      if (isOpen) {
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        toggle.style.transform = 'rotate(0deg)';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
        toggle.style.transform = 'rotate(180deg)';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeFAQ);
      
// ==========================================
// COPY TO CLIPBOARD
// ==========================================

function copyToClipboard(text, source = null) {
  if (!text) {
    showFeedback('Nothing to copy', 'error');
    return;
  }
  
  navigator.clipboard.writeText(text).then(() => {
    showFeedback('✓ Copied to clipboard!', 'success');
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showFeedback('✓ Copied to clipboard!', 'success');
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
  
  const colorMap = {
    'error': '#dc2626',
    'warning': '#f97316',
    'info': '#0284c7',
    'success': '#16a34a'
  };
  
  feedback.style.backgroundColor = colorMap[type] || colorMap['success'];
  
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.style.opacity = '0';
    feedback.style.transition = 'opacity 0.3s ease-out';
    setTimeout(() => feedback.remove(), 300);
  }, 2500);
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

// Copy output textarea helper
function copyOutput() {
  const outputTextarea = document.getElementById('outputText');
  if (!outputTextarea) {
    showFeedback('Output not found', 'error');
    return;
  }
  
  const text = outputTextarea.value.trim();
  if (!text) {
    showFeedback('Nothing to copy', 'error');
    return;
  }
  
  copyToClipboard(text);
}

// Clear all fields helper
function clearAll() {
  const inputTextarea = document.getElementById('inputText');
  const outputTextarea = document.getElementById('outputText');
  
  if (inputTextarea) inputTextarea.value = '';
  if (outputTextarea) outputTextarea.value = '';
  
  showFeedback('Cleared all fields', 'info');
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
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ==========================================
// PAGE LOAD ANIMATIONS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to page
  document.body.style.animation = 'fadeInUp 0.5s ease-out';
});

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener('keydown', (e) => {
  // Ctrl+Shift+C to copy output
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
    e.preventDefault();
    copyOutput();
  }
  
  // Ctrl+Shift+X to clear all
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'X') {
    e.preventDefault();
    clearAll();
  }
});