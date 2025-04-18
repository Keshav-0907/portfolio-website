import React from 'react'

interface BadgeProps {
    children: React.ReactNode;
    url: string;
}
const Badge = ({ children, url }: BadgeProps) => {
    return (
        <div className='text-sm text-gray-300 border-[1px] border-slate-800 hover:border-slate-600 px-2 py-1 rounded-md cursor-pointer'>
            {children}
        </div>
    )
}

export default Badge