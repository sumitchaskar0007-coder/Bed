import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";
import Facilities from "../components/Facilities";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import GlimpseLawCollege from "../components/GlimpseLawCollege";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  // YouTube details
  const youtubeUrl = "https://www.youtube.com/watch?v=PaDE1ETKP8A";
  const videoId = "PaDE1ETKP8A";

  // Thumbnail from public folder
  const thumbnailSrc = "/assets/images/vedio-2.png";

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        className="w-full py-14 px-8"
        style={{
          background: "linear-gradient(90deg, #4a36e0 0%, #9f1bbf 100%)",
          color: "#fff",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-5"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
              Affiliated to Savitribai Phule Pune University
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Empowering Education, <span className="text-yellow-300">Enriching Futures</span>
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              Premier institution dedicated to excellence in teacher education. Our college nurtures knowledge, values, and skills to develop future educators who can inspire the next generation.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition shadow-md">
                  Apply for B.Ed 2026
                </button>
              </Link>

              <a
                href="/assets/pdf/prospects.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition shadow-md">
                  Download Prospectus
                </button>
              </a>
            </div>

            
          </motion.div>

          {/* ================= RIGHT IMAGE SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/nac_1.jpeg"
                alt="Jai Ganesh College of Education - B.Ed Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                Campus Overview
              </div>
            </div>

            <p className="mt-4 text-right text-sm text-gray-200">
              <strong>Dr. Sudhakarrao Jadhavar</strong><br />
              Founder, Jadhavar Group of Institutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT INSTITUTION ================= */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/assets/images/hero2.jpg"
              alt="Jai Ganesh College of Education - B.Ed Campus"
              className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              About the Institution
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Jai Ganesh College of Education - B.Ed, established in 2008, is a teacher education institution located at Narhe, Pune, committed to developing competent, compassionate, and innovative educators. The college is affiliated to Savitribai Phule Pune University and recognized by National Council for Teacher Education (NCTE). Our programs are designed to nurture academic excellence, social responsibility, and ethical values among student-teachers.
            </p>
            <p className="text-gray-600">
              The institution provides a stimulating and inclusive learning environment, well-equipped infrastructure, and dedicated faculty to promote holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PLACEMENTS SECTION ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Placements
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto mb-16">
            At Jai Ganesh College of Education - B.Ed, we are committed to shaping confident educators. Our dedicated Training & Placement Cell bridges the gap between teacher education and professional practice, ensuring students are school-ready, curriculum-ready, and competitive-exam-ready.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement1.png"
                  alt="Placement Assistance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                100% Placement Assistance
              </h4>
              <p className="text-gray-600 text-sm">
                Support with internships, reputed schools, educational institutions, and curriculum development roles.
              </p>
            </div>

            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement2.png"
                  alt="Strong Educational Network"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                Strong Educational Network
              </h4>
              <p className="text-gray-600 text-sm">
                Guest lectures by experienced principals, educationists, curriculum designers, and academic advisors.
              </p>
            </div>

            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement3.png"
                  alt="Pre-Placement Training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                Pre-Placement Training
              </h4>
              <p className="text-gray-600 text-sm">
                Classroom management, lesson planning, communication skills, teaching demonstrations, and interview preparation.
              </p>
            </div>

            <div>
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="/assets/images/law-placement4.png"
                  alt="Diverse Educational Sectors"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">
                Diverse Educational Sectors
              </h4>
              <p className="text-gray-600 text-sm">
                Teaching, Curriculum Development, Educational Administration, Counseling, NGOs, and Government Schools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <h2 className="mt-10 text-3xl md:text-4xl font-bold mb-4 text-center">
        Vision & Mission
      </h2>

      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              🎯 Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              The Institute's mission is to support and develop educators who are knowledge able, skilled, and dedicated to creating positive learning environments. We aim to foster student success and contribute to advancing education and society. We strive to cultivate a supportive learning environment that encourages innovation and research through a constructivist curriculum approach.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              🚀 Mission
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-sm mb-2">
The Institute envisions equipping student, teachers with an education that strengthens their intellect and wisdom. We aim to instill social, ethical, and political awareness in our students so that they become informed and responsible citizens of the future. Furthermore, we aspire to develop creative and constructivist teaching approaches aligned with global educational trends.            </p>
            
           
          </div>
        </div>
      </section>

      {/* ================= FACILITIES & INFRASTRUCTURE ================= */}
     {/* ================= FACILITIES & INFRASTRUCTURE ================= */}
<section className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      Facilities & Infrastructure
    </h2>

    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
      We are committed to providing world-class infrastructure that creates the
      right learning environment for future leaders. The campus blends modern
      amenities with a professional atmosphere, ensuring holistic growth for
      every student.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CLASS ROOMS */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-3 text-blue-600">Class Rooms</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Each classroom equipped with LCD projector and internet.</li>
          <li>• Well ventilated classrooms with a capacity of 60 students.</li>
          <li>• Method rooms are available.</li>
        </ul>
      </div>

      {/* LIBRARY */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-3 text-blue-600">Library</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Spacious library hall with large reading room.</li>
          <li>• Total books available: 2363</li>
          <li>• Reference books, curriculum books, encyclopedias, novels</li>
          <li>• National & international journals</li>
          <li>• Newspapers, maps, and other resources available</li>
        </ul>
      </div>

      {/* LAB FACILITIES */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-3 text-blue-600">Lab Facilities</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• All laboratories are well equipped</li>
          <li>• Separate Physics, Chemistry & Biology labs</li>
          <li>• Built-in cupboards and wash basins with water supply</li>
          <li>• Computer lab with 60 PCs and internet facility</li>
        </ul>
      </div>

      {/* AUDITORIUM */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-3 text-blue-600">Auditorium</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Large auditorium with 1500 seating capacity</li>
          <li>• LCD projector and inbuilt stereo system</li>
        </ul>
      </div>

      {/* OTHER FACILITIES */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition md:col-span-2 lg:col-span-2">
        <h3 className="text-xl font-bold mb-3 text-blue-600">
          Other Facilities
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
          <li>• CCTV surveillance across campus infrastructure</li>
          <li>• 100% job placement support from the institution</li>
          <li>• Maharashtra Government scholarships for SC/ST/OBC students</li>
          <li>• Participation in seminars, health programs and social activities</li>
        </ul>
      </div>

    </div>
  </div>
</section>


{/* ================= NAAC ACCREDITATION ================= */}
<section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left - NAAC Certificate Images & Badge */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="w-full space-y-4">
          <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
            <img
              src="/assets/images/nac1.jpeg"
              alt="NAAC Certificate 1"
              className="w-full rounded-lg object-cover"
              style={{ minHeight: "220px", maxHeight: "350px" }}
            />
          </div>
          <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
            <img
              src="/assets/images/nac2.jpeg"
              alt="NAAC Certificate 2"
              className="w-full rounded-lg object-cover"
              style={{ minHeight: "220px", maxHeight: "350px" }}
            />
          </div>
          <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100">
            <img
              src="/assets/images/nac3.jpeg"
              alt="NAAC Certificate 3 - B+ Grade"
              className="w-full rounded-lg object-cover"
              style={{ minHeight: "220px", maxHeight: "350px" }}
            />
          </div>
        </div>
        
        <div className="bg-white border-4 border-blue-600 rounded-full p-8 w-48 h-48 flex flex-col items-center justify-center shadow-lg">
          <div className="text-6xl font-bold text-blue-600">B+</div>
          <p className="text-sm font-semibold text-gray-700 mt-2">NAAC Grade</p>
          <p className="text-xs text-gray-600">Accreditation Score</p>
        </div>
      </motion.div>

      {/* Right - NAAC Details */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            NAAC Accredited Institution
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Jai Ganesh College of Education is proud to be <strong>NAAC Accredited with a B+ Grade</strong>, reflecting our commitment to excellence in teacher education and institutional quality.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Quality Assurance Metrics</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border-l-4 border-blue-600 shadow">
              <p className="text-sm text-gray-600">Academic Performance</p>
              <p className="text-lg font-bold text-blue-600 mt-1">Excellent</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-l-4 border-green-600 shadow">
              <p className="text-sm text-gray-600">Faculty Quality</p>
              <p className="text-lg font-bold text-green-600 mt-1">Highly Qualified</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-l-4 border-purple-600 shadow">
              <p className="text-sm text-gray-600">Infrastructure</p>
              <p className="text-lg font-bold text-purple-600 mt-1">World-class</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl border-l-4 border-orange-600 shadow">
              <p className="text-sm text-gray-600">Research & Innovation</p>
              <p className="text-lg font-bold text-orange-600 mt-1">Progressive</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-md">
          <p className="text-gray-700 leading-relaxed">
            The NAAC accreditation validates our institution's dedication to maintaining high standards in curriculum design, faculty development, student support services, and overall institutional management. Our B+ grade demonstrates our ongoing commitment to quality enhancement and continuous improvement in teacher education.
          </p>
        </div>

        <a
          href="/assets/pdf/5 NAAC Certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all transform hover:scale-105"
        >
          📄 View NAAC Certificate
        </a>
      </motion.div>
    </div>
  </div>
</section>


{/* ================= AWARDS & ACHIEVEMENTS ================= */}


      {/* ================= YOUTUBE VIDEOS ================= */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            College Videos
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Explore our latest events, campus tours, and student experiences on our YouTube channel
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video 1 */}
            <a
              href="https://www.youtube.com/live/MUATbAhXndA?si=MM85Zk5HrD7gSCyp"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <img
                  src="/assets/images/thumbnail.jpg"
                  alt="YouTube Video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>

            {/* Video 2 */}
            <a
              href="https://youtube.com/shorts/RNyRKztY8vw?si=Ru_pioPNCgw9nmTa"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <img
                  src="/assets/images/thumbnail.jpg"
                  alt="YouTube Video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>

            {/* Video 3 */}
            <a
              href="https://youtu.be/VnZ7dgSof6Q?si=O08PRVt3he5jMgdu"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <img
                  src="/assets/images/thumbnail.jpg"
                  alt="YouTube Video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>

            {/* Video 4 */}
            <a
              href="https://www.youtube.com/live/oWS8sV-uiC8?si=Ei7xyun6LGFy7maI"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <img
                  src="/assets/images/thumbnail.jpg"
                  alt="YouTube Video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>

            {/* Video 5 */}
            <a
              href="https://www.youtube.com/live/hXPiCNDAyhk?si=AxPY6LMMyK2YTsO-"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <img
                  src="/assets/images/thumbnail.jpg"
                  alt="YouTube Video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>

            {/* Video 6 */}
            <a
              href="https://youtu.be/JKRKeborGio"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <img
                  src="/assets/images/thumbnail.jpg"
                  alt="YouTube Video"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition flex items-center justify-center">
                <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
          </div>

          <div className="text-center mt-12">
            
          </div>
        </div>
      </section>

      {/* ================= STUDENT TESTIMONIALS ================= */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Student Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600 italic">
                "The faculty and teaching practice sessions helped me gain confidence for real classroom teaching. The guidance at Jadhavar College of Education shaped my career as an educator."
              </p>
              <p className="mt-3 font-semibold">— B.Ed Student</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600 italic">
                "The internship opportunities and practical training at Jai Ganesh College of Education - B.Ed prepared me well for my teaching career. I'm grateful for the holistic development I received here."
              </p>
              <p className="mt-3 font-semibold">— Alumni</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}