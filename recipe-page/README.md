# Frontend Mentor - Recipe Page Solution

This is my solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![Design preview for the Recipe page coding challenge](./preview.jpg)

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

- ✅ View an optimal layout for the recipe page depending on their device's screen size
- ✅ See a beautifully formatted recipe with proper typography and spacing
- ✅ Experience a responsive design that works seamlessly on mobile and desktop
- ✅ Navigate through different sections with clear visual hierarchy
- ✅ Read nutritional information in a well-structured table format
- ✅ View the recipe in both mobile and desktop layouts

### Screenshot

![Recipe Page](./preview.jpg)

## 🛠️ My process

### Built with

- **Semantic HTML5** markup with proper document structure
- **CSS Custom Properties** for consistent design system
- **CSS Grid** and **Flexbox** for responsive layout
- **Mobile-first** responsive design approach
- **Google Fonts** integration (Young Serif & Outfit)
- **CSS Reset** for cross-browser consistency
- **Modern CSS** techniques with custom properties
- **Responsive Images** for optimal loading
- **Accessibility** features with proper semantic markup

### What I learned

This project was an excellent opportunity to practice several fundamental and advanced web development concepts:

#### 🎨 **Typography and Font Pairing**
```css
/* Effective font pairing using CSS custom properties */
:root {
  --font-serif: 'Young Serif', serif;
  --font-sans: 'Outfit', sans-serif;
}

.recipe-title {
  font-family: var(--font-serif);
  font-size: 40px;
  font-weight: 400;
  color: var(--stone-900);
}
```

#### 🎨 **Color System with CSS Variables**
```css
:root {
  --white: hsl(0, 0%, 100%);
  --stone-100: hsl(30, 54%, 90%);
  --stone-600: hsl(30, 10%, 34%);
  --stone-900: hsl(24, 5%, 18%);
  --brown-800: hsl(14, 45%, 36%);
  --rose-800: hsl(332, 51%, 32%);
  --rose-50: hsl(330, 100%, 98%);
}
```

#### 📱 **Responsive Card Design**
```css
.container {
  max-width: 736px;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 24px;
  overflow: hidden;
  margin-top: 124px;
}

@media (max-width: 768px) {
  .container {
    margin: 0;
    border-radius: 0;
    max-width: 100%;
  }
}
```

#### 📋 **Custom List Styling**
```css
/* Custom bullet points for ingredients */
.ingredients-list li::before {
  content: '•';
  position: absolute;
  left: 8px;
  color: var(--brown-800);
  font-weight: bold;
}

/* Numbered instructions with custom counter */
.instructions-list {
  counter-reset: instruction-counter;
}

.instructions-list li::before {
  content: counter(instruction-counter) ". ";
  counter-increment: instruction-counter;
  color: var(--brown-800);
  font-weight: 700;
}
```

### 🌟 Key Features

#### **1. Responsive Design System**
- Mobile-first approach with breakpoints at 768px and 375px
- Flexible container that adapts from card layout to full-width
- Scalable typography that maintains readability across devices
- Touch-friendly spacing and interactive elements

#### **2. Typography Hierarchy**
- Strategic font pairing with Young Serif for headings and Outfit for body text
- Consistent line heights and spacing for optimal readability
- Proper contrast ratios meeting WCAG accessibility standards
- Responsive font sizes that scale appropriately

#### **3. Visual Design Elements**
- Highlighted preparation time section with rose background
- Custom bullet points and numbered lists
- Clean dividers separating content sections
- Professional nutrition table with proper spacing

#### **4. Semantic HTML Structure**
- Proper heading hierarchy (h1, h2, h3)
- Semantic lists for ingredients and instructions
- Table element for nutritional data
- Alt text for images and proper document structure

### 💡 Code Highlights

#### **Flexible Container System**
```css
.container {
  max-width: 736px;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 24px;
  overflow: hidden;
}
```

#### **Highlighted Content Section**
```css
.preparation-time {
  background-color: var(--rose-50);
  padding: 28px;
  border-radius: 12px;
  margin-bottom: 32px;
}
```

#### **Accessible Nutrition Table**
```css
.nutrition-table {
  width: 100%;
  border-collapse: collapse;
}

.nutrition-table tr {
  border-bottom: 1px solid var(--stone-150);
}

.nutrition-table td:last-child {
  font-weight: 700;
  color: var(--brown-800);
}
```

### 🚀 Continued development

Areas I want to continue focusing on in future projects:

- **Advanced CSS layouts** with CSS Grid and Flexbox combinations
- **Design systems** and component-based CSS architecture
- **Performance optimization** for fonts and images
- **Advanced typography** techniques and fluid type scaling
- **CSS animations** and micro-interactions
- **Progressive enhancement** techniques

### 📚 Useful resources

- [Google Fonts](https://fonts.google.com/) - For Young Serif and Outfit font families
- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - MDN guide on CSS variables
- [Responsive Design Patterns](https://web.dev/patterns/layout/) - Modern layout patterns
- [Typography Best Practices](https://web.dev/learn/design/typography/) - Web typography guidelines
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) - Ensuring accessibility compliance
- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Comprehensive CSS Grid reference

## 👨‍💻 Author

- **GitHub** - [bnahmedsoumaya00](https://github.com/bnahmedsoumaya00)

---

## 🎉 Project Highlights

This project demonstrates:
- 🎨 **Modern CSS** techniques with custom properties and semantic styling
- 📱 **Responsive design** that works perfectly across all device sizes
- 📝 **Typography excellence** with proper font pairing and hierarchy
- ♿ **Accessibility-first** approach with semantic HTML and proper contrast
- 🎯 **Clean, maintainable code** with organized CSS structure
- 📋 **Professional layout** matching the provided design specifications

**Thank you for checking out my recipe page solution! 🍳**
