import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-500">Home &gt; <span className="text-black font-semibold">Contact</span></p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            {submitted && (
              <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
                Message sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="border p-2 rounded w-full"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="border p-2 rounded w-full"
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border p-2 rounded w-full"
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Write Your Message"
                className="border p-2 rounded w-full h-24"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-semibold">Clothing Store</h3>
            <p>Germany – 785 S 5th Street, Office 478-9</p>
            <p>Green Mall Berlin, DE 81566</p>
            <p>Phone: +1 123 547 818</p>
            <p>Email: contact@example.com</p>
            <h4 className="mt-2 font-semibold">Opening Hours</h4>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Weekend: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
