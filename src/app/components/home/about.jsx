import React from "react";
import { SectionTitle } from "../sectionTitle";
import Image from "next/image";
import Picure from '../../../assets/anil.jpeg'

export const About = () => {
  return (
    <div className="lg:py-20 py-10" id="aboutme">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <SectionTitle number="01" title="About Me" />
          <div className="text-slate500 text-xl">
            <p className="mt-10 text-justify">
              Hello! My name is{" "}
              <span className="font-semibold">Anil Prajapati</span>, a dedicated
              Full Stack Developer with over 8 year of professional
              experience. I completed my Polytechnic Diploma in Computer Science
              Engineering (CSE) in 2012, followed by a Bachelor's degree (BE) in
              CSE in 2015.
            </p>
            <p className="mt-5 text-justify">
              My expertise lies in building responsive and user-friendly web
              applications using technologies like{" "}
              <span className="text-secondary">HTML</span>,{" "}
              <span className="text-secondary">CSS</span>,{" "}
              <span className="text-secondary">Tailwind CSS</span>, and{" "}
              <span className="text-secondary">JavaScript/jQuery</span> to
              create dynamic user interfaces.
            </p>
            <p className="mt-5 text-justify">
              I'm also well-versed in{" "}
              <span className="text-secondary">PHP</span>,{" "}
              <span className="text-secondary">Laravel</span>,{" "}
              <span className="text-secondary">CodeIgniter</span>,{" "}
              <span className="text-secondary">NodeJs</span>,{" "}
              <span className="text-secondary">MySQL</span>,{" "}
              <span className="text-secondary">MongoDB</span>, and{" "}
              <span className="text-secondary">Bootstrap</span>, allowing me to
              develop high-performance applications.
            </p>
            <p className="mt-5 text-justify">
              I am passionate about modern web development and have mastered
              frameworks like <span className="text-secondary">React JS</span>{" "}
              and <span className="text-secondary">Next JS</span>, which enable
              me to deliver exceptional digital experiences. In addition to
              these skills, I have good knowledge of{" "}
              <span className="text-secondary">MS Office tools</span> such as
              Word, Advanced Excel, and PowerPoint.
            </p>
            <p className="mt-5 text-justify">
              <strong className="text-secondary">Work Experience:</strong>
            </p>
            <p className="mt-5 text-justify">
              <span className="font-semibold">Full Stack Developer</span> |
              Synetal Solutions Pvt. Ltd. | April 2019 – Present
            </p>
            <ul className="list-disc ml-5 mt-2 text-justify">
              <li>
                Developing and maintaining web applications using the Laravel
                framework, adhering to best practices and coding standards.
              </li>
              <li>
                Collaborating with cross-functional teams to translate business
                requirements into technical solutions.
              </li>
              <li>
                Implementing custom features like user authentication, API
                integrations, and database management to enhance user
                experience.
              </li>
              <li>
                Optimizing performance through code refactoring and database
                query optimization, resulting in improved speed and efficiency.
              </li>
            </ul>
            <p className="mt-5 text-justify">
              <span className="font-semibold text-secondary">
                Software Developer
              </span>{" "}
              | Synetal Solutions Pvt. Ltd. | April 2019 - October 2024
            </p>
          </div>
        </div>

        <div>
        <div className="flex items-center lg:justify-end ml-10">
            <Image
              className="transition-all duration-300 rounded-3xl rounded-tr-[150px] cursor-pointer filter grayscale hover:grayscale-0 hover:rounded-tr-[170px]"
              src={Picure} // This is the path from the public folder
              alt="Anil Prajapati"
              objectFit="cover" // Ensures the image is displayed correctly
            />
          </div>
        </div>
      </div>
    </div>
  );
};
