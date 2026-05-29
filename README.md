# 🛡️ Cyber Security Portfolio Template

A stunning, high-performance portfolio template designed specifically for cybersecurity professionals, red teamers, and security researchers. This portfolio features a modern "hacker" aesthetic with glitch effects, dynamic backgrounds, and specialized sections for showcasing your security expertise.

## ✨ Key Features

- **⚡ Blazing Fast**: Built with React + Vite for optimal performance and rapid development.
- **🎨 Hacker Aesthetic**: Premium dark theme with vibrant neon accents and glassmorphism.
- **👾 Glitch Effects**: Interactive glitch headers and animations that give a "terminal" feel.
- **🚩 Dedicated CTF Page**: Showcase your competition rankings, team achievements, and solve counts.
- **📜 Certifications**: Display your professional achievements and learning paths with dedicated cards.
- **🛠️ Specialized Sections**:
  - **About Me**: Professional introduction and background.
  - **Skills**: Interactive skill display (TryHackMe stats, etc.).
  - **Experience**: Clean timeline of your career path.
  - **Projects**: Showcase your security tools and research.
  - **Contact**: Integrated contact form and social media links.
- **📱 Responsive Design**: Fully optimized for desktop, tablet, and mobile viewing.

---

## 🛠️ Getting Started

Follow these steps to set up your own version of this portfolio.

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
npm install
```

### 3. Development
Run the development server locally:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to see the results.

### 4. Build
To build for production:
```bash
npm run build
```

---

## 🎨 Customization Guide

This project is built to be easily customizable. Here's where you can make changes:

### Updating Personal Info
- **Main Content**: Modify `src/components/` and `src/pages/` to update text, descriptions, and achievements.
- **Navigation**: Update labels and paths in `src/components/Navigation.jsx`.

### Assets & Images
- Replace images in `public/assets/` and `src/assets/` with your own (profile picture, certificates, CTF screenshots).
- **Profile Image**: Update `public/assets/profile.png`.
- **Certificates**: Update `public/assets/` and the links in `src/pages/CertificatesPage.jsx`.
- **CTFs**: Update `public/assets/ctfs/` and descriptions in `src/pages/CtfsPage.jsx`.

### Colors & Styling
- Edit `src/index.css` and `src/App.css` to customize the primary colors (default is neon green `#00FF8C`).
- Component-specific styles are located in their respective `.css` files within `src/components/` and `src/pages/`.

---

## 🚀 Deployment

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/):

1. Connect your GitHub repository.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Deploy!

---

## 📄 License
This project is open-source and available under the MIT License. Feel free to use it as a template for your own amazing portfolio!

Made with ❤️ by [Husnain](https://github.com/thehusnain)
