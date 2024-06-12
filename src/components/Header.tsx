import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="flex justify-end gap-5 items-center py-4">
                <Link href="#projects" className='hover:underline underline-offset-4'> # Projects</Link>
                <Link href="#contact" className='hover:underline underline-offset-4'> # Contact</Link>
            </div>
        </div>
    )
}

export default Header