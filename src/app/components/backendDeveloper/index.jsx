import React from "react";
import Image from "next/image";
import Image1 from "./Assets/ERP_Software_for_Hospital.png";
import Image2 from "./Assets/Patient_Referral_System.png";
import Image3 from "./Assets/Tutora.png";
import Image4 from "./Assets/Option_For_It.png";
import Image5 from "./Assets/Govt._Polytechnic_College.png";
import Image6 from "./Assets/Insurance4Life.png";
import Image7 from "./Assets/CeeVeeElite.png";
import Image8 from "./Assets/APARK_IT_Solutions.png";
import Image9 from "./Assets/Tasty_Kitchen_Events_Website.png";
import Image10 from "./Assets/Insurance_Company_Software.png";
import Image11 from "./Assets/Amanco_Retailer.png";
import Image12 from "./Assets/Amanco_Retailer_Dashboard.png";
import Image13 from "./Assets/battleroof.png";
import Image14 from "./Assets/GPW.png";
import Image15 from "./Assets/Tutora_Dashboard.png";
import Image16 from "./Assets/E-commerce_website_with_forced_matrix.png";

function Index() {
  return (
    <div className="text-center mt-5">
      <div className="mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <ProjectItem src={Image1} title="ERP Software for Hospital" />
          <ProjectItem src={Image2} title="Patient Referral System" />
          <ProjectItem src={Image3} title="Tutora" />
          <ProjectItem src={Image4} title="Option For It" />
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <ProjectItem src={Image5} title="Govt. Polytechnic College" />
          <ProjectItem src={Image6} title="Insurance4Life" />
          <ProjectItem src={Image7} title="CeeVeeElite" />
          <ProjectItem src={Image8} title="APARK IT Solutions" />
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <ProjectItem src={Image9} title="Tasty Kitchen Events Website" />
          <ProjectItem src={Image10} title="Insurance Company Software" />
          <ProjectItem src={Image11} title="Amanco Retailer" />
          <ProjectItem src={Image12} title="Amanco Retailer Dashboard" />
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <ProjectItem src={Image13} title="Battleroof" />
          <ProjectItem src={Image14} title="GPW" />
          <ProjectItem src={Image15} title="Tutora Dashboard" />
          <ProjectItem src={Image16} title="Tutora Dashboard" />
        </div>
      </div>
    </div>
  );
}

const ProjectItem = ({ src, title, isFullWidth, isHeight = false }) => (
  <div className={`border border-secondary ${isFullWidth ? "lg:col-span-1" : ""}`}>
    <div className="relative group">
      <Image
        src={src}
        alt={title}
        width={isFullWidth ? 400 : 250}
        className="w-full h-96 object-cover transition-transform duration-300"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
    </div>
    <div className="bg-secondary py-2">
      <h4 className="font-medium text-md text-navy500">{title}</h4>
    </div>
  </div>
);

export default Index;
