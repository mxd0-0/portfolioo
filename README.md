# 🚀 Mohammed Amine's Portfolio

A modern, interactive 3D portfolio website showcasing my journey as a Computer Science student specializing in Android development, built with React and Three.js.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-brightgreen)](https://mohammedamine.social)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)](https://github.com/mxd0-0/portfolioo)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🌟 Features

- **3D Interactive Hero Section**: Immersive 3D animations with Three.js
- **Dynamic Typewriter Effect**: Showcasing my diverse skill set
- **Project Showcase**: Interactive display of 8+ projects with detailed descriptions
- **Experience Timeline**: Visual representation of my professional journey
- **Contact Form**: Integrated with EmailJS for direct communication
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for fluid user experience
- **Modern UI/UX**: Clean, professional design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features

### 3D Graphics & Animation
- **Three.js** - Cross-browser JavaScript library for 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Production-ready motion library for React

### Additional Libraries
- **EmailJS** - Send emails directly from client-side applications
- **React Router DOM** - Declarative routing for React applications
- **React Icons** - Popular icons as React components
- **React Tilt** - Parallax tilt hover effects
- **React Vertical Timeline** - Vertical timeline component
- **Typewriter Effect** - Typewriter animation effect
- **Maath** - Math utilities for creative coding

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS post-processing
- **Autoprefixer** - CSS vendor prefixing
- **gh-pages** - GitHub Pages deployment

## 🎯 About Me

I'm Mohammed Amine, a passionate Computer Science student dedicated to crafting innovative mobile solutions. I combine academic rigor with hands-on development experience to create user-centric Android applications.

### 🎓 Background
- **Computer Science Student** with focus on mobile development
- **Android Development Specialist** - Kotlin, Jetpack Compose, Clean Architecture
- **STEAM Mentor** - Fostering tech education and inclusive teamwork
- **Multilingual** - Fluent in English, French, and Arabic

### 💼 Experience
- **Network Engineering Intern** at Algérie Télécom (June 2025 - Present)
- **Mobile App Development Intern** at Nano Consulting (Jan 2021 - Dec 2022)

### 🔧 Core Skills
- **Mobile Development**: Android, Kotlin, Jetpack Compose, Java
- **Backend Development**: Ktor, REST APIs, Firebase
- **Web Development**: React, JavaScript, HTML/CSS
- **Database**: Firebase, MongoDB
- **Architecture**: Clean Architecture, MVI, MVVM
- **Tools**: Git, Android Studio, IntelliJ IDEA, Figma

## 🚀 Projects Showcase

### Mobile Applications
1. **CoinSync** - Cryptocurrency tracking app with MVI architecture
2. **MYBMI** - BMI Calculator with Jetpack Compose
3. **Exact Science Faculty TV** - Smart TV display app for University of Bechar
4. **Planity** - Feature-rich to-do & task manager with Firebase
5. **LawConnect** - Client-lawyer consultation platform

### Web Applications
6. **Signio** - Digital signature platform
7. **MACloud** - Web hosting service website

### Backend Services
8. **FoodFlow** - REST API backend for restaurant menus

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/mxd0-0/portfolioo.git
cd portfolioo
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
# or
yarn build
```

## 🚀 Deployment

### GitHub Pages
The project is configured for GitHub Pages deployment:

```bash
npm run deploy
# or
yarn deploy
```

This will build the project and deploy it to the `gh-pages` branch.

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure your server to serve the `index.html` file for all routes

## 📧 Contact Integration

The contact form is integrated with EmailJS for direct email functionality. To set up email services:

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Configure your email service
3. Add your EmailJS configuration to the Contact component

## 🎨 Customization

### Adding New Projects
1. Add project images to `src/assets/`
2. Update the `projects` array in `src/constants/index.js`
3. Import new assets in the same file

### Modifying Animations
- 3D animations are located in `src/components/canvas/`
- Page transitions are in `src/utils/motion.js`
- Component animations use Framer Motion variants

### Styling
- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Utility classes: Tailwind CSS in `tailwind.config.js`

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint

# Deployment
npm run predeploy    # Build before deployment
npm run deploy       # Deploy to GitHub Pages
```

## 🌐 Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Three.js Community** for amazing 3D graphics capabilities
- **React Team** for the excellent React framework
- **Tailwind CSS** for the utility-first styling approach
- **Framer Motion** for smooth animations
- **EmailJS** for seamless email integration

## 📞 Connect With Me

- **Portfolio**: [mohammedamine.social](https://mohammedamine.social)
- **GitHub**: [@mxd0-0](https://github.com/mxd0-0)
- **Email**: Available through the contact form on the website

---

⭐ **If you like this project, please give it a star!** ⭐

Built with ❤️ by Mohammed Amine