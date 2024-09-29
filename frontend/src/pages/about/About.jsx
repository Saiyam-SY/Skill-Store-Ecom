import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image section */}
          <div className="lg:w-1/2">
            <img
              src="A_professional_'About_Us'_section_featuring_a_mode.png" // Use a proper path for your image
              alt="Team Collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Content section */}
          <div className="lg:w-1/2 text-gray-800 dark:text-gray-300">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              About Skill Store
            </h2>
            <p className="text-lg mb-4">
              At Skill Store, we believe in empowering individuals through
              high-quality learning experiences. Our platform offers a wide
              variety of courses that enable people to develop skills, gain
              knowledge, and achieve their career goals.
            </p>
            <p className="text-lg mb-4">
              With a dedicated team, we are committed to providing a seamless
              and interactive learning environment, ensuring that both learners
              and instructors find value in our platform.
            </p>
            <p className="text-lg">
              Whether you're looking to advance in your career or explore a new
              field, Skill Store has something for everyone. Join us and start
              your learning journey today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
