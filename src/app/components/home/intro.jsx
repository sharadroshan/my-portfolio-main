import React from "react";

export const Intro = () => {
  return (
    <div className="lg:py-20 py-10">
      <div>
        <h4 className="lg:text-2xl text-medium text-secondary">
          Hello, my name is,
        </h4>
        <h3 className="text-[40px] lg:text-[80px] font-bold text-slate300">
          Anil Prajapati
        </h3>
        <h3
          className="text-[32px] lg:text-[70px] font-bold text-slate500"
          style={{ lineHeight: "1.2" }}
        >
          I'm passionate and experienced FULL STACK DEVELOPER!
        </h3>
        <p className="mt-5 text-justify lg:mt-10 text-slate500 text-xl lg:w-[50%]">
          Hello! My name is Anil, I am a Full Stack Developer with over 8 years
          of experience, skilled in PHP, Laravel, CodeIgniter, NodeJS, React.Js,
          Next.Js, Tailwind CSS, Redux, MySQL, and MongoDB. I have successfully
          developed and maintained high-performance web applications, including
          frontend and backend development. My expertise extends to server
          management, API development, third-party API integrations, and Chrome
          extension development. I also specialize in optimizing applications,
          implementing CI/CD pipelines, and collaborating with cross-functional
          teams to deliver efficient solutions that meet business requirements
          and enhance user experiences.{" "}
          <a href="#" className="text-secondary">
            Synetal Solutions Pvt. Ltd.
          </a>{" "}
        </p>
        <p className="mt-5 text-slate500 text-xl lg:w-[50%]">
          I enjoy learning new skills and implementing them in real life!
        </p>
        <button className="lg:px-8 lg:py-4 px-5 py-1 border border-secondary text-secondary text-lg lg:mt-16 mt-10 rounded">
          Get In Touch
        </button>
      </div>
    </div>
  );
};
