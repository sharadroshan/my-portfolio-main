import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const Getintouch = () => {
    return (
        <div id="contact">
            <div className='flex items-center justify-center'>
                <div className='text-center ml-5'>
                    <h6 className='text-secondary text-lg'>05. Contact Me?</h6>
                    <h4 className='mt-2 text-5xl text-slate300 font-semibold whitespace-nowrap px-5'>Get In Touch</h4>
                </div>
            </div>
            <div className='text-center'>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-4">
                    <div>
                    </div>
                    <div className='col-span-2'>
                        <p className='text-slate500 mx-auto max-w-7xl '>
                            My email is constantly open. I'll do my best to respond to you, whether you have a query or are just wishing to say hello! Please email me with any pertinent employment updates.
                        </p>
                        <div className='mt-20 '>
                            <a href='mailto:anilprajapati.0809@gmail.com' target='_blank' className='mx-auto w-[200px] flex items-center justify-center p-4  px-7 text-secondary text-xl font-medium border border-secondary rounded-lg hover:bg-secondary hover:text-navy500'>
                                <EnvelopeIcon className="w-8 h-8"/>
                                <span className='ml-4'>Mail Me </span>
                            </a>
                        </div>
                        <div className='mt-5 mb-20'>
                            <a href='telto:+919009434118' className='mx-auto w-[200px] flex items-center justify-center p-4  px-7 text-secondary text-xl font-medium border border-secondary rounded-lg hover:bg-secondary hover:text-navy500'>
                                <PhoneIcon className="w-8 h-8"/>
                                <span className='ml-4'>Call Me </span>
                            </a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}
