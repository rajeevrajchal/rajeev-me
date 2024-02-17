"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Home = () => {
  return (
    <main className="container mx-auto px-4 md:px-auto">
      <div className="w-full h-screen grid place-content-center gap-4">
        <p className="flex flex-col md:flex-row items-center gap-2 text-3xl">
          Hello I am, <p className="font-bold  text-4xl">Rajeev Rajchal</p>
        </p>
        <p className="text-sm text-justify">
          Hello! I'm a skilled front-end developer specializing in building
          modern and responsive web applications. With expertise in React,
          JavaScript, TypeScript, and HTML/CSS, I'm passionate about creating
          user-friendly interfaces and delivering exceptional user experiences.
        </p>
        <ul>
          <li>Key Skills:</li>
          <li>
            🎨 HTML/CSS: Experience in implementing pixel-perfect layouts and
            styling web applications using HTML and CSS.
          </li>
          <li>
            💡 JavaScript & TypeScript: Strong understanding of JavaScript and
            TypeScript to write clean and maintainable code.
          </li>
          <li>
            🌐 React: Proficient in developing interactive UI components and
            building efficient React applications.
          </li>
          <li>
            🚀 Frontend Frameworks: Familiarity with frontend frameworks such as
            React, Next.js, and Redux.
          </li>
          <li>
            📱 Responsive Design: Knowledge of responsive design principles to
            ensure optimal user experiences across devices.
          </li>
          <li>
            🔧 Testing & Debugging: Proficient in testing and debugging frontend
            applications for optimal performance.
          </li>
          <li>
            🔄 Version Control: Experience with version control systems like Git
            to collaborate effectively with team members.
          </li>
        </ul>
        <div className="flex flex-col gap-2">
          <p>Let's Connect</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/rajeevrajchal/"
              target="_blank"
            >
              <FaLinkedin className="text-[#2566C2]" size={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rajeevrajchal/"
              target="_blank"
            >
              <FaGithub size={30} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Get a deal ?</p>
          <div>
            <Link
              href="https://www.upwork.com/freelancers/~01f0978587bed2e79c"
              target="_blank"
            >
              <SiUpwork className="text-[#35A800]" size={32} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
