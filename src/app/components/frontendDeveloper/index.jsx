"use client";
import React from "react";

function index() {
  return (
    <div className="  text-black ">
      <div className=" text-black">
        <div className="text-center  mt-5">
          <div className="py-4 px-5 bg-navy400 text-center text-white text-lg font-medium border rounded-lg">
            <h2>Bigul RM Dashboard & DKYC ( React JS & Bootstrap )</h2>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <ProjectItem
                src="https://drive.google.com/file/d/1AHsR8N6-SukOFIq4OxmQ_W5Xvp1vdU8c/preview"
                title="User Application"
              />
              <ProjectItem
                src="https://drive.google.com/file/d/1bfdkFYJCgQo02JaxKIDRXxfaLIhtJrwu/preview"
                title="Mobile & Email Verification"
              />
              <ProjectItem
                src="https://drive.google.com/file/d/1d6CBL1AkwpFf6Yg4I8NgIHurLGA1icPm/preview"
                title="Bank Account Verification"
              />
              <ProjectItem
                src="https://drive.google.com/file/d/1CYpu8BVBO7UaBvFyyg3CZz0mD4dDuvPo/preview"
                title="DKYC - Selfie & Sign"
              />
            </div>
          </div>
        </div>

        <div className="text-center  mt-10">
          <div className="py-4 px-5 bg-navy400 text-center text-white text-lg font-medium border rounded-lg">
            <h2>Unlisted Assets ( React JS & Material UI )</h2>
          </div>
          <div className=" mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
              <ProjectItem
                src="https://drive.google.com/file/d/11QLhY59n_wfOt5ZReYdPv30YqqpKK1gM/preview"
                title="Unlisted Assets (Company Matches)"
                isFullWidth={true}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <div className="py-4 px-5 bg-navy400 text-center text-white text-lg font-medium border rounded-lg">
            <h2>Copper Factory Web App ( Next JS & Tailwind CSS )</h2>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <ProjectItem
                src="https://drive.google.com/file/d/1FuPmrCSQUsOPurzfOo3iLWPdlfGa210L/preview"
                title="Onboarding & Login"
              />
              <ProjectItem
                src="https://drive.google.com/file/d/19r6M94o_bFSnfG5R2i2ILNvbq6jvnZvO/preview"
                title="All Screens"
              />
              <ProjectItem
                src="https://drive.google.com/file/d/1rM0CIwrbzOQahx5yGL0y7icMeAqK-NGf/preview"
                title="Create GRN"
              />
              <ProjectItem
                src="https://drive.google.com/file/d/1I65ESFCAq3-0aXs8LIUB06dQHhHmqeRu/preview"
                title="GRN Information"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectItem = ({ src, title, isFullWidth = false }) => (
  <div
    className={`border border-secondary ${isFullWidth ? "lg:col-span-1" : ""}`}
  >
    <iframe
      src={src}
      width={isFullWidth ? "400" : "250"}
      height="400"
      className="w-full"
      allow="autoplay"
    ></iframe>
    <div className="bg-secondary py-2">
      <h4 className="font-medium text-md text-navy500">{title}</h4>
    </div>
  </div>
);

export default index;
