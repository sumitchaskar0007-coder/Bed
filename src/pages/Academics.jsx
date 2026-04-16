
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  CalendarDays,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Briefcase,
  FileText,
  Users
} from "lucide-react";

const academicsData = [
  {
    title: "Academic Calendar",
    icon: <CalendarDays />,
    description:
      "The academic calendar of Jay Ganesh College of Education provides the schedule for admissions, lectures, internal assessments, examinations, holidays, and academic activities for the B.Ed program."
  },
  {
    title: "Teaching–Learning Process",
    icon: <BookOpen />,
    description:
      "The college follows modern teaching methods including lectures, demonstrations, classroom discussions, presentations, and activity-based learning to develop effective teaching skills."
  },
  {
    title: "Examination & Evaluation",
    icon: <ClipboardCheck />,
    description:
      "Evaluation is conducted as per Savitribai Phule Pune University guidelines through internal assessments, semester examinations, assignments, teaching practice, and practical evaluations."
  },
  {
    title: "Practice Teaching",
    icon: <GraduationCap />,
    description:
      "Practice teaching is an essential part of the B.Ed curriculum where students conduct teaching sessions in schools under the guidance of experienced mentors."
  },
  {
    title: "Internship Program",
    icon: <Briefcase />,
    description:
      "Students participate in school internships to gain practical classroom experience, lesson planning skills, and exposure to real educational environments."
  },
  {
    title: "Research & Projects",
    icon: <FileText />,
    description:
      "Students are encouraged to undertake action research projects, educational surveys, and academic research activities to develop analytical and research skills."
  },
  {
    title: "Seminars & Workshops",
    icon: <Users />,
    description:
      "The college regularly organizes seminars, workshops, guest lectures, and training sessions to enhance teaching skills, professional development, and educational awareness."
  }
];

export default function Academics() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Academics | B.Ed Program | Jay Ganesh College of Education Pune
        </title>
        <meta
          name="description"
          content="Explore the academic structure of Jay Ganesh College of Education Pune including academic calendar, teaching-learning process, practice teaching, internships, research activities, seminars, and workshops for B.Ed students."
        />
        <meta
          name="keywords"
          content="B.Ed Academics Pune, Teacher Training Program Pune, Practice Teaching B.Ed, Education College Academics Pune"
        />
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <section className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Academics
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto">
              The academic framework of Jay Ganesh College of Education is
              designed to provide quality teacher training through structured
              curriculum, practical teaching experience, and continuous
              evaluation in the B.Ed program.
            </p>
          </motion.div>

          {/* ACADEMICS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.04 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-all"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-700">
                  <div className="p-3 rounded-xl bg-blue-50">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SYLLABUS SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Syllabus
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Download the official B.Ed syllabuses for both final and revised curriculum. These documents contain comprehensive course structure, learning outcomes, and assessment criteria.
            </p>
          </motion.div>

          {/* Syllabus Cards - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* B.Ed Final Syllabus */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-600">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  B.Ed Final Syllabus
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Complete syllabus for the B.Ed final curriculum. This document includes all courses, units, topics, learning outcomes, and evaluation methods for the B.Ed final year program.
              </p>

              <div className="flex gap-4">
                <a
                  href="/assets/pdf/Bed_final.pdf"
                  download
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105"
                >
                  <FileText className="h-5 w-5" />
                  Download PDF
                </a>
                <a
                  href="/assets/pdf/Bed_final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all"
                >
                  <FileText className="h-5 w-5" />
                  View Online
                </a>
              </div>
            </motion.div>

            {/* B.Ed Revised Syllabus */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-green-600">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  B.Ed Revised Syllabus 2025
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Updated B.Ed curriculum for 2025 and onwards. This revised syllabus incorporates latest educational standards, modern teaching methodologies, and research-based learning approaches aligned with national education policies.
              </p>

              <div className="flex gap-4">
                <a
                  href="/assets/pdf/BedRevised2025.pdf"
                  download
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105"
                >
                  <FileText className="h-5 w-5" />
                  Download PDF
                </a>
                <a
                  href="/assets/pdf/BedRevised2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all"
                >
                  <FileText className="h-5 w-5" />
                  View Online
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= DOWNLOADS / DOCUMENTS ================= */}
     <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Government Documents
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Important government-approved academic and official PDF documents.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg mb-2">
          Academic Government PDF
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Official government-approved academic document.
        </p>
        <div className="flex gap-3">
          <a
            href="/assets/pdf/jdh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            View
          </a>
          <a
            href="/assets/pdf/jdh.pdf"
            download
            className="px-4 py-2 border rounded-lg"
          >
            Download
          </a>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg mb-2">
          Recognition / Approval PDF
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Government recognition and approval related document.
        </p>
        <div className="flex gap-3">
          <a
            href="/assets/pdf/jgs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            View
          </a>
          <a
            href="/assets/pdf/jgs.pdf"
            download
            className="px-4 py-2 border rounded-lg"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
     
    </>
  );
}
