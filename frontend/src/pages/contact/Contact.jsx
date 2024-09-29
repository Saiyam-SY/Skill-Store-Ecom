import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 dark:bg-gray-900 transition-colors px-4">
      <div className="w-full max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-primary text-center">
          Contact Us
        </h2>
        <form className="space-y-6">
          {/* Name Field */}
          <div className="form-control">
            <label htmlFor="name" className="label text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="input input-bordered w-full bg-white dark:bg-gray-800"
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label htmlFor="email" className="label text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-white dark:bg-gray-800"
            />
          </div>

          {/* Message Field */}
          <div className="form-control">
            <label htmlFor="message" className="label text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full bg-white dark:bg-gray-800"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
