import { useEffect, useRef } from 'react';

function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-pop-up');
                    } else {
                        entry.target.classList.remove('animate-pop-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = aboutRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={aboutRef} className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
            <div className="text-8xl font-bodoni mb-24 tracking-wider animate-on-scroll">
                ABOUT ME
            </div>
            <div className="max-w-4xl text-2xl font-semibold leading-relaxed text-center space-y-6 px-4">
                <p className="font-doto text-2xl animate-on-scroll animation-delay-300">
                    > I am a full-stack developer from Rajasthan, currently pursuing a B.Tech in Artificial Intelligence and Data Science
                </p>
                <p className="font-doto text-2xl animate-on-scroll animation-delay-400">
                    > I have a strong passion for building scalable web solutions.
                </p>
                <p className="font-doto text-2xl animate-on-scroll animation-delay-500">
                    > love solving complex problems through data structures, algorithms, and competitive programming.
                </p>
                <p className="font-doto text-2xl animate-on-scroll animation-delay-600">
                    > Constantly learning and refining my skills, I strive to create efficient and impactful digital experiences.
                </p>
            </div>
        </div>
    )
}

export default About