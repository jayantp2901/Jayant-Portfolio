import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Thank you! Your message has been sent.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("❌ Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-10">
          📬 Get in Touch
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <div className="flex flex-col">
            <label className="text-gray-800 dark:text-gray-200 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-800 dark:text-gray-200 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-800 dark:text-gray-200 font-medium mb-2">
              Your Message
            </label>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-bold py-3 px-6 rounded-lg shadow-md w-fit self-center"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
