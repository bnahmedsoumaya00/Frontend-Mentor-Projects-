# 🚀 Frontend Mentor Projects Portfolio

A modern, dark-themed portfolio showcasing Frontend Mentor projects with smooth animations and responsive design.

## 🌟 Features

- **Dark Theme**: Sophisticated color palette with gradient accents
- **Responsive Design**: Mobile-first approach with sidebar navigation
- **Smooth Animations**: Fade-in, hover effects, and loading animations
- **Project Showcase**: Individual pages for each Frontend Mentor project
- **Live Preview**: Direct links to project demos and GitHub repositories

## 📁 Project Structure

```
Frontend-Mentor-Projects-/
├── index.html                          # Root redirect page
├── vercel.json                         # Vercel configuration
├── newbiePorjects/                     # Main portfolio
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── browser-extensions-manager-ui/       # Project 1
├── recipe-page/                        # Project 2
└── (future projects...)
```

## 🚀 Deployment with Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically on every push

## 🌐 Live URLs (after deployment)

- **Main Portfolio**: `https://your-domain.vercel.app/newbiePorjects/`
- **Root**: `https://your-domain.vercel.app/` (redirects to portfolio)
- **Alternative**: `https://your-domain.vercel.app/portfolio`
- **Browser Extensions**: `https://your-domain.vercel.app/browser-extensions-manager-ui/`
- **Recipe Page**: `https://your-domain.vercel.app/recipe-page/`

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Grid/Flexbox
- **JavaScript ES6+** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full sidebar)
- **Tablet**: 768px-1199px (Collapsible sidebar)
- **Mobile**: <768px (Hamburger menu)

## ✨ Key Features

### Navigation
- Smooth page transitions
- Mobile hamburger menu
- Keyboard navigation support
- Active state indicators

### Animations
- Fade-in on scroll
- Hover effects with lift
- Loading animations
- Ripple button effects
- Parallax hero section

### Performance
- Optimized images
- CSS animations over JavaScript
- Lazy loading effects
- Service Worker ready

## 🎨 Design System

### Colors
- Primary: `#0a0a0a` (Deep black)
- Secondary: `#1a1a1a` (Dark gray)
- Accent: `#4f46e5` (Indigo)
- Text: `#ffffff` (White)
- Muted: `#b3b3b3` (Light gray)

### Typography
- Primary: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700

## 🔧 Configuration

The `vercel.json` file includes:
- URL rewrites for clean paths
- Security headers
- Cache optimization
- Clean URLs without `.html` extensions

## 📈 Adding New Projects

1. Create new project folder in root
2. Add navigation item in `index.html`:
   ```html
   <li class="nav-item">
       <a href="#new-project" class="nav-link" data-section="new-project">
           <i class="fas fa-icon-name"></i>
           <span>New Project</span>
       </a>
   </li>
   ```
3. Add content section
4. Update JavaScript navigation
5. Deploy to Vercel

## 🌟 Live Demo

[View Portfolio](https://your-domain.vercel.app)

---

Built with ❤️ for Frontend Mentor challenges
