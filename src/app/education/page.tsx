import { professionalData } from "@/config/data";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Education & Professional Development | Dr. Safeer Hussain Pasha",
  description: "Academic background and ongoing professional learning of Dr. Safeer Hussain Pasha.",
};

export default function Education() {
  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="bg-navy-900 text-white py-20 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-6">Education & Development</h1>
          <p className="text-xl text-medical-teal font-medium max-w-2xl mx-auto">
            A commitment to rigorous academic training and continuous professional learning.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Core Education */}
        <section>
          <div className="flex items-center mb-10 border-b border-slate-200 pb-4">
            <GraduationCap className="h-8 w-8 text-medical-teal mr-4" />
            <h2 className="font-serif text-3xl text-navy-900">Academic Foundation</h2>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-serif text-2xl font-medium text-navy-900 mb-2">
                  {professionalData.education[0].degree}
                </h3>
                <p className="text-lg text-slate-700 font-medium mb-1">
                  {professionalData.education[0].institution}
                </p>
                <p className="text-slate-500">
                  {professionalData.education[0].period}
                </p>
              </div>
              <div className="mt-6 md:mt-0 inline-flex items-center justify-center h-16 w-16 rounded-full bg-slate-50 border border-slate-100 flex-shrink-0">
                <BookOpen className="h-8 w-8 text-medical-teal" />
              </div>
            </div>
          </div>
        </section>

        {/* Professional Learning */}
        <section>
          <div className="flex items-center mb-10 border-b border-slate-200 pb-4">
            <Award className="h-8 w-8 text-medical-teal mr-4" />
            <h2 className="font-serif text-3xl text-navy-900">Professional Learning</h2>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8">
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Medicine requires a dedication to lifelong learning. Beyond core academic training, Dr. Safeer actively engages in continuing medical education to stay updated with evidence-based practices and clinical guidelines.
            </p>
            <ul className="space-y-4">
              {professionalData.certifications.slice(0, 3).map((cert, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-medical-teal mt-2 mr-4 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center">
            <Link
              href="/certifications"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-base font-medium rounded-md text-navy-900 bg-white hover:bg-slate-50 transition-colors shadow-sm"
            >
              View All Certifications
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
