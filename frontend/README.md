# Mavryk

## Overview
Mavryk is a modern digital marketing agency website built with React, Tailwind CSS, and Framer Motion. It showcases services such as SEO optimization, content creation, influencer marketing, mobile marketing, email marketing, and more. The site is designed for high conversion, professional branding, and easy client engagement.

## Features
- **Company Branding:** All pages and components use the Mavryk brand, colors, and logo.
- **Service Showcase:** Detailed cards for each service, including custom images and feature lists.
- **Pricing Page:** Transparent pricing section with three tiers and a customizable option.
- **Book a Call CTA:** Prominent call-to-action buttons linking to Cal.com for easy scheduling.
- **Contact Information:** Updated with correct email and phone details.
- **Custom Fonts:** Poppins for headings, Roboto for body text, loaded via Google Fonts.
- **Responsive Design:** Fully mobile-friendly and optimized for all devices.
- **Modern Animations:** Framer Motion for smooth transitions and engaging UI.
- **Image Assets:** All service images are custom and stored locally for fast loading.

## Tech Stack
- **React** (SPA, functional components)
- **Tailwind CSS** (utility-first styling, custom config)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Google Fonts** (typography)

## Getting Started
1. **Clone the repo:**
   ```bash
   git clone https://github.com/Shubhamdas27/Mavryk.git
   cd Mavryk/frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Visit `http://localhost:5173` (or the port shown in your terminal)

## Project Structure
```
frontend/
  ├── public/
  ├── src/
  │   ├── assets/           # Images and logos
  │   ├── components/       # Reusable UI components
  │   ├── data/             # Service and testimonial data
  │   ├── lib/              # Utility libraries
  │   ├── pages/            # Main pages (Home, About, Services, Pricing, etc.)
  │   ├── index.css         # Global styles
  │   └── main.jsx          # App entry point
  ├── tailwind.config.js    # Tailwind configuration
  ├── package.json          # Project metadata
  └── README.md             # Documentation
```

## Customization
- **Services:** Edit `src/data/services.jsx` to update service details and images.
- **Pricing:** Modify `src/components/PricingSection.jsx` and `src/pages/PricingPage.jsx` for pricing tiers.
- **Branding:** Update logo in `src/assets/` and colors in `tailwind.config.js`.
- **Contact Info:** Change details in `src/pages/ContactPage.jsx` and `src/components/Footer.jsx`.

## Deployment
- Ready for deployment on Vercel, Netlify, or any static hosting platform.
- Includes `vercel.json` for Vercel configuration.

## License
This project is for demonstration and agency use. For commercial licensing, contact the author.

## Author
- [Shubham Das](https://cal.com/shubham-das-2fzvdb/demo)
- Email: shubhamdasmedia@gmail.com
- Phone: +91 9876543210

---

For any issues or feature requests, please open an issue on GitHub or contact via email.
