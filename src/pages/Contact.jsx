import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const [success, setSuccess] = useState(false);

  async function onSubmit(data) {
    await new Promise((r) => setTimeout(r, 600));
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 3000);
  }

  return (
    <div className="container-responsive py-12">
      <Helmet>
        <title>Contact — Jay Ganesh College of Education (B.Ed)</title>
        <meta
          name="description"
          content="Contact Jay Ganesh College of Education B.Ed. Get admission information, phone number, email and campus location."
        />
        <link rel="canonical" href="https://www.jgefs.org/contact" />
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-primary text-center mb-10"
      >
        Contact Us
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white border p-6 shadow-lg space-y-4 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-primary">
            Reach Us
          </h2>

          <p className="text-sm">
            📍 <strong>College:</strong> Jai Ganesh College of Education (B.Ed)
          </p>

          <p className="text-sm">
            📍 <strong>Address:</strong>Narhe, Pune
          </p>

          <p className="text-sm">
            📞 <strong>Phone:</strong> +91 89750 54114
          </p>

          <p className="text-sm">
            ✉️ <strong>Email:</strong> jaiganesh_bed@yahoo.com
          </p>

          <p className="text-sm">
            🕒 <strong>Office Hours:</strong> Monday – Saturday (10:00 AM – 5:00 PM)
          </p>

          {/* Map */}
          <div className="mt-4">
            <iframe
              title="College Location"
              src="https://www.google.com/maps?q=Narhe,Pune&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white border p-6 shadow-lg space-y-4 hover:shadow-xl transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-primary">
            Admission Inquiry
          </h2>

          <input
            {...register("name", { required: "Name required" })}
            placeholder="Full Name"
            className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 px-4 py-2"
          />
          {errors.name && (
            <p className="text-sm text-red-600">
              {errors.name.message}
            </p>
          )}

          <input
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email"
              }
            })}
            placeholder="Email"
            className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 px-4 py-2"
          />
          {errors.email && (
            <p className="text-sm text-red-600">
              {errors.email.message}
            </p>
          )}

          <textarea
            {...register("message", { required: "Message required" })}
            placeholder="Write your message about B.Ed admission..."
            className="w-full rounded-lg border-gray-300 focus:border-primary focus:ring-primary focus:ring-1 px-4 py-2 min-h-[120px]"
          />
          {errors.message && (
            <p className="text-sm text-red-600">
              {errors.message.message}
            </p>
          )}

          <div className="flex items-center gap-2 text-sm">
            <input
              {...register("consent", { required: true })}
              type="checkbox"
            />
            <label>
              I agree to be contacted regarding admission details.
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>

          {success && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-600 font-medium mt-2 text-center"
            >
              Thank you! Our admission team will contact you soon.
            </motion.div>
          )}
        </motion.form>

      </div>
    </div>
  );
}