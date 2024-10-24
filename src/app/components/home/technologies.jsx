import React from "react";
import { SectionTitle } from "../sectionTitle";

export const Technologies = () => {
  return (
    <>
      <div className="text-center mt-16">
        <SectionTitle number="02" title="Technologies I Used" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6 text-slate500">
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-navy500 dark:border-navy400 ">
          {/* Card Heading */}
          <h5 className="mb-4 text-2xl font-medium text-secondary">
            Frontend Developer
          </h5>

          <ul className="list-disc pl-5 space-y-2">
            {/* Languages & Frameworks */}
            <li className="text-lg font-medium">Languages & Frameworks:</li>
            <ul className=" space-y-2">
              <li className="flex items-center">
                <span className="mr-2 ">🔹</span> HTML5
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> CSS
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> JavaScript
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> ReactJS
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> React Native
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> Next JS
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> Material UI
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> Bootstrap
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> AWS Amplify
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> Firebase
              </li>
            </ul>

            {/* Design Tools */}
            <li className="text-lg font-semibold mt-4">Design Tools:</li>
            <ul className=" space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🔹</span> Canva (Design)
              </li>
            </ul>

            {/* CMS Expertise */}
            <li className="text-lg font-semibold mt-4">CMS Expertise:</li>
            <ul className=" space-y-2">
              <li className="flex items-center">
                <span className="mr-2">🔹</span> WordPress
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> Shopify
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> Wix
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> ClickFunnels
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span> Squarespace
              </li>
            </ul>
          </ul>
        </div>

        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-navy500 dark:border-navy400">
          {/* Card Heading */}
          <h5 className="mb-4 text-2xl font-medium text-secondary">
            Backend Development
          </h5>

          <ul className="list-disc pl-5 space-y-2">
            {/* Languages & Frameworks */}
            <li className="text-lg font-medium">Languages & Frameworks:</li>
            <ul className="list-inside space-y-1">
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> PHP
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> Laravel
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> CodeIgniter
                Framework
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> NodeJS
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> Express
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> Python
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> Django
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> ASP.NET Core MVC
                (Learning)
              </li>
            </ul>
            
            {/* Database Management */}
            <li className="text-lg font-medium mt-4">Database Management:</li>
            <ul className="list-inside space-y-1">
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> MySQL
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> MongoDB
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> PDO (PHP Data
                Objects)
              </li>
            </ul>

            {/* Payment Gateway Integration */}
            <li className="text-lg font-medium mt-4">
              Payment Gateway Integration:
            </li>
            <ul className="list-inside space-y-1">
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> Razorpay
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> Paypal
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> Authorize.net
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> Stripe
              </li>
            </ul>

            {/* Software Development */}
            <li className="text-lg font-medium mt-4">Software Development:</li>
            <ul className="list-inside space-y-1">
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> ERP, CRM
                Software
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> POS System
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">🔹</span> SAAS-Based
                Modules
              </li>
            </ul>
          </ul>
        </div>
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-navy500 dark:border-navy400">
          {/* Card Heading */}
          <h5 className="mb-4 text-2xl font-medium text-secondary">
            Hosting/Server
          </h5>

          <ul className="list-disc pl-5 space-y-2">
            {/* Server Management */}
            <li className="text-lg font-medium ">Server Management:</li>
            <ul className="list-inside space-y-2">
              <li className="flex items-start ">
                <span className="mr-2 text-secondary">🔹</span>
                Expertise in managing hosting and server environments related to
                backend services and CMS platforms.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary">🔹</span>
                Knowledge of deploying websites and applications on various
                hosting platforms.
              </li>
            </ul>

            {/* Additional Skills */}
            <li className="text-lg font-medium mt-4">Additional Skills:</li>
            <ul className="list-inside space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-secondary">🔹</span> SEO Expertise
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary">🔹</span> On-page SEO
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary">🔹</span> Off-page SEO
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary">🔹</span> Backlink
                Creation
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary">🔹</span> Broken Link
                Fixing (H1 to 404)
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-secondary">🔹</span> Redirection
                Management
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};
