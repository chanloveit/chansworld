'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export default function Toc(){
    const [currentId, setCurrentId] = useState<string>('');
    const [headingEls, setHeadingEls] = useState<Element[]>([]);

    useEffect(() => {
        const observer = getIntersectionObserver(setCurrentId);
        const headingElements = Array.from(document.querySelectorAll('article h1, article h2'));
        setHeadingEls(headingElements);
        headingElements.forEach((el) => observer.observe(el));
        return () => {
            headingElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    if (headingEls.length === 0){
        return null;
    }

    return (
        <nav className = 'fixed right-16 top-40 hidden xl:block w-52'>
            <p className = 'text-[10px] text-text-3 tracking-[3px] mb-3'>// toc</p>
            <ul className = 'border-l border-accent pl-4 space-y-2'>
                {headingEls.map((el) => {
                    const active = currentId === el.id;
                    return(
                        <li 
                            key = {el.id}
                            style = {{ marginLeft: el.tagName === 'H2' ? '1rem' : 0 }}
                            className = {`block text-[11px] tracking-wide transition-colors duration-200 leading-relaxed
                                            ${active ? 'text-accent' : 'text-text-3 hover:text-text-2'}`}
                        >
                            <a href = {`#${el.id}`} className = 'block w-full h-full'>
                                {el.textContent}
                            </a>
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

function getIntersectionObserver(setState: Dispatch<SetStateAction<string>>){
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
                setState(entry.target.id);
            }
        });
    }, observerOption);

    return observer;
}

