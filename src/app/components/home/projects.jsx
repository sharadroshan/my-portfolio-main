"use client";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import FrontendDeveloper from "../frontendDeveloper/index";
import BackendDeveloper from "../backendDeveloper/index";
import HostingDeveloper from "../HostingDeveloper/index";

const tabs = ["Frontend Developer", "Backend Developer", "Hosting/Server"];

export const Projects = () => {
  return (
    <div className="mb-20 mt-20">
      <div className="flex items-center justify-center">
        <div className="text-center ml-5">
          <h6 className="text-secondary text-lg">03. What I Did?</h6>
          <h4 className="mt-2 text-5xl text-slate300 font-semibold whitespace-nowrap px-5">
            My Projects
          </h4>
        </div>
      </div>

      <Tab.Group as="div">
        <Tab.List className="flex w-full bg-primary rounded-md justify-between mt-10 gap-5">
          {tabs.map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `focus:outline-none rounded-b-none rounded-md px-8 py-4 text-lg font-medium capitalize w-full text-center ${
                  selected
                    ? "text-navy500 font-extrabold bg-secondary"
                    : "text-navy500 bg-slate300"
                }`
              }
            >
              {item}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <FrontendDeveloper />
          </Tab.Panel>
          <Tab.Panel>
            <BackendDeveloper />
          </Tab.Panel>
          <Tab.Panel>
            <HostingDeveloper />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
