# Next.js Plumbing Portfolio Website Template

A modern, responsive plumbing business website template built with Next.js, React, TypeScript, and Tailwind CSS. Perfect for plumbing contractors, pipe repair services, and related trade businesses.

## 🚀 Demo

**Live Preview:** [https://next-plumber.vercel.app/](https://next-plumber.vercel.app/)

## ✨ Features

- **Modern Design**: Clean, professional layout optimized for plumbing businesses
- **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- **Next.js 14**: Built with the latest Next.js features for optimal performance
- **TypeScript**: Type-safe development for better code quality
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **SEO Optimized**: Built-in SEO best practices
- **Fast Performance**: Optimized for speed and Core Web Vitals

### Included Sections
- **Hero Section**: Compelling headline with call-to-action
- **About Us**: Professional company introduction
- **Services**: Comprehensive plumbing services showcase
- **Gallery**: Portfolio of completed work
- **Service Areas**: Coverage information
- **Contact**: Multiple contact methods
- **Emergency Services**: 24/7 availability highlight

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sharjeelfaiq/next-plumbing-template.git
   cd next-plumbing-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your website.

## 📁 Project Structure

```
🗂️ next-plumbing-template
├── 🗂️ app
│   ├── 📄 globals.css
│   ├── 📄 layout.tsx
│   └── 📄 page.tsx
├── 🗂️ components
│   ├── 🗂️ common
│   │   ├── 📄 Button.tsx
│   │   ├── 📄 FadeIn.tsx
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 Header.tsx
│   │   └── 📄 index.ts
│   ├── 🗂️ ui
│   │   ├── 📄 accordion.tsx
│   │   ├── 📄 alert-dialog.tsx
│   │   ├── 📄 alert.tsx
│   │   ├── 📄 aspect-ratio.tsx
│   │   ├── 📄 avatar.tsx
│   │   ├── 📄 badge.tsx
│   │   ├── 📄 breadcrumb.tsx
│   │   ├── 📄 button.tsx
│   │   ├── 📄 calendar.tsx
│   │   ├── 📄 card.tsx
│   │   ├── 📄 carousel.tsx
│   │   ├── 📄 chart.tsx
│   │   ├── 📄 checkbox.tsx
│   │   ├── 📄 collapsible.tsx
│   │   ├── 📄 command.tsx
│   │   ├── 📄 context-menu.tsx
│   │   ├── 📄 dialog.tsx
│   │   ├── 📄 drawer.tsx
│   │   ├── 📄 dropdown-menu.tsx
│   │   ├── 📄 form.tsx
│   │   ├── 📄 hover-card.tsx
│   │   ├── 📄 input-otp.tsx
│   │   ├── 📄 input.tsx
│   │   ├── 📄 label.tsx
│   │   ├── 📄 menubar.tsx
│   │   ├── 📄 navigation-menu.tsx
│   │   ├── 📄 pagination.tsx
│   │   ├── 📄 popover.tsx
│   │   ├── 📄 progress.tsx
│   │   ├── 📄 radio-group.tsx
│   │   ├── 📄 resizable.tsx
│   │   ├── 📄 scroll-area.tsx
│   │   ├── 📄 select.tsx
│   │   ├── 📄 separator.tsx
│   │   ├── 📄 sheet.tsx
│   │   ├── 📄 sidebar.tsx
│   │   ├── 📄 skeleton.tsx
│   │   ├── 📄 slider.tsx
│   │   ├── 📄 sonner.tsx
│   │   ├── 📄 switch.tsx
│   │   ├── 📄 table.tsx
│   │   ├── 📄 tabs.tsx
│   │   ├── 📄 textarea.tsx
│   │   ├── 📄 toast.tsx
│   │   ├── 📄 toaster.tsx
│   │   ├── 📄 toggle-group.tsx
│   │   ├── 📄 toggle.tsx
│   │   └── 📄 tooltip.tsx
│   ├── 📄 AboutUs.tsx
│   ├── 📄 Gallery.tsx
│   ├── 📄 Hero.tsx
│   ├── 📄 PlumbingService.tsx
│   ├── 📄 PlumbingServices.tsx
│   ├── 📄 ServiceHighlights.tsx
│   └── 📄 Testimonials.tsx
├── 🗂️ data
│   ├── 📄 aboutData.ts
│   ├── 📄 footerData.tsx
│   ├── 📄 galleryData.ts
│   ├── 📄 headerData.ts
│   ├── 📄 heroData.ts
│   ├── 📄 index.ts
│   ├── 📄 logoData.ts
│   ├── 📄 plumbingServiceData.ts
│   ├── 📄 plumbingServicesData.ts
│   ├── 📄 serviceHighlightsData.tsx
│   ├── 📄 siteMeta.ts
│   └── 📄 testimonialsData.tsx
├── 🗂️ hooks
│   ├── 📄 use-mobile.tsx
│   └── 📄 use-toast.ts
├── 🗂️ lib
│   ├── 📄 class-name.ts
│   └── 📄 smooth-scroll.ts
├── 🗂️ public
│   ├── 🗂️ favicon
│   │   ├── 📄 android-chrome-192x192.png
│   │   ├── 📄 android-chrome-512x512.png
│   │   ├── 📄 apple-touch-icon.png
│   │   ├── 📄 favicon-16x16.png
│   │   ├── 📄 favicon-32x32.png
│   │   ├── 📄 favicon.ico
│   │   └── 📄 site.webmanifest
│   ├── 📄 bathroom-and-kitchen-plumbing.webp
│   ├── 📄 commercial-installations.webp
│   ├── 📄 drain-cleaning-and-unclogging.webp
│   ├── 📄 emergency-plumbing-repairs.webp
│   ├── 📄 emergency-plumbing.webp
│   ├── 📄 kitchen-plumbing.webp
│   ├── 📄 leak-detection.webp
│   ├── 📄 logo-placeholder-black.webp
│   ├── 📄 logo-placeholder.webp
│   ├── 📄 metal-work-repairs.webp
│   ├── 📄 multi-pump-system.webp
│   ├── 📄 pipe-installation-and-repiping.webp
│   ├── 📄 pipe-network-design.webp
│   ├── 📄 placeholder-hero-image.webp
│   ├── 📄 placeholder-image-1.webp
│   ├── 📄 placeholder-image-3.webp
│   ├── 📄 pressure-control-units.webp
│   ├── 📄 pressure-tanks.webp
│   ├── 📄 routine-maintenance.webp
│   ├── 📄 sewer-line-services.webp
│   ├── 📄 submersible-units.webp
│   ├── 📄 water-heater-services.webp
│   └── 📄 water-pump.webp
├── 📄 next-env.d.ts
├── 📄 next.config.mjs
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.mjs
├── 📄 README.md
├── 📄 tailwind.config.js
└── 📄 tsconfig.json
```

## ⚙️ Customization

### 1. Update Website Content

All website content is stored in the `data/` directory for easy customization:

```
data/
├── company-info.js     # Company details, contact info
├── services.js         # Service offerings and descriptions
├── gallery.js          # Portfolio images and descriptions
├── testimonials.js     # Customer reviews
└── navigation.js       # Menu items and links
```

**Example: Update company information**
```javascript
// data/company-info.js
export const companyInfo = {
  name: "Your Plumbing Company",
  phone: "(555) 123-4567",
  email: "info@yourplumbing.com",
  address: "123 Main St, Your City, State 12345",
  hours: "24/7 Emergency Service Available"
};
```

### 2. Customize Styling

**Colors and Branding:**
Edit `tailwind.config.js` to match your brand colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          // Add your brand colors here
        }
      }
    }
  }
}
```

**Fonts:**
Update fonts in `styles/globals.css` or add new font imports.

### 3. Replace Images

**Important:** This template uses placeholder images from FreePik. For commercial use:

1. **Replace placeholder images** in the `public/` directory
2. **Update image references** in data files and components
3. **Ensure proper licensing** for all images used

**Image locations:**
- `public/hero-image.webp` - Main hero section
- `public/services/` - Service-related images  
- `public/gallery/` - Portfolio/gallery images
- `public/team/` - Team member photos

### 4. Add Your Content

**Services:**
```javascript
// data/services.js
export const services = [
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency response for urgent plumbing issues",
    icon: "🚨",
    features: ["Burst pipe repair", "Leak detection", "Same-day service"]
  }
  // Add more services...
];
```

**Gallery Items:**
```javascript
// data/gallery.js
export const galleryItems = [
  {
    title: "Bathroom Renovation",
    image: "/gallery/bathroom-renovation.jpg",
    category: "Residential",
    description: "Complete bathroom plumbing installation"
  }
  // Add more projects...
];
```

## 📦 Build & Deployment

### Production Build
```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Hostinger**: Upload build files to hosting
- **DigitalOcean**: Use App Platform or Droplets

