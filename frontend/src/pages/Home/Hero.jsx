import React from "react";
import banner from "../../assets/banner.png";

function Hero() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Responsive image */}
          <img
            src={banner}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
            alt="Banner"
          />
          <div>
            <p className="text-3xl font-bold">Hello, Welcome to</p>
            <h1 className="text-7xl font-bold text-primary">Skill Store</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Illo, dolor? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Fugiat?
            </p>

            <label className="input input-bordered w-96 flex items-center mb-4 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;