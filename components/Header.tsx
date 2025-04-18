'use client';
import React, { useEffect } from 'react';

const headerItems = [
    {
        title: "home",
        href: "/",
        key: 'h'
    },
    {
        title: "projects",
        href: "/",
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
];

const Header = () => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return; // ignore if Ctrl, Cmd, or Alt is pressed

            if (e.key === 'h' || e.key === 'H') {
                window.location.href = '/';
            }
            if (e.key === 'p' || e.key === 'P') {
                window.location.href = '/';
            }
            if (e.key === 'r' || e.key === 'R') {
                window.open('https://drive.google.com/file/d/11HQxW-FKb5sMgtmR54iJpFdanCCV1E2A/view?usp=sharing', '_blank');
            }
            if (e.key === 'g' || e.key === 'G') {
                window.open('https://github.com/keshav-0907', '_blank');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className='flex gap-5'>
            {headerItems.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className="text-base font-medium text-white"
                    target={item.title === "resume" ? "_blank" : "_self"}
                >
                    {item.title} [{item.key}]
                </a>
            ))}
        </div>
    );
};

export default Header;
