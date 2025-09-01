# Frontend Mentor - Browser Extensions Manager UI Solution

This is my solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![Design preview for the Browser extensions manager UI coding challenge](./preview.jpg)

## 📋 Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Key Features](#key-features)
  - [Code Highlights](#code-highlights)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## 🎯 Overview

### The challenge

Users should be able to:

- ✅ Toggle extensions between active and inactive states
- ✅ Filter extensions by status (All, Active, Inactive)
- ✅ Remove extensions from the list with smooth animations
- ✅ Switch between light and dark themes
- ✅ View optimal layout for different device screen sizes
- ✅ Experience smooth hover and focus states for all interactive elements
- ✅ Enjoy accessible keyboard navigation

### Screenshot

![Browser Extensions Manager UI](./preview.jpg)


## 🛠️ My process

### Built with

- **Semantic HTML5** markup with proper ARIA labels
- **CSS Custom Properties** for dynamic theming
- **CSS Grid** for responsive layout
- **Flexbox** for component alignment
- **Vanilla JavaScript** for dynamic functionality
- **Mobile-first** responsive design approach
- **CSS Animations** and smooth transitions
- **Local Storage** for theme persistence
- **JSON Data** handling for dynamic content
- **Accessibility** features (keyboard navigation, screen readers)

### What I learned

This project was an excellent opportunity to practice several advanced web development concepts:

#### 🎨 **Advanced CSS Techniques**
```css
/* Dynamic theming with CSS custom properties */
.light-theme {
  --color-bg: hsl(200, 60%, 99%);
  --color-bg-gradient: linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%);
  --color-card-bg: hsl(0, 0%, 100%);
}

.dark-theme {
  --color-bg: hsl(227, 75%, 14%);
  --color-bg-gradient: linear-gradient(180deg, #040918 0%, #091540 100%);
  --color-card-bg: hsl(226, 25%, 17%);
}
```

#### ⚡ **Smooth Toggle Switch Animation**
```css
.toggle-slider:before {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(-50%);
}

.toggle-input:checked + .toggle-slider:before {
  transform: translateY(-50%) translateX(24px);
}
```

#### 🔄 **Dynamic State Management**
```javascript
// Efficient filtering with smooth UI updates
function handleToggleExtension(e) {
  const extensionName = e.target.dataset.name;
  const isActive = e.target.checked;
  
  const extension = extensions.find(ext => ext.name === extensionName);
  if (extension) {
    extension.isActive = isActive;
    
    // Update card appearance
    const card = document.querySelector(`[data-id="${extensionName}"]`);
    card.classList.toggle('inactive', !isActive);
  }
}
```

### 🌟 Key Features

#### **1. Theme System**
- Automatic system preference detection
- Smooth theme transitions
- Local storage persistence
- Proper contrast ratios for accessibility

#### **2. Advanced Filtering**
- Real-time filtering without page refresh
- Smooth state transitions
- Visual feedback for active filters
- Proper empty state handling

#### **3. Interactive Components**
- Custom toggle switches with smooth animations
- Hover effects with transform and shadow changes
- Focus states for keyboard accessibility
- Loading states with skeleton animations

#### **4. Responsive Design**
- Mobile-first approach
- Flexible grid system
- Touch-friendly interactive elements
- Horizontal scrolling for filters on mobile

#### **5. Accessibility Features**
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast mode support
- Reduced motion preferences respected

### 💡 Code Highlights

#### **Smart Grid System**
```css
.extensions-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
```

#### **Smooth Card Removal**
```javascript
function handleRemoveExtension(e) {
  const card = document.querySelector(`[data-id="${extensionName}"]`);
  card.classList.add('removing');
  
  setTimeout(() => {
    extensions = extensions.filter(ext => ext.name !== extensionName);
    renderExtensions();
  }, 300);
}
```

#### **Theme Persistence**
```javascript
function applyTheme(theme) {
  document.body.className = `${theme}-theme`;
  localStorage.setItem('theme', theme);
}
```

### 🚀 Continued development

Areas I want to continue focusing on in future projects:

- **Advanced CSS animations** and micro-interactions
- **Progressive Web App** features
- **Performance optimization** techniques
- **Advanced accessibility** patterns
- **Component-based architecture** with modern frameworks
- **Unit testing** for JavaScript functionality

### 📚 Useful resources

- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Excellent resource for CSS Grid layouts
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Comprehensive accessibility reference
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - MDN guide on CSS variables
- [Cubic Bezier Animations](https://cubic-bezier.com/) - Tool for creating smooth animations
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) - Ensuring proper accessibility

## 👨‍💻 Author

- **GitHub** - [bnahmedsoumaya00](https://github.com/bnahmedsoumaya00)

---

## 🎉 Project Highlights

This project demonstrates:
- ✨ **Modern CSS** techniques with custom properties and advanced layouts
- 🎯 **Interactive JavaScript** with smooth state management
- 📱 **Responsive design** that works across all devices
- ♿ **Accessibility-first** approach with proper ARIA implementation
- 🎨 **Thoughtful UX** with smooth animations and visual feedback
- 🔧 **Clean, maintainable code** with clear separation of concerns

**Thank you for checking out my solution! 🚀**
