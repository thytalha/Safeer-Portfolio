import { siteConfig } from "@/config/site";
import { Mail, MapPin, Download, MessageCircle, Linkedin, Instagram, Twitter } from "lucide-react";

export const metadata = {
  title: "Contact & Appointments | Dr. Safeer Hussain Pasha",
  description: "Get in touch or schedule an appointment with Dr. Safeer Hussain Pasha.",
};

export default function Contact() {
  return (
    <div className="pt-24 pb-32 bg-white">
      {/* Header */}
      <section className="bg-navy-900 text-white py-20 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-6">Contact & Appointments</h1>
          <p className="text-xl text-medical-teal font-medium max-w-2xl mx-auto">
            Get in touch to schedule a consultation or connect professionally.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-3xl text-navy-900 mb-8 border-b border-slate-200 pb-4">Connect</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mr-6">
                  <MessageCircle className="h-6 w-6 text-medical-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy-900 mb-1">Appointments (WhatsApp)</h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    For medical consultations. Please note this is not an emergency service.
                  </p>
                  <a 
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello Dr. Safeer, I would like to enquire about scheduling an appointment.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-medical-blue font-medium hover:text-navy-900 transition-colors inline-flex items-center"
                  >
                    Start a Conversation <MessageCircle className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mr-6">
                  <Mail className="h-6 w-6 text-medical-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy-900 mb-1">Email</h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    For professional or academic inquiries.
                  </p>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-medical-blue font-medium hover:text-navy-900 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mr-6">
                  <MapPin className="h-6 w-6 text-medical-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy-900 mb-1">Location</h3>
                  <p className="text-slate-600">
                    {siteConfig.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-medium text-navy-900 mb-4">Professional Networks</h3>
              <div className="flex space-x-4">
                <a 
                  href={siteConfig.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-slate-500 hover:text-medical-teal hover:border-medical-teal transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={siteConfig.socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-slate-500 hover:text-medical-teal hover:border-medical-teal transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href={siteConfig.socialLinks.x} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-slate-500 hover:text-medical-teal hover:border-medical-teal transition-all"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Curriculum Vitae */}
          <div>
            <div className="bg-slate-50 p-8 sm:p-12 rounded-2xl border border-slate-200 h-full flex flex-col items-center justify-center text-center">
              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-6">
                <Download className="h-8 w-8 text-medical-teal" />
              </div>
              <h2 className="font-serif text-2xl font-medium text-navy-900 mb-4">Curriculum Vitae</h2>
              <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                Download a comprehensive overview of my professional experience, education, and clinical background.
              </p>
              <a
                href="/documents/Dr-Safeer-Hussain-Pasha-CV.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-medical-blue hover:bg-navy-800 transition-colors shadow-sm w-full sm:w-auto"
              >
                Download CV (PDF)
              </a>
              <p className="text-xs text-slate-400 mt-6 max-w-xs mx-auto">
                (Please ensure the PDF is placed in public/documents/Dr-Safeer-Hussain-Pasha-CV.pdf)
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
