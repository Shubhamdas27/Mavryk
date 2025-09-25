# 🚀 Mavryk - Digital Marketing Agency

<div align="center">
  <img src="src/assets/media-logo-removebg-preview.png" alt="Mavryk Logo" width="200"/>
  
  <p align="center">
    <strong>A modern, high-converting digital marketing agency website</strong>
  </p>
  
  <p align="center">
    <a href="https://mavryk.vercel.app">🌐 Live Demo</a> •
    <a href="#features">✨ Features</a> •
    <a href="#getting-started">🚀 Quick Start</a> •
    <a href="#contact">📞 Contact</a>
  </p>

  [![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-blue.svg)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.7.4-purple.svg)](https://www.framer.com/motion/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.1-yellow.svg)](https://vitejs.dev/)
</div>

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Services](#services)
- [Pricing](#pricing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

**Mavryk** is a cutting-edge digital marketing agency website designed to attract and convert clients through modern web technologies. Built with React and enhanced with smooth animations, it showcases comprehensive digital marketing services including SEO optimization, content creation, influencer marketing, and more.

### 🌟 Key Highlights

- **Professional Design**: Modern, clean interface with dark theme and purple accents
- **High Performance**: Built with Vite for lightning-fast load times
- **Mobile-First**: Fully responsive design optimized for all devices
- **Conversion-Focused**: Strategic CTAs and optimized user journey
- **Client-Ready**: Production-ready codebase with professional features

## ✨ Features

### 🎨 Design & UX
- **Modern Dark Theme** with professional purple accent colors
- **Smooth Animations** powered by Framer Motion
- **Responsive Design** that looks great on all devices
- **Custom Typography** using Poppins and Roboto fonts
- **Interactive Components** with hover effects and transitions

### 🛠 Technical Features
- **Single Page Application (SPA)** with React Router
- **Component-Based Architecture** for maintainability
- **Lazy Loading** and performance optimizations
- **SEO-Friendly** structure with proper meta tags
- **EmailJS Integration** for contact forms
- **Custom Loading Screen** with branded loader

### 📄 Pages & Sections
- **Hero Carousel** with compelling messaging
- **Services Showcase** with detailed service cards
- **Pricing Tiers** with transparent pricing structure
- **Client Testimonials** with social proof
- **About Us** page with company story
- **Contact Form** with multiple contact options
- **Legal Pages** (Privacy Policy, Terms of Service)

### 🎯 Business Features
- **Lead Generation** focused design
- **Book a Call** CTAs integrated with Cal.com
- **Service Portfolio** showcasing 10+ marketing services
- **Pricing Transparency** with three-tier pricing model
- **Client Testimonials** for credibility building

## 🛠 Tech Stack

### Frontend
- **React 19.0.0** - Latest React with modern features
- **Vite 6.3.1** - Next-generation frontend tooling
- **React Router 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### Animations & UI
- **Framer Motion 12.7.4** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon set
- **Custom CSS Animations** for enhanced UX

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Deployment
- **Vercel** - Serverless deployment platform
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shubhamdas27/Mavryk.git
   cd Mavryk/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   # Create .env file and add your variables
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
frontend/
├── public/
│   └── vite.svg                    # Vite logo
├── src/
│   ├── assets/                     # Static assets
│   │   ├── Content Creation.jpg    # Service images
│   │   ├── EmailMarketing.jpg
│   │   ├── InfluencerMarketing.jpg
│   │   ├── MobileMarketing.jpg
│   │   ├── media-logo-removebg-preview.png
│   │   └── react.svg
│   ├── components/                 # Reusable components
│   │   ├── Footer.jsx              # Site footer
│   │   ├── HeroCarousel.jsx        # Hero section carousel
│   │   ├── Layout.jsx              # Main layout wrapper
│   │   ├── Loader.jsx              # Loading screen
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── PricingSection.jsx      # Pricing component
│   │   ├── ScrollToTop.jsx         # Scroll utility
│   │   └── ServiceCard.jsx         # Service display cards
│   ├── data/                       # Static data
│   │   ├── services.jsx            # Services information
│   │   └── testimonials.js         # Client testimonials
│   ├── lib/                        # Utility libraries
│   │   └── emailConfig.jsx         # Email configuration
│   ├── pages/                      # Application pages
│   │   ├── AboutPage.jsx           # About us page
│   │   ├── ContactPage.jsx         # Contact page
│   │   ├── HomePage.jsx            # Landing page
│   │   ├── PricingPage.jsx         # Pricing page
│   │   ├── PrivacyPolicy.jsx       # Privacy policy
│   │   ├── ServicesPage.jsx        # Services page
│   │   └── TermsOfService.jsx      # Terms of service
│   ├── App.jsx                     # Main app component
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Application entry point
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML template
├── package.json                    # Dependencies & scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS config
├── vercel.json                     # Vercel deployment config
├── vite.config.js                  # Vite configuration
└── README.md                       # Project documentation
```

## 🎯 Services

Mavryk offers comprehensive digital marketing services:

### 🔍 **SEO Optimization**
- Comprehensive SEO audits
- Keyword research and strategy
- On-page and off-page optimization
- Technical SEO improvements
- Local SEO for businesses

### ✍️ **Content Creation**
- Blog writing and copywriting
- Social media content
- Email newsletter content
- Website copy optimization
- Brand storytelling

### 👥 **Influencer Marketing**
- Influencer identification and outreach
- Campaign strategy and management
- Content collaboration coordination
- Performance tracking and analytics
- Relationship management

### 📱 **Mobile Marketing**
- Mobile app promotion
- SMS marketing campaigns
- Mobile-first content strategy
- App store optimization (ASO)
- Mobile advertising

### 📧 **Email Marketing**
- Email campaign design and development
- Automated email sequences
- List building and segmentation
- A/B testing and optimization
- Analytics and reporting

*And 5+ more specialized services...*

## 💰 Pricing

### 🌟 Starter Plan - ₹10,000/month
Perfect for small businesses
- Basic SEO audit and optimization
- 2 blog posts per month
- Social media content (10 posts)
- Basic keyword research
- Monthly performance report
- Email support

### 🚀 Growth Plan - ₹25,000/month
Ideal for growing companies
- Advanced SEO optimization
- 4 blog posts per month
- Social media management (20 posts)
- Paid advertising management
- Bi-weekly strategy calls
- Priority support

### 👑 Enterprise Plan - ₹50,000/month
For established businesses
- Complete marketing suite
- Custom content strategy
- Advanced analytics and reporting
- Dedicated account manager
- Weekly strategy sessions
- 24/7 premium support

*Custom packages available based on specific requirements*

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure build settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if any)
   Add any required environment variables in Vercel dashboard

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to any static hosting service:
   - Netlify
   - GitHub Pages
   - AWS S3
   - Digital Ocean Apps

## 🎨 Customization

### Branding
- **Logo**: Replace files in `src/assets/`
- **Colors**: Update `tailwind.config.js`
- **Typography**: Modify Google Fonts imports in `index.html`

### Content
- **Services**: Edit `src/data/services.jsx`
- **Testimonials**: Update `src/data/testimonials.js`
- **Pricing**: Modify `src/components/PricingSection.jsx`
- **Contact Info**: Update `src/pages/ContactPage.jsx` and `src/components/Footer.jsx`

### Styling
- **Theme Colors**: Customize in `tailwind.config.js`
- **Components**: Modify individual component files
- **Global Styles**: Update `src/index.css`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain component reusability
- Write meaningful commit messages
- Test across different devices

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **Mobile-Friendly**: 100% responsive

## 🛡 Security

- Regular dependency updates
- Secure contact form handling
- XSS protection
- CSRF protection
- Secure headers configuration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Unsplash** for high-quality images

## 📞 Contact

### 👨‍💼 Shubham Das
**Founder & Lead Developer**

- 🌐 **Website**: [mavryk.vercel.app](https://mavryk.vercel.app)
- 📧 **Email**: shubhamdasmedia@gmail.com
- 📱 **Phone**: +91 9876543210
- 📅 **Schedule a Call**: [Cal.com/shubham-das](https://cal.com/shubham-das-2fzvdb/demo)
- 💼 **LinkedIn**: [Connect with me](https://linkedin.com/in/shubham-das)
- 🐙 **GitHub**: [@Shubhamdas27](https://github.com/Shubhamdas27)

---

<div align="center">
  <p><strong>Made with ❤️ by Mavryk Team</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
  
  <a href="https://github.com/Shubhamdas27/Mavryk">
    <img src="https://img.shields.io/github/stars/Shubhamdas27/Mavryk?style=social" alt="GitHub stars">
  </a>
</div>
