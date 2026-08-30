import Link from "next/link";
import { siteConfig } from "@/config/site";
import { professionalData as pData } from "@/config/data";
import { Linkedin, Instagram, Twitter, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Identity Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-2">{siteConfig.name}</h3>
            <p className="text-medical-teal font-medium mb-4">
              {pData.credentials.join(", ")} | {pData.registration}
            </p>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Information provided on this website is intended for general informational and professional-profile purposes and should not be considered a substitute for individualized medical advice, diagnosis, or treatment. 
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              For medical concerns, please consult an appropriately qualified healthcare professional. WhatsApp appointment contact is not an emergency service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">Professional Profile</Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">Clinical Experience</Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">Certifications</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-medical-teal flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-medical-teal flex-shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
            
            <div className="flex space-x-4">
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={siteConfig.socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Trust & Excellence</p>
        </div>
      </div>
    </footer>
  );
}
