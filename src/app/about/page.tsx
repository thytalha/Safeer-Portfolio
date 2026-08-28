import { professionalData } from "@/config/data";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Dr. Safeer Hussain Pasha | Medical Professional",
  description: "Learn about Dr. Safeer Hussain Pasha's medical philosophy, clinical foundations, and commitment to patient-centered care.",
};

export default function About() {
  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-6">Professional Profile</h1>
          <p className="text-xl text-medical-teal font-medium">
            Integrity, Precision, and Compassion
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        
        {/* Introduction */}
        <section>
          <h2 className="font-serif text-3xl text-navy-900 mb-8 border-b border-slate-200 pb-4">Introduction</h2>
          <div className="prose prose-lg text-slate-600">
            {professionalData.summary.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Medical Philosophy */}
        <section>
          <h2 className="font-serif text-3xl text-navy-900 mb-8 border-b border-slate-200 pb-4">Medical Philosophy</h2>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Careful examination and structured reasoning form the core of effective medical practice. I believe in a patient-centered approach where evidence-based decisions guide treatment, ensuring every patient receives precise, compassionate care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {professionalData.philosophy.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-medical-teal flex-shrink-0" />
                  <span className="text-navy-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Foundation */}
        <section>
          <h2 className="font-serif text-3xl text-navy-900 mb-8 border-b border-slate-200 pb-4">Clinical Foundation</h2>
          <p className="text-slate-600 mb-8 leading-relaxed text-lg">
            My clinical training has provided extensive exposure to a variety of demanding medical disciplines, allowing me to develop a robust, holistic understanding of patient care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-slate-200 rounded-xl hover:border-medical-teal transition-colors">
              <h3 className="font-serif text-xl text-navy-900 mb-2">Medicine</h3>
              <p className="text-slate-600">Comprehensive diagnostic and therapeutic exposure in general medicine settings.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl hover:border-medical-teal transition-colors">
              <h3 className="font-serif text-xl text-navy-900 mb-2">Surgery</h3>
              <p className="text-slate-600">Foundational surgical training and pre/post-operative patient management.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl hover:border-medical-teal transition-colors">
              <h3 className="font-serif text-xl text-navy-900 mb-2">Pediatrics</h3>
              <p className="text-slate-600">Specialized approach to clinical care for infants, children, and adolescents.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-xl hover:border-medical-teal transition-colors">
              <h3 className="font-serif text-xl text-navy-900 mb-2">Otorhinolaryngology (ENT)</h3>
              <p className="text-slate-600">Focused clinical experience in diseases of the ear, nose, and throat.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
