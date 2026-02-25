'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export default function Toc(){
    const [currentId, setCurrentId] = useState<string>('');
    const [headingEls, setHeadingEls] = useState<Element[]>([]);

    useEffect(() => {
        const observer = getIntersectionObserver(setCurrentId);
        const headingElements = Array.from(document.querySelectorAll('article h1, article h2'));

        setHeadingEls(headingElements);

        headingElements.map((header) => {
            observer.observe(header);
            return () => observer.disconnect();
        });
    }, []);

    if (headingEls.length === 0){
        return null;
    }

    return (
        <nav className = 'fixed right-16 top-40 hidden xl:block w-52'>
            <p className = 'text-[10px] text-text-3 tracking-[3px] mb-3'>// toc</p>
            <ul className = 'border-l border-accent pl-4 space-y-2'>
                {headingEls.map((el) => {
                    const active = currentId === el.innerHTML;
                    return(
                        <li 
                            key = {el.innerHTML}
                            style = {{ marginLeft: el.tagName === 'H2' ? '10x' : '0px' }}
                            className = {`block text-[11px] tracking-wide transition-colors duration-200 leading-relaxed
                                            ${active ? 'text-accent' : 'text-text-3 hover:text-text-2'}`}
                        >
                            {el.textContent}
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

const observerOption = {
    threshold: 0.4,
    rootMargin: '-76px 0px 0px 0px'
};

function getIntersectionObserver(setState: Dispath<SetStateAction<string>>){
    let direction = '';
    let prevYposition = 0;
    
    const checkScrollDirection = (prevY: number) => {
        if(window.scrollY === 0 && prevY === 0){
            return;
        }

        else if(window.scrollY > prevY){
            direction = 'down';
        }

        else{
            direction = 'up';
        }

        prevYposition = window.scrollY;
    };

    const observer  = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            checkScrollDirection(prevYposition);

            if((direction === 'down' && !entry.isIntersecting) || (direction === 'up' && entry.isIntersecting)){
                setState(entry.target.innerHTML);
            }
        });
    }, observerOption);

    return observer;
}

