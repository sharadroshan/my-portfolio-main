"use client"
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'About', href: '#aboutme', current: true },
    { name: 'Experience', href: '#experience', current: false },
    { name: 'Projects', href: '#experience', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Appbar = () => {
    return (
        <Disclosure as="nav" className="bg-navy500 sticky top-0 z-[99]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 py-3  sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-10 w-10 text-secondary" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-10 w-10 text-secondary" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-between ">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="/" aria-label="home">
                                        <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" className='w-14 h-14 text-green'>
                                            <title>Logo</title>
                                            <g transform="translate(-8.000000, -2.000000)" style={{fill:'transparent'}}>
                                                <g transform="translate(11.000000, 5.000000)">
                                                    <polygon id="Shape" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23">
                                                    </polygon>
                                                </g>
                                            </g>
                                            <text x="28" y="65" fill="currentColor" font-size="50px" font-family="Consolas, serif">M</text>
                                        </svg>
                                    </a>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation?.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'text-secondary' : 'text-white',
                                                    ' rounded-md px-3 py-2 text-sm font-medium hover:text-secondary'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                        <a target='_blank' href='https://drive.google.com/file/d/1uSVtVx46OurglryMXFyZWmN-VInrTOqU/view?usp=sharing' className='px-5 py-2 font-medium border border-green rounded text-green hover:bg-secondary hover:text-navy500'>Resume</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden border-b border-slate300 pb-10">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'text-secondary' : 'text-slate500 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
