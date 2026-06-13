# Arvane React - Modern Cafe Website

A fully responsive React-based Single Page Application (SPA) for Arvane Cafe, built with Vite, React Router, and CSS Modules.

## Features

### ✨ Modern Architecture

- **React 19** with functional components and hooks
- **React Router v6** for seamless navigation
- **Vite** for fast development and optimized builds
- **CSS Modules** for scoped, maintainable styling
- **Responsive Design** with mobile-first approach

### 🎯 Fully Implemented Pages

- **Home** - Hero section, featured products, testimonials, value propositions
- **Menu** - Categorized menu items with filtering (Trending, Drinks, Bakery, Breakfast, Lunch, Dinner, Cocktails, Home Brewing)
- **Locations** - Multiple cafe locations with details, hours, amenities, and map integration
- **Reservations** - Table booking system with date/time selection and form validation
- **Contact** - Contact form with real-time validation
- **About** - Brand story and philosophy
- **Events** - Upcoming events and workshops
- **Gift Cards** - Gift card offerings and purchasing
- **Memberships** - Tiered membership plans
- **Careers** - Job application form
- **Legal** - Terms, Privacy Policy, and important notices

### 🔒 Security Features

- Environment variable support for sensitive data (.env.local)
- No hardcoded credentials
- XSS protection through React's default sanitization
- CSRF-ready form structure
- Accessibility-first design

### 📦 Reusable Components

- `HeroSection` - Hero banners with video/image backgrounds
- `MenuCard` - Product display cards with pricing
- `FormGroup` - Input components with validation
- `LocationCard` - Location information display
- `FeatureBox` - Feature showcase components
- `TestimonialCarousel` - Auto-rotating testimonial carousel

### 🎨 Design System

- Centralized CSS variables for colors, spacing, typography
- Utility classes for common patterns
- Component-scoped CSS Modules
- Smooth transitions and hover effects
- Mobile-responsive grid system

### ✅ Form Validation

- Client-side validation with custom rules
- Real-time error feedback
- Field-specific error messages
- Support for all input types (text, email, tel, date, select, textarea)

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)
- Modern web browser

### Installation

1. **Clone the repository** (if applicable)

   ```bash
   cd ArvaneReact
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment configuration**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and update the values:

   ```env
   VITE_WHATSAPP_NUMBER=+972-50-7331829
   VITE_FACEBOOK_URL=https://www.facebook.com/arvanecafe
   VITE_INSTAGRAM_URL=https://www.instagram.com/arvanecafe
   VITE_TWITTER_URL=https://www.twitter.com/arvanecafe
   VITE_TIKTOK_URL=https://www.tiktok.com/@arvanecafe
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Main navigation header
│   ├── Footer.jsx      # Footer with links
│   ├── Logo.jsx        # Logo component
│   └── shared/         # Reusable shared components
│       ├── HeroSection.jsx
│       ├── MenuCard.jsx
│       ├── FormGroup.jsx
│       ├── LocationCard.jsx
│       ├── FeatureBox.jsx
│       └── TestimonialCarousel.jsx
├── pages/              # Page components (one per route)
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Locations.jsx
│   ├── Contact.jsx
│   ├── ReserveTable.jsx
│   ├── About.jsx
│   ├── Events.jsx
│   ├── GiftCards.jsx
│   ├── JoinTeam.jsx
│   ├── Memberships.jsx
│   ├── TermsPrivacy.jsx
│   └── Notice.jsx
├── config/             # Configuration files
│   └── site.js        # Centralized site configuration
├── data/              # Static data
│   ├── menu.js        # Menu items by category
│   └── locations.js   # Location information
├── utils/             # Utility functions
│   └── validation.js  # Form validation rules
├── hooks/             # Custom React hooks (future)
├── assets/
│   ├── CSS/          # Global and module styles
│   │   ├── variables.css      # CSS variables
│   │   ├── utilities.css      # Utility classes
│   │   └── *.module.css       # Component styles
│   └── images/       # Images and media
├── App.jsx           # Main app component with routing
├── index.jsx         # Entry point
└── index.html        # HTML template
```

## Configuration

### Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```env
# WhatsApp contact number
VITE_WHATSAPP_NUMBER=+972-50-7331829

