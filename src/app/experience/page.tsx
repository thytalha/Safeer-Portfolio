import { professionalData } from "@/config/data";
import { Building2, Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Clinical Experience | Dr. Safeer Hussain Pasha",
  description: "Explore the clinical experience and medical rotations of Dr. Safeer Hussain Pasha.",
};

export default function Experience() {
  return (
    <div className="pt-24 pb-32 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-navy-900 text-white py-20 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-6">Clinical Experience</h1>
          <p className="text-xl text-medical-teal font-medium max-w-2xl mx-auto">
            A diverse foundation in rigorous clinical environments.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:border-l-0">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>

          <div className="space-y-12">
            {professionalData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between w-full">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[-21px] md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-medical-teal shadow flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-navy-900"></div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${isEven ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h3 className="font-serif text-xl text-navy-900 font-medium mb-2">{exp.role}</h3>
                      
                      <div className={`flex flex-col space-y-2 mb-4 text-sm text-slate-600 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <div className="flex items-center">
                          <Building2 className="h-4 w-4 mr-2 text-medical-teal" />
                          <span className="font-medium">{exp.institution}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-medical-teal" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-medical-teal" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
