import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const criteria = [
  {
    title: "Curricular Aspects",
    desc: "Curriculum planning, implementation, and academic flexibility."
  },
  {
    title: "Teaching Learning & Evaluation",
    desc: "Student admission process, teaching methods, and evaluation system."
  },
  {
    title: "Research, Innovations & Extension",
    desc: "Research activities, publications, and extension programs."
  },
  {
    title: "Infrastructure & Learning Resources",
    desc: "Classrooms, laboratories, library, and ICT facilities."
  },
  {
    title: "Student Support & Progression",
    desc: "Scholarships, career guidance, placements, and student welfare."
  },
  {
    title: "Governance, Leadership & Management",
    desc: "Institutional vision, leadership, and administrative system."
  },
  {
    title: "Institutional Values & Best Practices",
    desc: "Environmental awareness, social responsibility, and best practices."
  }
];

const documents = [
  { name: "NAAC Certificate", link: "/assets/pdf/5 NAAC Certificate.pdf" },
  { name: "Institutional Grade Sheet", link: "/assets/pdf/5 NAAC Institutional_Grade_Sheet.pdf" },
  { name: "NAAC Report", link: "/assets/pdf/naac.pdf" }
];

const NAAC = () => {
  return (
    <>
      <Helmet>
        <title>NAAC Accreditation B+ | Jai Ganesh College of Education - B.Ed Pune</title>
        <meta
          name="description"
          content="NAAC Accredited with B+ Grade - Jai Ganesh College of Education. Explore our accreditation criteria, achievements, and quality assurance metrics."
        />
        <meta
          name="keywords"
          content="NAAC B+ Grade, NAAC Accreditation, College Accreditation Pune, Quality Education, B.Ed Accreditation"
        />
      </Helmet>

      <section className="w-full bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header with Grade Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-white border-4 border-blue-600 rounded-full p-6 mb-8 shadow-lg">
              <div className="text-7xl font-bold text-blue-600">B+</div>
              <p className="text-lg font-semibold text-gray-700 mt-2">NAAC Grade</p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              NAAC Accreditation
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              Jai Ganesh College of Education - B.Ed
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Proud Institution Accredited with B+ Grade by the National Assessment and Accreditation Council
            </p>
          </motion.div>

          {/* NAAC Certificate Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              NAAC Certificates
            </h2>
            <div className="space-y-10 max-w-5xl mx-auto">
              {/* Certificate 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition border border-gray-200"
              >
                <img
                  src="/assets/images/nac1.jpeg"
                  alt="NAAC Certificate 1"
                  className="w-full rounded-xl object-cover"
                  style={{ maxHeight: "600px", minHeight: "300px" }}
                />
              </motion.div>

              {/* Certificate 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition border border-gray-200"
              >
                <img
                  src="/assets/images/nac2.jpeg"
                  alt="NAAC Certificate 2"
                  className="w-full rounded-xl object-cover"
                  style={{ maxHeight: "600px", minHeight: "300px" }}
                />
              </motion.div>

              {/* Certificate 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition border border-gray-200"
              >
                <img
                  src="/assets/images/nac3.jpeg"
                  alt="NAAC Certificate 3 - B+ Grade"
                  className="w-full rounded-xl object-cover"
                  style={{ maxHeight: "600px", minHeight: "300px" }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* About NAAC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About NAAC
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              The National Assessment and Accreditation Council (NAAC) is an autonomous body established by the University Grants Commission (UGC). NAAC assesses and accredits higher education institutions to ensure quality education through evaluation of curriculum, teaching-learning process, infrastructure, research activities, governance, and institutional values.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Jai Ganesh College of Education has achieved the prestigious <strong>B+ Grade</strong> in NAAC accreditation, demonstrating our commitment to excellence in teacher education and institutional quality. This accreditation validates our dedication to maintaining high standards across all operational areas.
            </p>
          </motion.div>

          {/* Quality Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              Quality Assurance Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
                <p className="text-sm text-gray-600 mb-2">Academic Performance</p>
                <p className="text-2xl font-bold text-blue-600">Excellent</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-green-600">
                <p className="text-sm text-gray-600 mb-2">Faculty Quality</p>
                <p className="text-2xl font-bold text-green-600">Highly Qualified</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-purple-600">
                <p className="text-sm text-gray-600 mb-2">Infrastructure</p>
                <p className="text-2xl font-bold text-purple-600">World-class</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-orange-600">
                <p className="text-sm text-gray-600 mb-2">Research & Innovation</p>
                <p className="text-2xl font-bold text-orange-600">Progressive</p>
              </div>
            </div>
          </motion.div>

          {/* NAAC Criteria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
              NAAC Assessment Criteria
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {criteria.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-l-4 border-blue-600"
                >
                  <div className="text-blue-600 text-2xl font-bold mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NAAC Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-10 text-gray-900">
              NAAC Documents & Resources
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <motion.a
                  key={index}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-6 border-2 border-blue-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition"
                >
                  <svg className="w-12 h-12 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-800 font-semibold text-center">
                    {doc.name}
                  </span>
                  <span className="text-xs text-gray-500 mt-2">Download PDF</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* NAAC Committee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              NAAC Steering Committee
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">

                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left">Sr. No</th>
                    <th className="p-4 text-left">Designation</th>
                    <th className="p-4 text-left">Role in Committee</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-blue-50 transition">
                    <td className="p-4">1</td>
                    <td className="p-4">Principal</td>
                    <td className="p-4 font-semibold">Chairperson</td>
                  </tr>

                  <tr className="border-b hover:bg-blue-50 transition">
                    <td className="p-4">2</td>
                    <td className="p-4">IQAC Coordinator</td>
                    <td className="p-4 font-semibold">Member & Coordinator</td>
                  </tr>

                  <tr className="border-b hover:bg-blue-50 transition">
                    <td className="p-4">3</td>
                    <td className="p-4">Faculty Members</td>
                    <td className="p-4 font-semibold">Members</td>
                  </tr>

                  <tr className="hover:bg-blue-50 transition">
                    <td className="p-4">4</td>
                    <td className="p-4">Non-teaching Staff</td>
                    <td className="p-4 font-semibold">Member</td>
                  </tr>
                </tbody>

              </table>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default NAAC;