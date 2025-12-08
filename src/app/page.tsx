'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation'; // Fixed import
import {useState, useEffect} from 'react';

export default function Home() {
  const router = useRouter(); // Fixed: use useRouter hook
  const [, setIsVisible] = useState(true);

  const scrollToNext = () => {
    router.push('/about');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="overflow-hidden bg-[#1A2115] lg:h-screen flex flex-col relative min-h-screen"
    >
      {/* Optional subtle background pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url("/images/poly-grey.jpg")',
          backgroundSize: '300px',
        }}
      />

      {/* Enhanced Header with Social Links - DARK MODE VERSION */}
      <header className="w-full bg-[#2A3320] py-6 sm:py-10 px-6 sm:px-32 flex items-center justify-between animate-fadeInUp sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 border-b border-[#3A4530]/30">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] text-[#E3D7C4] font-semibold tracking-tight">
          <span className="text-[#7A8663] font-bold">Nine</span>
          <span className="font-semibold text-[#D4C9B8]">Starx</span>
        </h1>

        {/* Social Links/Contact Info */}
        <div className="flex items-center gap-6">
          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="hidden md:flex items-center gap-2 text-[#D4C9B8] hover:text-[#7A8663] transition-colors duration-300"
            aria-label="Send email"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4C9B8] hover:text-[#7A8663] transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4C9B8] hover:text-[#7A8663] transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Small "View More" indicator for mobile */}
          <div className="md:hidden">
            <button
              onClick={scrollToNext}
              className="text-[#7A8663] hover:text-[#D4C9B8] transition-colors"
              aria-label="View more"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Body - DARK MODE VERSION */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between flex-1 px-6 sm:px-32 py-8 sm:py-12 gap-12 lg:gap-16">
        {/* Text Section */}
        <div
          className="max-w-xl text-center lg:text-left animate-fadeInUp"
          style={{animationDelay: '0.2s'}}
        >
          <h2 className="main-text text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#E3D7C4] leading-tight tracking-tight">
            Playful on the outside.
            <br className="hidden sm:block" />
            <span className="text-[#7A8663]">Relentless in the code.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#D4C9B8] max-w-md mx-auto lg:mx-0 leading-relaxed">
            Coding feels like bringing ideas to life — and that feeling never
            gets old.
            <span className="block mt-2">
              I stay curious, I stay playful, and I build with intention.
            </span>
          </p>

          <p className="mt-6 text-sm sm:text-base text-[#7A8663] italic font-medium">
            Code Maniac • Music Enthusiast • Problem Solver
          </p>

          {/* Buttons - DARK MODE VERSION */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1wY-e2o8tM_0C915kPYGPBkQjMKl5npQC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#7A8663] text-[#1A2115] rounded-lg text-sm font-semibold hover:bg-[#8F9B75] hover:text-[#E3D7C4] transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl shadow-[#7A8663]/20"
              download="Sylvester_Samuel_Resume.pdf"
            >
              Download Resume
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            {/* Next Page Button */}
            <button
              onClick={scrollToNext}
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#7A8663] text-[#7A8663] hover:text-[#E3D7C4] rounded-lg text-sm font-semibold hover:bg-[#7A8663] transition-all duration-300 active:scale-95 cursor-pointer group shadow-lg shadow-[#7A8663]/10"
            >
              Get to Know Me
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Section - DARK MODE OPTIMIZED */}
        <div
          className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] animate-fadeInUp group"
          style={{animationDelay: '0.4s'}}
        >
          {/* Dark gradient background frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A3320] via-[#3A4530] to-[#1A2115] rounded-xl shadow-2xl" />

          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-xl p-[2px]">
            <div className="w-full h-full bg-gradient-to-br from-[#7A8663]/40 via-transparent to-[#5D6450]/30 rounded-xl" />
          </div>

          {/* Image container with dark overlay */}
          <div className="relative w-full h-full rounded-xl overflow-hidden z-20">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2115]/90 via-[#2A3320]/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A4530]/40 to-transparent z-10" />

            <Image
              src="/images/poly-grey.jpg"
              alt="Sylvester Samuel - Full Stack Developer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90 contrast-110"
              width={380}
              height={380}
              priority
              quality={95}
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 380px"
            />
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-[#7A8663] to-[#5D6450] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110" />
          <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-[#5D6450] to-[#3A4530] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-110" />
        </div>
      </div>

      {/* Next Page Indicator - DARK MODE VERSION */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center group animate-pulse hover:animate-none"
          aria-label="Go to next page"
        >
          <div className="text-[#7A8663] text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore
          </div>
          <div className="relative w-12 h-12 border-2 border-[#7A8663] rounded-full flex items-center justify-center group-hover:bg-[#7A8663] transition-all duration-300 shadow-lg shadow-[#7A8663]/20">
            <svg
              className="w-6 h-6 text-[#7A8663] group-hover:text-[#1A2115] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <div className="absolute inset-0 border-2 border-[#7A8663] rounded-full animate-ping opacity-30"></div>
          </div>
        </button>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-gradient-to-br from-[#7A8663] to-[#5D6450] rounded-full hidden lg:block opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-20 w-6 h-6 bg-gradient-to-br from-[#5D6450] to-[#3A4530] rounded-full hidden lg:block opacity-20 animate-pulse"
        style={{animationDelay: '1s'}}
      ></div>
    </section>
  );
}
