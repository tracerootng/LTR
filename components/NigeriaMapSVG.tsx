import React from 'react';

const NigeriaMapSVG: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            viewBox="0 0 800 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outline of Nigeria - Simplified Path for placeholder replacing abstract map */}
            <path d="M 230,220 C 250,180 300,100 350,110 C 400,120 450,150 500,160 C 550,170 600,150 650,180 C 700,210 750,250 720,300 C 690,350 710,400 680,450 C 650,500 600,550 550,520 C 500,490 450,550 400,580 C 350,610 320,630 300,580 C 280,530 250,550 220,520 C 190,490 150,520 160,450 C 170,380 180,320 150,280 C 120,240 180,250 230,220 Z"
                fill="#E8F4EC"
                stroke="#008753"
                strokeWidth="4"
                className="drop-shadow-md transition-all duration-300 hover:fill-[#d1e8da]"
            />

            {/* River divisions roughly representing Niger and Benue */}
            <path d="M 160,450 Q 250,420 320,400 Q 380,380 400,580" stroke="#bfe1cf" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M 320,400 Q 450,390 680,450" stroke="#bfe1cf" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
    );
};

export default NigeriaMapSVG;
