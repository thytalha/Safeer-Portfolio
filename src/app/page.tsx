import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { professionalData } from "@/config/data";
import { ArrowRight, Activity, BookOpen, Stethoscope, HeartPulse } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-900 text-white pt-24 pb-32 lg:pt-36 lg:pb-40">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-medical-teal to-transparent rounded-full blur-3xl transform -rotate-12" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-medical-blue to-transparent rounded-full blur-3xl transform rotate-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
                  {professionalData.name}
                </h1>
                <p className="text-xl sm:text-2xl text-medical-teal font-medium mb-4">
                  {professionalData.credentials.join(", ")} | {professionalData.registration}
                </p>
                <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                  Care grounded in knowledge. Delivered with compassion. Thoughtful medicine and evidence-based decision-making.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello Dr. Safeer, I would like to enquire about scheduling an appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-navy-900 bg-white hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Book an Appointment
                </a>
                <Link
                  href="/experience"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-600 text-base font-medium rounded-md text-white hover:bg-navy-800 transition-colors"
                >
                  Explore Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border border-navy-700 bg-navy-800 flex items-center justify-center">
                {/* Fallback portrait placeholder until actual image is provided */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-navy-400 p-8 text-center">
                  <span className="font-serif text-2xl mb-2">Dr. Safeer Hussain Pasha</span>
                  <span className="text-sm">Please place doctor-portrait.jpg in public/images/doctor/</span>
                </div>
                {/* 
                  Once image is available, the user can uncomment this:
                  <Image 
                    src="/images/doctor/doctor-portrait.jpg" 
                    alt="Dr. Safeer Hussain Pasha" 
                    fill 
                    className="object-cover"
                    priority
                  />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Snapshot */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-slate-50 text-medical-teal mb-6">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-navy-900 mb-3">Rigorous Education</h3>
              <p className="text-slate-600 leading-relaxed">
                MBBS from International Medical University, Kyrgyzstan. A strong academic foundation spanning 2019–2024.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-slate-50 text-medical-teal mb-6">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-navy-900 mb-3">Clinical Training</h3>
              <p className="text-slate-600 leading-relaxed">
                Extensive clinical exposure at Services Hospital Lahore across multiple demanding disciplines.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-slate-50 text-medical-teal mb-6">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-navy-900 mb-3">Patient-Centered Care</h3>
              <p className="text-slate-600 leading-relaxed">
                Approaching clinical practice through careful examination, structured reasoning, and evidence-based decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Foundations */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy-900 mb-4">Areas of Clinical Exposure</h2>
            <p className="text-lg text-slate-600">
              Broad foundational experience shaping a comprehensive approach to medical care.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Medicine', 'Surgery', 'Pediatrics', 'Otorhinolaryngology / ENT'].map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center group hover:shadow-md transition-shadow">
                <HeartPulse className="h-8 w-8 mx-auto text-slate-300 group-hover:text-medical-teal transition-colors mb-4" />
                <h3 className="font-medium text-navy-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-medical-blue mix-blend-multiply" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
            Have a health concern? Start a conversation.
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Reach out directly for a consultation. Appointments are managed carefully to ensure thoughtful, personalized care.
          </p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello Dr. Safeer, I would like to enquire about scheduling an appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-navy-900 bg-white hover:bg-slate-50 transition-colors shadow-lg"
          >
            Book an Appointment on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
