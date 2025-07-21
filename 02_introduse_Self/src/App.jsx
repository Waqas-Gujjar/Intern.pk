import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJs,
  faReact,
  faDocker,
  faAws,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faCogs,
  faRobot,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "Python", icon: faPython },
  { name: "Django", icon: faCode },
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "FastAPI", icon: faServer },
  { name: "Tailwind CSS", icon: faCogs },
  { name: "Docker", icon: faDocker },
  { name: "Cloud (AWS, GCP)", icon: faAws },
  { name: "AI Agent", icon: faRobot },
  { name: "REST APIs", icon: faCode },
  { name: "DevOps", icon: faGitAlt },
  { name: "Database Design", icon: faDatabase },
];

const projects = [
  {
    title: "Gemini Clone (React & Gemini API)",
    description:
      "Built a full-featured Gemini exchange clone using React, integrating Gemini's API for real-time data and trading simulation.",
    url: "https://github.com/Waqas-Gujjar/GeminiClone/tree/main/gemini-clone",
  },
  {
    title: "Gmail Clone (React & Firebase)",
    description:
      "Developed a Gmail clone with React and Firebase, featuring email management, real-time updates, and user authentication.",
    url: "https://github.com/Waqas-Gujjar/GmailClone/tree/main/GmailClone",
  },
  {
    title: "Reclone Intern.pk",
    description:
      "Recreated the Intern.pk platform, a comprehensive internship management system for students and companies, built with React and Tailwind CSS.",
    url: "https://github.com/Waqas-Gujjar/Intern.pk/tree/main/01_intern_clone",
  },
];

const IntroductionSection = () => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const skillRefs = useRef([]);
  const paraRef = useRef(null);
  const projectsTitleRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .to({}, { duration: 2 }) // delay for pause
      .fromTo(
        roleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .to({}, { duration: 2 })
      .fromTo(
        skillsTitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }
      );

    skillRefs.current.forEach((el, i) => {
      tl.fromTo(
        el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.15"
      );
    });

    tl.to({}, { duration: 1 })
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .to({}, { duration: 1 })
      .fromTo(
        projectsTitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      );

    projectRefs.current.forEach((el) => {
      tl.fromTo(
        el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 animate-gradient  -z-10"
        style={{ backgroundSize: "400% 400%" }}
      ></div>

      <div className="relative z-10 max-w-5xl w-full p-10  backdrop-blur-lg rounded-3xl shadow-2xl  text-center">
        <h1
          ref={nameRef}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-indigo-300"
        >
          Hi, I'm <span className="text-black">Waqas Younas</span>
        </h1>

        <p
          ref={roleRef}
          className="text-xl md:text-3xl mb-10 font-semibold text-gray-300"
        >
          A passionate{" "}
          <span className="text-teal-400">Full-Stack Developer</span> crafting
          modern web experiences.
        </p>

        <h2
          ref={skillsTitleRef}
          className="text-3xl font-semibold mb-6 text-black"
        >
          🛠️ Technologies I Work With
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-white text-base justify-center">
          {skills.map((skill, idx) => (
            <li
              key={idx}
              ref={(el) => (skillRefs.current[idx] = el)}
              className="flex items-center gap-4 justify-center bg-white/10 hover:bg-pink-600/30 transition-transform duration-300 rounded-xl p-4 cursor-default select-none backdrop-blur-sm border border-white/20"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className="text-green-400 text-2xl"
              />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>

        <div
          ref={paraRef}
          className="mt-10 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          <p className="mb-4">
            I specialize in building scalable and high-performing web applications
            using modern tools and best practices.
          </p>
          <p>
            I love solving real-world problems with code, learning new
            technologies, and contributing to impactful projects that make a
            difference.
          </p>
        </div>

        <h2
          ref={projectsTitleRef}
          className="mt-16 text-3xl font-semibold mb-8 text-black"
        >
          🚀 Some Projects I've Worked On
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (projectRefs.current[idx] = el)}
              className="block p-6 rounded-2xl bg-white/10 hover:bg-pink-600/40 transition-shadow shadow-lg hover:shadow-pink-500/70 border border-white/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-300">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <span className="mt-3 inline-block text-sm text-pink-400 underline">
                View on GitHub
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
