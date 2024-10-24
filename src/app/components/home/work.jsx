"use client";
import React, { useState } from 'react';
import { SectionTitle } from '../sectionTitle';

const companies = [
    {
        id: 1,
        name: 'Gontu Softwares Technologies (Delhi)',
    },
    {
        id: 2,
        name: 'Synetal Solutions Pvt.Ltd (Indore)',
    },
    {
        id: 3,
        name: 'Cloud 2 Reach Pvt.Ltd (Indore)',
    },
];

export const Work = () => {
    const [isSelected, setIsSelected] = useState(1);

    return (
        <div className='py-20' id="experience">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <SectionTitle number='02' title='Locations of My Work' />
                </div>
                <div>

                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20">
                <div>
                    <div className=' text-slate500 text-xl'>
                        <div className=''>
                            {
                                companies.map((item, index) => {
                                    return (
                                        <div>
                                            <button key={index} onClick={() => { setIsSelected(item.id) }} className={`${isSelected === item.id ? 'border-secondary border-l-4 text-secondary ' : 'border-l text-slate500 ml-[2px] '} text-medium py-5 px-4 hover:bg-navy400 hover:text-secondary text-left `}>{item.name}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='col-span-2 mt-10 lg:mt-0'>
                    {/* right panel */}
                    {
                        isSelected === 1 ?
                            <div>
                                <div >
                                    <h3 className='text-2xl font-semibold text-slate300'>Senior Frontend Developer <span className='text-secondary'> @ Gontu Softwares Technologies</span></h3>
                                    <h6 className='text-slate300 font-medium mt-3'>Designation : Sr. Web Developer</h6>
                                    <h6 className='text-slate300 font-medium mt-3 flex items-center'>Duration : May 2023 - Current <div className='ml-2 w-3 h-3 bg-secondary rounded-full'></div></h6>
                                </div>
                                <div className='mt-5'>
                                    <ul className='list-disc text-slate500 pl-5 text-lg'>
                                        <li className='py-2 text-justify'>
                                            Led the development of multiple high-impact projects from conception to deployment, consistently meeting deadlines and exceeding client expectations.
                                        </li>
                                        <li className='py-2 text-justify'>
                                            Spearheaded the implementation of modern frontend technologies and best practices, resulting in improved performance, scalability, and user experience across all projects.
                                        </li>
                                        <li className='py-2 text-justify'>
                                            Collaborated closely with cross-functional teams including designers, backend developers, and project managers to translate business requirements into intuitive and responsive user interfaces.
                                        </li>
                                        <li className='py-2 text-justify'>
                                            Mentored junior developers, providing guidance on coding standards, architecture design, and troubleshooting techniques to foster skill development and team cohesion.
                                        </li>
                                        <li className='py-2 text-justify'>
                                            Optimized frontend codebase for performance and maintainability, resulting in significant reduction in load times and enhanced code readability.
                                        </li>
                                        <li className='py-2 text-justify'>
                                            Actively participated in code reviews, offering constructive feedback and ensuring adherence to coding standards and industry best practices.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            :
                            isSelected === 2 ?
                                <div>
                                    <div >
                                        <h3 className='text-2xl font-semibold text-slate300'>Senior Frontend Developer <span className='text-secondary'> @ Synetal Solutions Private Limited</span></h3>
                                        <h6 className='text-slate300 font-medium mt-3'>Designation : Sr. Web Developer</h6>
                                        <h6 className='text-slate300 font-medium mt-3'>Duration : Nov 2019 - May 2023</h6>
                                    </div>
                                    <div className='mt-5'>
                                        <ul className='list-disc text-slate500 pl-5 text-lg'>
                                            <li>
                                                Identified Mobile-based user interactions and developed highly responsive user interface components via React concepts.
                                            </li>
                                            <li>Translated designs & wireframes into high-quality code and wrote application interface code via JavaScript.</li>
                                            <li>Developed the latest user-facing features and built reusable components for future use.</li>
                                            <li>Coordinated with the development team of 5 to discuss user interface ideas and applications.</li>
                                        </ul>
                                        <div className='mt-5'>
                                            <h3 className='font-semibold text-slate300 text-2xl'>Below listed Web applications are developed by me and my team :</h3>
                                            <ul className='list-decimal text-slate500 pl-5 text-lg mt-5'>
                                                <li className='py-2 text-justify'>
                                                    <span className='text-secondary font-semibol text-xl'>
                                                        Bigul (Its ecosystem built for Traders, Investors and Developers)
                                                    </span> –
                                                    <div className='my-3'>
                                                        <p className='text-slate300 text-md'><span>(React Hooks, React Redux, React State, Components, Props, REST API's Integrations , UI Design, Material UI)</span></p>
                                                    </div>
                                                    <p>
                                                        In Bigul Web Application i have handle RM Dashboard Module.
                                                        The RM Dadhboard is one of the main module in this sysetm.
                                                        In this platform RM can easily manage users details like User KYC journey ,
                                                        Document Verification , Pending application update from incomplete step of Kyc journey.
                                                        Autosubmit Mobile Otp Verification ( when user verify OTP from his phone then RM can check status in real time ),
                                                        same things for email verification using verification url. User can upload selfie ,
                                                        signature , Bank details , Pan Details , Pan Verification , Aadhar link or not, KRA Approved or not approved client,
                                                        and somuch things are integrated in Bigul .
                                                    </p>
                                                </li>
                                                <li className='py-2 text-justify'>
                                                    <span className='text-secondary font-semibol mr-2'>
                                                        Travelmaster (Online Bus Ticket Booking System)
                                                    </span>
                                                    – Travel Master is a licensed Concert Travel bus & coach service operating high-quality coaches to major venues in Ireland, most noteworthy 3Arena, Croke Park, Aviva Stadium, RDS, Slane Castle and many more spectacular Dublin venues. <br />
                                                    <a href='https://travelmaster.ie/' className='text-secondary'>travelmaster.ie</a> is first choice for coach travel in Ireland while offering reliable same-day return travel to popular events such as concerts, festivals and matches. In addition to being the safest, most cost-effective way to travel to events, Travel Master have an extremely simple online booking method. <br />
                                                    Travel Master is sell individual bus tickets making travel easy for the lone concert-goer. In contrast to our competitors, there’s no need to rent an entire coach from travelmaster. travelmaster travel direct, dropping you right outside the venue so that after the event you simply leave the venue and walk up the steps of the coach – no LUAS, taxi or long-distance walking required! TravelMaster also offers a customised group booking service.
                                                </li>
                                                <li className='py-2 text-justify'>
                                                    <span className='text-secondary font-semibol'>Jaive Song Registration Web App </span>
                                                    - (React Js, Firebase, Excelsheet Api) In Jaive platform user can register him self as a singer. Also user can drop or upload his own song on jaive platform with his name or album name. <br />
                                                    After registration is completed in jaive user & admin get email of Singer registration with details.
                                                </li>
                                                <li className='py-2 text-justify'>
                                                    <span className='text-secondary font-semibol'>Hub App (User Interface) </span>
                                                    - This app design for a control a machine like controlling temprature of the perticular modules. User Can easily manage or change the status using application.
                                                </li>
                                                <li className='py-2 text-justify'>
                                                    <span className='text-secondary font-semibol'>Kabir Photography</span>
                                                    - In this Web application showing a listings of couples photos albums with their perticular albums photos list.As well as multiples photographers can join the platform to working with kabir photography.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                :
                                isSelected === 3 ?
                                    <div>
                                        <div >
                                            <h3 className='text-2xl font-semibold text-slate300'>Senior Frontend Developer <span className='text-secondary'> @ Gontu Softwares Technologies</span></h3>
                                            <h6 className='text-slate300 font-medium mt-3'>Designation : Intern</h6>
                                            <h6 className='text-slate300 font-medium mt-3'>Duration : May 2023 - Sep 2023</h6>
                                        </div>
                                        <div className='mt-5'>
                                            <ul className='list-disc text-slate500 pl-5 text-lg'>
                                                <li className='py-2 text-justify'>
                                                    Led the development of multiple high-impact projects from conception to deployment, consistently meeting deadlines and exceeding client expectations.
                                                </li>
                                                <li className='py-2 text-justify'>
                                                    Spearheaded the implementation of modern frontend technologies and best practices, resulting in improved performance, scalability, and user experience across all projects.
                                                </li>
                                                <li className='py-2 text-justify'>
                                                    Collaborated closely with cross-functional teams including designers, backend developers, and project managers to translate business requirements into intuitive and responsive user interfaces.
                                                </li>
                                                <li className='py-2 text-justify'>
                                                    Mentored junior developers, providing guidance on coding standards, architecture design, and troubleshooting techniques to foster skill development and team cohesion.
                                                </li>
                                                <li className='py-2 text-justify'>
                                                    Optimized frontend codebase for performance and maintainability, resulting in significant reduction in load times and enhanced code readability.
                                                </li>
                                                <li className='py-2 text-justify'>
                                                    Actively participated in code reviews, offering constructive feedback and ensuring adherence to coding standards and industry best practices.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    null
                    }
                </div>
            </div>
        </div>
    )
}
