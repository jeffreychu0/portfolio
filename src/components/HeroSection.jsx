import React from 'react';
import heroImage from '../assets/hero_image.jpg';

const HeroSection = () => {
    return (
        <>
            <section 
                className="
                    relative w-full
                    aspect-[16/9] min-h-[400px] flex items-center justify-center bg-black overflow-hidden drop-shadow-2xl
                    lg:aspect-[16/9] lg:min-h-[400px]
                    h-screen min-h-screen
                    lg:h-auto lg:min-h-[400px]
                "
                style={{ filter: 'drop-shadow(0 40px 55px black)' }}
            >
                {/* Spacer to enforce aspect ratio on large screens only */}
                <div className="hidden lg:block w-full" style={{ paddingTop: '56.25%' }} />
                <img
                    src={heroImage}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        zIndex: 0,
                        objectPosition: 'center top'
                    }}
                />
                {/* Black overlay with stronger inner shadow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'rgba(0,0,0,0.5)',
                        boxShadow: 'inset 0 32px 100px 100px rgba(0,0,0,1)'
                    }}
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 px-2">
                    <span className="text-center text-7xl lg:text-9xl font-cursive text-white drop-shadow-lg font-bold leading-tight">
                        Let's Make it Happen
                    </span>
                </div>
            </section>
            <section className="bg-gradient-to-br from-black via-black to-green-900 text-white py-12 px-4 md:px-8">
                {/* About Me */}
            </section>
            <section className="bg-gradient-to-br from-black via-green-900 to-blue-900 text-white py-12 px-4 md:px-8">
                {/* About Me */}
            </section>
        </>
    );
};

export default HeroSection;