## 🔧 Configuration Files

### Next.js Configuration (`next.config.mjs`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Add your image domains
  },
};

export default nextConfig;
```

### Tailwind Configuration (`tailwind.config.js`)
Customize colors, fonts, spacing, and more to match your brand.

## 📱 Mobile Responsiveness

This template is built mobile-first and fully responsive:
- **Mobile (320px+)**: Optimized for smartphones
- **Tablet (768px+)**: Enhanced tablet experience  
- **Desktop (1024px+)**: Full desktop layout
- **Large screens (1280px+)**: Expanded desktop view

## 🎨 Customization Examples

### Change Primary Color
```javascript
// tailwind.config.js
colors: {
  primary: {
    500: '#10b981', // Change to your brand color
    600: '#059669',
  }
}
```

### Update Company Logo
1. Add your logo to `public/logo.png`
2. Update references in components

## 📞 Support

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

### Getting Help
- Check the GitHub issues for common problems
- Review the documentation for setup questions
- Test thoroughly before deployment

## 📄 License

**Images:** This template uses images from FreePik. For commercial use, ensure you have:
- FreePik Premium license, OR
- Replace with your own images/properly licensed stock photos

**Code:** MIT License - feel free to customize and use for your projects.

## 🔄 Updates

Check GitHub for template updates and new features. To update:

1. Backup your customizations
2. Pull latest changes
3. Merge your custom content
4. Test thoroughly

## ✅ Pre-Launch Checklist

Before going live:
- [ ] Replace all placeholder images
- [ ] Update all company information
- [ ] Verify mobile responsiveness  
- [ ] Check loading speeds
- [ ] Test on multiple browsers
- [ ] Ensure proper image licensing
- [ ] Add Google Analytics (optional)
- [ ] Set up contact form backend
- [ ] Configure SEO meta tags

---

**Need customization help?** Consider hiring a developer familiar with Next.js and React for advanced modifications.

**Ready to launch?** Follow the deployment guide above to get your plumbing business online!