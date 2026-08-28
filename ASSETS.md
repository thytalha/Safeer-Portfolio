# Asset Management Instructions

To protect your personal assets, they are not included in the source code by default. You need to place your actual images and PDF documents into the correct folders before deploying.

All assets must be placed inside the `public/` directory at the root of the project.

## Directory Structure

Ensure your `public/` folder has the following structure:

```text
public/
├── images/
│   ├── doctor/
│   ├── experience/
│   └── certificates/
└── documents/
```

## 1. Doctor Portrait
- **Location:** `public/images/doctor/doctor-portrait.jpg`
- **Instructions:** Place your main professional headshot here. 
- **Recommendation:** Use a high-quality, vertically-oriented (portrait) image for the best appearance in the hero section.
- *Once placed, go to `src/app/page.tsx` and uncomment the `<Image>` component inside the Hero section.*

## 2. Certifications
- **Location:** `public/images/certificates/`
- **Naming Convention:** 
  - `certificate-01.jpg`
  - `certificate-02.jpg`
  - `certificate-03.jpg`
  - `certificate-04.jpg`
  - `certificate-05.jpg`
- **Instructions:** Ensure the image files correspond to the order of the certifications listed in `src/config/data.ts`.
- *Once placed, go to `src/components/ui/CertificateCard.tsx` and uncomment the `<Image>` component.*

## 3. Curriculum Vitae (CV)
- **Location:** `public/documents/Dr-Safeer-Hussain-Pasha-CV.pdf`
- **Instructions:** Place your actual PDF CV here. The "Download CV" button on the Contact page relies on this exact file path.

## 4. Experience Photos (Optional)
- **Location:** `public/images/experience/`
- **Instructions:** If you choose to add gallery photos for the experience timeline in the future, you can store them here.
