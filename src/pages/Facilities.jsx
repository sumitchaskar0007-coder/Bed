import React from "react";
import {
  Monitor,
  Library,
  FlaskConical,
  Mic,
  Building,
  Wifi,
  Shield,
  Bus,
  Coffee,
  Dumbbell,
  Award,
  Percent
} from "lucide-react";

export default function Facilities() {

  const facilities = [
    {
      title: "CLASS ROOMS",
      icon: <Monitor size={30} />,
      points: [
        "Each classroom equipped with LCD projector and internet.",
        "Well ventilated classrooms with capacity of 60 students.",
        "Modern seating arrangement.",
        "Method rooms available for practical teaching.",
        "Spacious environment for effective learning."
      ]
    },
    {
      title: "LIBRARY",
      icon: <Library size={30} />,
      points: [
        "Very spacious library hall with large reading room.",
        "Library contains 2363+ books.",
        "Reference books and curriculum books available.",
        "Encyclopedia, textbooks, and novels.",
        "National and International journals.",
        "Newspapers and educational maps available."
      ]
    },
    {
      title: "LAB FACILITIES",
      icon: <FlaskConical size={30} />,
      points: [
        "All labs are well equipped.",
        "Separate Physics, Chemistry and Biology labs.",
        "Built-in cupboards and wash basins.",
        "Full time water supply for experiments.",
        "Computer lab with 60 PCs.",
        "Internet facility available."
      ]
    },
    {
      title: "AUDITORIUM",
      icon: <Mic size={30} />,
      points: [
        "Big auditorium with 1500 seating capacity.",
        "LCD projector installed.",
        "Inbuilt stereo sound system.",
        "Used for seminars and workshops.",
        "Suitable for cultural programs."
      ]
    },
    {
      title: "SECURITY SYSTEM",
      icon: <Shield size={30} />,
      points: [
        "CCTV cameras installed in campus.",
        "24/7 security monitoring.",
        "Safe environment for students.",
        "Fire safety equipment available."
      ]
    },
    {
      title: "WI-FI CAMPUS",
      icon: <Wifi size={30} />,
      points: [
        "High speed internet across campus.",
        "Wi-Fi enabled classrooms.",
        "Online research access.",
        "Supports digital learning."
      ]
    },
    {
      title: "TRANSPORTATION",
      icon: <Bus size={30} />,
      points: [
        "College bus facility available.",
        "Safe transportation for students.",
        "Multiple pickup routes.",
        "Affordable travel charges."
      ]
    },
    {
      title: "CANTEEN",
      icon: <Coffee size={30} />,
      points: [
        "Hygienic food preparation.",
        "Nutritious snacks and meals.",
        "Affordable rates for students.",
        "Clean drinking water facility."
      ]
    },
    {
      title: "SPORTS FACILITIES",
      icon: <Dumbbell size={30} />,
      points: [
        "Outdoor playground available.",
        "Indoor sports activities.",
        "Sports equipment available.",
        "Annual sports competitions."
      ]
    },
    {
      title: "PLACEMENT SUPPORT",
      icon: <Award size={30} />,
      points: [
        "100% placement assistance.",
        "Career guidance sessions.",
        "Interview preparation workshops.",
        "Resume building guidance."
      ]
    },
    {
      title: "SCHOLARSHIP SUPPORT",
      icon: <Percent size={30} />,
      points: [
        "Maharashtra Government scholarships.",
        "SC/ST/OBC scholarship facility.",
        "Financial assistance guidance.",
        "MahaDBT portal help."
      ]
    },
    {
      title: "OTHER FACILITIES",
      icon: <Building size={30} />,
      points: [
        "Participation in seminars.",
        "Health awareness programs.",
        "Social activities and community outreach.",
        "Personality development workshops."
      ]
    }
  ];

  return (
    <section className="bg-gray-50">

      {/* HERO SECTION */}

      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-6">

          <h1 className="text-4xl font-bold mb-4">
            Facilities & Infrastructure
          </h1>

          <p className="text-lg text-gray-200">
            Jay Ganesh College of Education provides modern facilities
            to support academic excellence and holistic development.
          </p>

        </div>
      </div>

      {/* INTRO SECTION */}

      <div className="max-w-6xl mx-auto py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Campus Facilities
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Our college campus is equipped with modern infrastructure
          to provide students with a comfortable and productive
          learning environment. The facilities include smart
          classrooms, laboratories, library, sports facilities,
          and various student support services.
        </p>

      </div>

      {/* FACILITIES GRID */}

      <div className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facilities.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >

              <div className="flex items-center gap-3 mb-4 text-blue-700">

                {item.icon}

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

              </div>

              <ul className="list-disc ml-5 space-y-2 text-gray-600 text-sm">

                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}