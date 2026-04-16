import React from "react";
import { Helmet } from "react-helmet-async";

export default function StudentActivities() {
  return (
    <>
      <Helmet>
        <title>Student Associations & Activities | Jay Ganesh College</title>
      </Helmet>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">
              Student Associations & Activities
            </h1>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Real learning happens outside the classroom. The college provides
              students with opportunities to develop knowledge, creativity and
              leadership through various academic associations, clubs and activities.
            </p>
          </div>

          {/* Student Associations */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Student Associations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Counseling Association</h3>
              <p className="text-gray-600 text-sm">
                Organizes lectures, workshops, field visits and interactive
                sessions focused on counseling skills and student development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Geography Association</h3>
              <p className="text-gray-600 text-sm">
                Started in 1988 to provide practical exposure through nature
                treks, field visits, debates, poster competitions and
                educational film shows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">English Literary Association</h3>
              <p className="text-gray-600 text-sm">
                Promotes love for English language and literature through
                poetry recitations, literature workshops, book circles and
                appreciation sessions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Marathi Vangmay Mandal</h3>
              <p className="text-gray-600 text-sm">
                Celebrates Marathi literature through drama, music and cultural
                programs inspired by writers such as Kusumagraj, Vinda Karandikar
                and Sane Guruji.
              </p>
            </div>

          </div>

          {/* Science Club */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Science Club
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Physics Association</h3>
              <p className="text-gray-600 text-sm">
                Encourages students to explore physics through exhibitions,
                experiments and annual science festivals showcasing theory
                and practical applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Chemistry Association</h3>
              <p className="text-gray-600 text-sm">
                Promotes analytical thinking and practical applications of
                chemistry through lectures and participation in aptitude tests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Science Association</h3>
              <p className="text-gray-600 text-sm">
                Promotes interdisciplinary learning across biological, chemical,
                physical and mathematical sciences through talks and career programs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Mathematics Association</h3>
              <p className="text-gray-600 text-sm">
                Activities include celebrating Srinivasa Ramanujan's birth
                anniversary, organizing origami workshops and making mathematics
                fun for students.
              </p>
            </div>

          </div>

          {/* Sports */}
          <div className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-3">Sports</h2>

            <p className="text-gray-600">
              The college encourages students to participate in sports and
              physical activities. Professional coaches train students in
              different sports and sports kits and facilities are provided
              to support talented athletes.
            </p>
          </div>

          {/* Cultural Activities */}
          <div className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-3">Cultural Activities</h2>

            <p className="text-gray-600">
              The college organizes talent search programs to identify hidden
              talents in theatre, dance, music, literary arts and fine arts.
              Students participate in festivals such as Malhar, Mood Indigo,
              Umang and the college’s annual festival "Jaloosh".
            </p>
          </div>

          {/* PIP */}
          <div className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              Performance Improvement Programme (PIP)
            </h2>

            <ul className="list-disc ml-6 text-gray-600">
              <li>Revision of important topics</li>
              <li>Extra coaching for difficult subjects</li>
              <li>Three mock examinations for board exam preparation</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-3">Soft Skills</h2>

            <p className="text-gray-600">
              A 16-hour soft skills training program is conducted throughout
              the academic year to improve communication skills, personality
              development and student confidence.
            </p>
          </div>

          {/* Career Guidance */}
          <div className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-3">Career Guidance</h2>

            <p className="text-gray-600">
              The Career Guidance Cell organizes career fairs, guest lectures
              and counseling sessions to guide students towards the right
              career opportunities and professional paths.
            </p>
          </div>

          {/* Counseling Centre */}
          <div className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-3">Counseling Centre</h2>

            <p className="text-gray-600">
              The counseling center provides psychological support and
              guidance to students. Professional counselors conduct aptitude,
              intelligence and personality tests and help students deal with
              stress and academic challenges.
            </p>
          </div>

          {/* Students Council */}
          <div className="bg-white shadow rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-3">Students’ Council</h2>

            <p className="text-gray-600">
              The Students’ Council consists of the Principal, faculty members
              and student representatives. It supervises student associations,
              organizes activities and represents student welfare and
              grievances to the college authorities.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}