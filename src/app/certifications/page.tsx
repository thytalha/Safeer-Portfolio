import { professionalData } from "@/config/data";
import { CertificateCard } from "@/components/ui/CertificateCard";

export const metadata = {
  title: "Certifications | Dr. Safeer Hussain Pasha",
  description: "View the professional certifications and continuing medical education of Dr. Safeer Hussain Pasha.",
};

export default function Certifications() {
  return (
    <div className="pt-24 pb-32 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-navy-900 text-white py-20 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-6">Credentials & Certifications</h1>
          <p className="text-xl text-medical-teal font-medium max-w-2xl mx-auto">
            Supporting professional development and continuous learning.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-slate-600">
            These certifications reflect a commitment to staying informed on current medical guidelines, infectious disease control, and evidence-based clinical practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalData.certifications.map((cert, index) => {
            // Generate a placeholder filename based on index
            const imageFilename = `certificate-0${index + 1}.jpg`;
            
            return (
              <CertificateCard 
                key={index} 
                title={cert} 
                imageFilename={imageFilename} 
                index={index} 
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
