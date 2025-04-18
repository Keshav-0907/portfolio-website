import React from 'react'

const headerItems = [
    {
        title: "home",
        href: "/",
        key: 'h'
    },
    {
        title: "projects",
        href: "/projects",
        key: 'p'
    },
    {
        title: "resume",
        href: "https://drive.google.com/file/d/11HQxW-FKb5sMgtmR54iJpFdanCCV1E2A/view?usp=sharing",
        key: 'r'
    },
    {
        title: "github",
        href: "https://github.com/Keshav-0907",
        key: 'g'
    },
]

const Header = () => {
    return (
        <div className='flex gap-5'>
            {
                headerItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="text-base font-medium text-white"
                        target={item.title === "resume" ? "_blank" : "_self"}
                    >
                        {item.title}
                        {" "}
                        [{item.key}]
                    </a>
                ))
            }
        </div>
    )
}

export default Header