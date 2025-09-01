// Global state
let extensions = [];
let currentFilter = 'all';
let currentTheme = 'light';

// DOM elements
const themeToggle = document.getElementById('themeToggle');
const extensionsList = document.getElementById('extensionsList');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
  await loadExtensions();
  initializeTheme();
  initializeEventListeners();
  renderExtensions();
});

// Load extensions data from JSON file
async function loadExtensions() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    extensions = await response.json();
  } catch (error) {
    console.error('Error loading extensions:', error);
    showEmptyState('Error loading extensions. Please try again later.');
  }
}

// Initialize theme
function initializeTheme() {
  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    currentTheme = savedTheme;
  } else {
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = prefersDark ? 'dark' : 'light';
  }
  
  applyTheme(currentTheme);
}

// Apply theme to document
function applyTheme(theme) {
  currentTheme = theme;
  document.body.className = `${theme}-theme`;
  localStorage.setItem('theme', theme);
}

// Initialize event listeners
function initializeEventListeners() {
  // Theme toggle
  themeToggle.addEventListener('click', handleThemeToggle);
  
  // Filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => handleFilterChange(e.target.dataset.filter));
  });
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

// Handle theme toggle
function handleThemeToggle() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// Handle filter change
function handleFilterChange(filter) {
  currentFilter = filter;
  
  // Update active filter button
  filterButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.filter === filter);
  });
  
  // Filter and render extensions
  renderExtensions();
}

// Render extensions based on current filter
function renderExtensions() {
  if (extensions.length === 0) {
    showEmptyState('No extensions found.');
    return;
  }
  
  // Filter extensions based on current filter
  let filteredExtensions = extensions;
  
  if (currentFilter === 'active') {
    filteredExtensions = extensions.filter(ext => ext.isActive);
  } else if (currentFilter === 'inactive') {
    filteredExtensions = extensions.filter(ext => !ext.isActive);
  }
  
  // Check if filtered list is empty
  if (filteredExtensions.length === 0) {
    const filterText = currentFilter === 'active' ? 'active' : 'inactive';
    showEmptyState(`No ${filterText} extensions found.`);
    return;
  }
  
  // Render extensions
  extensionsList.innerHTML = filteredExtensions
    .map(extension => createExtensionCard(extension))
    .join('');
    
  // Add event listeners to newly created elements
  addExtensionEventListeners();
}

// Create HTML for extension card
function createExtensionCard(extension) {
  const cardClass = extension.isActive ? 'extension-card' : 'extension-card inactive';
  
  return `
    <div class="${cardClass}" data-id="${extension.name}">
      <div class="extension-header">
        <div class="extension-info">
          <img src="${extension.logo}" alt="${extension.name} logo" class="extension-logo">
          <div class="extension-details">
            <h3 class="extension-name">${extension.name}</h3>
            <p class="extension-description">${extension.description}</p>
          </div>
        </div>
        <label class="toggle-switch" aria-label="Toggle ${extension.name}">
          <input type="checkbox" class="toggle-input" ${extension.isActive ? 'checked' : ''} data-name="${extension.name}">
          <span class="toggle-slider"></span>
        </label>
      </div>
      <div class="extension-actions">
        <button class="remove-btn" data-name="${extension.name}" aria-label="Remove ${extension.name}">
          Remove
        </button>
      </div>
    </div>
  `;
}

// Add event listeners to extension elements
function addExtensionEventListeners() {
  // Toggle switches
  const toggles = document.querySelectorAll('.toggle-input');
  toggles.forEach(toggle => {
    toggle.addEventListener('change', handleToggleExtension);
  });
  
  // Remove buttons
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', handleRemoveExtension);
  });
}

// Handle extension toggle
function handleToggleExtension(e) {
  const extensionName = e.target.dataset.name;
  const isActive = e.target.checked;
  
  // Update extension state in data
  const extension = extensions.find(ext => ext.name === extensionName);
  if (extension) {
    extension.isActive = isActive;
    
    // Update card appearance
    const card = document.querySelector(`[data-id="${extensionName}"]`);
    if (card) {
      card.classList.toggle('inactive', !isActive);
    }
    
    // If current filter would hide this extension, re-render
    if ((currentFilter === 'active' && !isActive) || 
        (currentFilter === 'inactive' && isActive)) {
      renderExtensions();
    }
  }
}

// Handle extension removal
function handleRemoveExtension(e) {
  const extensionName = e.target.dataset.name;
  const card = document.querySelector(`[data-id="${extensionName}"]`);
  
  if (!card) return;
  
  // Add removing animation
  card.classList.add('removing');
  
  // Remove after animation completes
  setTimeout(() => {
    // Remove from data array
    extensions = extensions.filter(ext => ext.name !== extensionName);
    
    // Re-render extensions
    renderExtensions();
    
    // Announce removal for screen readers
    announceToScreenReader(`${extensionName} extension removed`);
  }, 300);
}

// Show empty state
function showEmptyState(message) {
  extensionsList.innerHTML = `
    <div class="empty-state">
      <h3 class="empty-state-title">No Extensions Found</h3>
      <p class="empty-state-message">${message}</p>
    </div>
  `;
}

// Announce to screen readers
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.style.width = '1px';
  announcement.style.height = '1px';
  announcement.style.overflow = 'hidden';
  
  document.body.appendChild(announcement);
  announcement.textContent = message;
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  // Handle escape key to clear focus
  if (e.key === 'Escape') {
    document.activeElement.blur();
  }
  
  // Handle enter key on filter buttons
  if (e.key === 'Enter' && e.target.classList.contains('filter-btn')) {
    e.target.click();
  }
});

// Error handling for fetch failures
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    loadExtensions,
    handleThemeToggle,
    handleFilterChange,
    handleToggleExtension,
    handleRemoveExtension,
    applyTheme
  };
}
