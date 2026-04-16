import React from "react";
import {
  MapPin,
  Building2,
  BookOpen,
  GraduationCap,
  Briefcase,
  Users,
  Award,
  School,
  Scale,
} from "lucide-react";

export default function GlimpseLawCollege() {
  return (
    <section className="w-full py-10 px-6 bg-[#1f3c88] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-2">
          Glimpse of Jadhavar College of Law
        </h2>

        <p className="text-center max-w-4xl mx-auto text-xs text-white/90 mb-8">
          A professional learning environment focused on academic excellence,
          practical training, ethical values, and holistic development in legal education.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <InfoCard
            icon={<Users />}
            title="Experienced & Dedicated Faculty"
            desc="Guided by academicians, advocates, and legal professionals"
          />

          <InfoCard
            icon={<Scale />}
            title="Moot Court & Advocacy Training"
            desc="Hands-on courtroom practice and advocacy skill development"
          />

          <InfoCard
            icon={<Building2 />}
            title="Legal Aid & Social Justice Initiatives"
            desc="Community legal services and social responsibility programs"
          />

          <InfoCard
            icon={<BookOpen />}
            title="Research & Publication Culture"
            desc="Encouraging legal research, writing, and academic publications"
          />

          <InfoCard
            icon={<Briefcase />}
            title="Internships with Courts, Law Firms & NGOs"
            desc="Practical exposure through structured internship opportunities"
          />

          <InfoCard
            icon={<Award />}
            title="National Competitions & Conferences"
            desc="Participation in moot courts, debates, and legal conferences"
          />

          <InfoCard
            icon={<GraduationCap />}
            title="International Perspective in Legal Studies"
            desc="Global outlook through comparative and international law exposure"
          />

          <InfoCard
            icon={<School />}
            title="Seminars, Workshops & Guest Lectures"
            desc="Expert sessions with judges, lawyers, and academicians"
          />

          <InfoCard
            icon={<Users />}
            title="Student Mentorship & Career Guidance"
            desc="Personal mentoring and structured career support"
          />

          <InfoCard
            icon={<Scale />}
            title="Ethical & Value-Based Legal Education"
            desc="Strong foundation in ethics, justice, and professional conduct"
          />

          <InfoCard
            icon={<Award />}
            title="Vibrant Academic & Cultural Activities"
            desc="Balanced development through academics and co-curricular events"
          />

          <InfoCard
            icon={<MapPin />}
            title="Strong Alumni & Professional Network"
            desc="Lifelong professional connections and alumni engagement"
          />

        </div>

        {/* Footer Line */}
        <p className="text-center mt-8 text-xs text-white/90">
          Shaping competent, ethical, and socially responsible legal professionals.
        </p>

      </div>
    </section>
  );
}

/* ---------------- SMALL CARD COMPONENT ---------------- */

function InfoCard({ icon, title, desc }) {
  return (
    <div className="bg-white text-gray-800 rounded-md p-3 shadow-sm hover:shadow-md transition">
      <div className="mb-2 text-[#1f3c88]">
        {React.cloneElement(icon, { size: 22 })}
      </div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-[11px] text-gray-600 leading-snug">{desc}</p>
    </div>
  );
}
