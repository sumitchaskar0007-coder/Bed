import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        
        {/* ---------- COL 1: COLLEGE INFO ---------- */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            
            {/* LOGO */}
            <div className="bg-white p-2 rounded-lg shadow-md">
              <img
                src="/assets/images/logo/logo1.png"
                alt="Jay Ganesh College Logo"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <span className="font-semibold text-white text-sm leading-tight">
              Jay Ganesh College Of Education -B.Ed
            </span>
          </div>

          {/* UPDATED ADDRESS */}
          <p className="text-sm flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-primary" />
            Narhe, Pune
          </p>

          {/* UPDATED PHONE */}
          <p className="text-sm flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-primary" />
            +91 89750 54114
          </p>

          {/* UPDATED EMAIL */}
          <p className="text-sm flex items-center gap-2 mt-2">
            <FaEnvelope className="text-primary" />
            jaiganesh_bed@yahoo.com
          </p>
        </div>

        {/* ---------- COL 2: QUICK LINKS ---------- */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/cells" className="hover:text-primary transition">
                Cells & Centers
              </Link>
            </li>
            <li>
              <Link to="/facilities" className="hover:text-primary transition">
                Facilities
              </Link>
            </li>
            <li>
              <Link to="/announcement" className="hover:text-primary transition">
                Announcements
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary transition">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- COL 3: ACADEMICS ---------- */}
        <div>
          <h4 className="text-white font-semibold mb-4">Academics</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/admissions" className="hover:text-primary transition">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-primary transition">
                Academic Programs
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-primary transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- COL 4: SOCIAL ---------- */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Connected</h4>

          <div className="flex gap-3 mb-4">
            <a
              href="https://www.facebook.com/share/1ACzHiACYQ/"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/jaiganesh_college_of_education?igsh=MTFmbDM5dGR6MTJncw=="
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

           

            <a
              href="https://www.youtube.com/@jadhavargroupofinstitutespune"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Subscribe */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <p>
            © {new Date().getFullYear()} Trijja Media & Works, Pune. All rights reserved.
          </p>
          <p>
            Designed & Developed by{" "}
            <span className="text-primary font-semibold">
              Trijja Media & Works, Pune
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}