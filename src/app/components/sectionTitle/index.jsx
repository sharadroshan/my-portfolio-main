import React from 'react'

export const SectionTitle = ({number, title }) => {
    return (
        <div className='flex items-center'>
            <h4 className='text-[22px] lg:text-[28px] text-secondary font-semibold '>{number}.</h4>
            <div className='text-center'>
                <h4 className='text-[22px] lg:text-[32px] text-slate300 font-semibold whitespace-nowrap px-2 lg:px-5'>{title}</h4>
            </div>
            <div className='h-1 w-[60%] border-b border-slate300 text-slate300'> </div>
        </div>
    )
}
