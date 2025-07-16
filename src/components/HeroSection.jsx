import React from 'react';
import heroImage from '../assets/hero_image.jpg';

const HeroSection = () => {
    return (
        <>
            <section 
                className="relative w-full aspect-[16/9] min-h-[400px] flex items-center justify-center bg-black overflow-hidden drop-shadow-2xl"
                style={{filter: 'drop-shadow(0 40px 55px black)'}}
            >
                {/* Spacer to enforce aspect ratio */}
                <div className="w-full" style={{ paddingTop: '56.25%' }} />
                <img
                    src={heroImage}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                        zIndex: 0,
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
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-center text-4xl md:text-9xl font-cursive text-white drop-shadow-lg font-bold">
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