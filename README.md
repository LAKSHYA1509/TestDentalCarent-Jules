# Delhi Dental Care Center Website

A comprehensive, production-ready dental clinic website built with Next.js, TypeScript, and Supabase.

## Features

### Pages
- **Home**: Hero section with key features, services overview, and call-to-actions
- **About Us**: Clinic story, values, mission, and team information
- **Services**: Detailed listings of all dental services with descriptions
- **Gallery**: Image gallery with category filtering (dynamically loaded from Supabase)
- **Blog**: Dynamic blog posts with individual post pages (content from Supabase)
- **Contact Us**: Contact and enquiry forms with Google Maps integration

### Functionality
- **Database Integration**: Supabase for enquiries, contact forms, blog posts, and gallery images
- **Email Notifications**: Supabase Edge Function for processing form submissions
- **WhatsApp Integration**: Click-to-chat floating action button
- **Click-to-Call**: Phone call functionality throughout the site
- **Google Analytics**: Integrated (requires GA_MEASUREMENT_ID)
- **Google Maps**: Embedded map on contact page
- **Social Media**: Links to Facebook, Instagram, Twitter, and LinkedIn
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Comprehensive meta tags and semantic HTML

### Technical Features
- Next.js 13 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui component library
- Supabase for backend and database
- Form validation with React Hook Form and Zod
- Toast notifications with Sonner

## Database Schema

### Tables
1. **enquiries**: Quick enquiry form submissions
2. **contact_submissions**: Contact form submissions
3. **blog_posts**: Blog articles with rich content
4. **gallery_images**: Gallery images with categories

All tables have Row Level Security (RLS) enabled with appropriate policies.

## Environment Variables

Required variables (already configured):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Optional:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement ID

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Google Analytics** (Optional)
   - Add your GA measurement ID to `.env`:
     ```
     NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
     ```

3. **Update Contact Information**
   - Edit phone numbers in `/components/layout/header.tsx` and `/components/layout/footer.tsx`
   - Update WhatsApp number in `/components/floating-action-buttons.tsx`
   - Update email addresses in `/components/layout/footer.tsx`
   - Update clinic address in `/app/contact/page.tsx`
   - Update Google Maps embed URL in `/app/contact/page.tsx`

4. **Add Social Media Links**
   - Update social media URLs in `/components/layout/footer.tsx`

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Adding Content

### Blog Posts
Insert blog posts directly into the Supabase `blog_posts` table with:
- title
- slug (unique, URL-friendly)
- excerpt
- content (HTML supported)
- featured_image (image URL)
- published (boolean)

### Gallery Images
Insert images into the `gallery_images` table with:
- title
- image_url
- category (optional)
- display_order

## Customization

### Colors
The site uses a blue color scheme. To change:
- Update color classes in all components (search for `blue-600`, `blue-700`, etc.)
- Update gradient classes in hero sections

### Content
- Replace placeholder text in all pages
- Add real team member information in `/app/about/page.tsx`
- Update service details in `/app/services/page.tsx`

## Edge Functions

The site includes a Supabase Edge Function for email notifications:
- `send-email-notification`: Processes form submissions

## Support

For questions or issues, contact the development team.

## License

Proprietary - Delhi Dental Care Center
