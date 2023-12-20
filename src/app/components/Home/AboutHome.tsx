"use client";

import React from "react";
import Typed from "typed.js";
import { Button } from "../ui/button";


function AboutHome() {
    const type = React.useRef(null);

    React.useEffect(() => {
            const typed = new Typed(type.current, {
            strings: ['<strong>Développeur Fullstack Junior</strong>', '<strong>Guitariste débutant</strong>', '<strong>Freelance</strong>', '<strong>Étudiant</strong>', '<strong>Auto-didacte</strong>'],
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 1000,
            loop: true,
        });

        return () => {
        typed.destroy();
        };
    }, []);

    return (
        <section>
            <div className="flex justify-center mt-16 text-white">
                <h1 className="text-3xl font-bold">About Me</h1>
            </div>
            <div className="flex flex-col flex-wrap justify-center mt-8 text-white text-xl text-center">
                <p>Bonjour<span>&#x1F44B;</span></p>
                <p>Je m&apos;appelle <span className="font-sriracha text-yellow-500 font-extrabold">Nathan</span></p>
                <p>Je suis <span className="font-sriracha text-yellow-500 font-extrabold" ref={type}></span></p>
            </div>
            <div className='mt-8 flex justify-center'>
                <Button className='bg-transparent text-white' variant='outlineHover'>
                    <a href="NathanHenauxCV.png" download="HENAUXNathanCV(2023-2024)">Télécharger mon CV</a>
                </Button>
            </div>
            <hr className='mt-12 flex mx-auto w-1/4'></hr>
        </section>
    )
}

export { AboutHome };