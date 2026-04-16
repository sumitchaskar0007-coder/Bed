import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the duration of the 3 Years LL.B program?",
      a: "The LL.B program is of three years duration divided into six semesters as per Bar Council of India (BCI) norms."
    },
    {
      q: "Who is eligible to apply for the 3 Years LL.B course?",
      a: "Graduates from any discipline with minimum 45% marks (40% for reserved categories) are eligible."
    },
    {
      q: "Is the LL.B degree approved by the Bar Council of India?",
      a: "Yes, the 3 Years LL.B program is fully approved by the Bar Council of India (BCI)."
    },
    {
      q: "What is the admission process?",
      a: "Admission is based on merit, academic performance, and document verification as per university guidelines."
    },
    {
      q: "Does the college provide internship opportunities?",
      a: "Yes, students are guided for internships with advocates, law firms, courts, NGOs, and legal aid centers."
    },
    {
      q: "Are moot court and practical training provided?",
      a: "Regular moot courts, drafting exercises, legal aid activities, and court visits are conducted."
    },
    {
      q: "What career opportunities are available after LL.B?",
      a: "Graduates can pursue advocacy, corporate law, judiciary, academia, or higher studies like LL.M."
    },
    {
      q: "Is placement assistance available?",
      a: "Yes, the college provides placement guidance and career counseling."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Common questions about admissions, academics, and career opportunities
            at Jadhavar College of Law.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {index + 1}. {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-blue-700" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-700" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 px-4 pb-4" : "max-h-0 px-4"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