# Social media URLs
VITE_FACEBOOK_URL=https://www.facebook.com/arvanecafe
VITE_INSTAGRAM_URL=https://www.instagram.com/arvanecafe
VITE_TWITTER_URL=https://www.twitter.com/arvanecafe
VITE_TIKTOK_URL=https://www.tiktok.com/@arvanecafe

# (Optional) API configuration for future backend integration
# VITE_API_BASE_URL=https://api.example.com
```

### Site Configuration

Edit `src/config/site.js` to:

- Update contact information
- Modify navigation items
- Add/edit testimonials
- Update footer links
- Customize brand values

### Menu Data

Edit `src/data/menu.js` to:

- Add/remove menu items
- Update pricing
- Modify categories
- Change descriptions

### Location Data

Edit `src/data/locations.js` to:

- Add new locations
- Update hours and contact info
- Add amenities and accessibility features

## Customization

### Adding a New Page

1. Create a new file in `src/pages/YourPage.jsx`:

   ```jsx
   import HeroSection from "../components/shared/HeroSection";

   export default function YourPage() {
     return (
       <div>
         <HeroSection title="Your Page" subtitle="Subtitle here" />
         {/* Your content */}
       </div>
     );
   }
   ```

2. Add the route to `src/App.jsx`:

   ```jsx
   import YourPage from "./pages/YourPage";

   <Route path="/your-page" element={<YourPage />} />;
   ```

3. Add navigation link to `src/config/site.js`:
   ```js
   navigation: [
     // ... existing items
     { label: "Your Page", path: "/your-page" },
   ];
   ```

### Styling Components

Create a CSS Module (e.g., `YourComponent.module.css`):

```css
.container {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-md);
}

.title {
  color: var(--accent-gold);
  font-size: var(--text-lg);
}
```

Import and use in your component:

```jsx
import styles from "./YourComponent.module.css";

export default function YourComponent() {
  return <div className={styles.container}>...</div>;
}
```

## Form Validation

Forms use centralized validation rules from `src/utils/validation.js`:

```jsx
import FormGroup from "../components/shared/FormGroup";
import { validateForm } from "../utils/validation";

// In your component:
const [formData, setFormData] = useState({ name: "", email: "" });
const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = validateForm(formData, ["name", "email"]);
  if (Object.keys(newErrors).length === 0) {
    // Submit form
  } else {
    setErrors(newErrors);
  }
};
```

## Performance Optimizations

- ✅ CSS Modules prevent style conflicts
- ✅ Lazy route loading (can be implemented)
- ✅ Optimized images with proper sizing
- ✅ Minified and bundled by Vite
- ✅ Responsive design reduces bandwidth needs

## Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Screen reader friendly

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Production Build

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deployment Options

- Vercel (recommended for Vite)
- Netlify
- GitHub Pages
- Traditional hosting with Node.js/Express

## Security Checklist

Before deploying to GitHub:

- ✅ `.env.local` is in `.gitignore`
- ✅ No hardcoded secrets in code
- ✅ All sensitive data in environment variables
- ✅ `.env.example` has safe placeholder values
- ✅ No API keys in version control
- ✅ Headers and meta tags configured properly

## Troubleshooting

### Port Already in Use

```bash
npm run dev -- --port 3000
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### Images Not Loading

- Ensure image paths are relative to `public/` folder
- Use `/assets/images/filename.jpg` format
- Check file extensions are lowercase

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication/accounts
- [ ] Online ordering system
- [ ] Payment processing
- [ ] Real map integration (Google Maps/Mapbox)
- [ ] Admin dashboard
- [ ] Analytics tracking
- [ ] Email notifications
- [ ] Appointment system
- [ ] Review/rating system

## License

Copyright © 2026 Arvane. All rights reserved.

## Support

For questions or issues, please contact us through the Contact page or visit one of our locations.

---

**Last Updated:** June 2026

**Built with ❤️ using React and Vite**
