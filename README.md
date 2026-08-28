# Dr. Safeer Hussain Pasha - Professional Portfolio

This is a premium, production-quality medical personal-brand website built with Next.js, Tailwind CSS, and TypeScript.

## Project Architecture

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Development Setup

1. **Install Node.js:** Ensure you have Node.js installed (v18 or higher recommended).
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run Development Server:**
   ```bash
   npm run dev
   ```
4. **Open Application:** Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

The content of the website is centrally managed to make future updates easy without touching complex UI components.

- **`src/config/site.ts`**: Contains site metadata, contact information, social links, and the WhatsApp number placeholder.
- **`src/config/data.ts`**: Contains Dr. Safeer's professional summary, philosophy, clinical experience, education, and certifications.

### WhatsApp Configuration

To enable the WhatsApp booking CTA, you must provide the phone number. 
Create a `.env.local` file at the root of the project:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567
```
*(Use international format without the `+` sign).*

### Social Media URLs

You can update the social media URLs inside `src/config/site.ts`. For instance, when the Facebook URL is available, update the `facebook` property in the `socialLinks` object.

## Assets (Images & Documents)

Please read `ASSETS.md` for detailed instructions on where to place your images (portraits, certificates, work photos) and your CV PDF.

## Deployment

This project is optimized and ready to be deployed to platforms like Vercel or Netlify.

### Vercel Deployment (Recommended)
1. Push your code to a GitHub repository.
2. Go to Vercel and import your repository.
3. In the environment variables section, add your `NEXT_PUBLIC_WHATSAPP_NUMBER`.
4. Deploy!

### Netlify Deployment
1. Connect your repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next` (Netlify will auto-detect Next.js)
4. Add your `NEXT_PUBLIC_WHATSAPP_NUMBER` in Site Settings > Environment Variables.
