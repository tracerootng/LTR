import React from 'react';

// LTR active states for highlighting
const LTR_STATES = ['Kaduna', 'Nasarawa', 'Plateau', 'Kano', 'Niger', 'Kebbi', 'Zamfara', 'Sokoto', 'Kogi', 'Benue', 'Cross River'];

interface StateData {
    name: string;
    path: string;
    label: [number, number];
}

const states: StateData[] = [
    // Far North West
    {
        name: 'Sokoto',
        path: 'M 82,42 L 110,35 L 148,38 L 162,50 L 168,72 L 155,88 L 132,92 L 108,84 L 88,72 L 78,58 Z',
        label: [122, 68],
    },
    {
        name: 'Kebbi',
        path: 'M 44,82 L 82,42 L 88,72 L 108,84 L 110,110 L 90,130 L 62,135 L 42,118 L 38,98 Z',
        label: [66, 100],
    },
    {
        name: 'Zamfara',
        path: 'M 108,84 L 132,92 L 155,88 L 172,100 L 180,122 L 165,140 L 140,145 L 110,135 L 90,130 L 108,110 Z',
        label: [135, 118],
    },

    // North West
    {
        name: 'Katsina',
        path: 'M 148,38 L 200,32 L 240,38 L 255,58 L 250,80 L 222,90 L 198,95 L 172,100 L 155,88 L 168,72 L 162,50 Z',
        label: [200, 65],
    },
    {
        name: 'Kano',
        path: 'M 240,38 L 280,36 L 305,48 L 310,72 L 295,90 L 268,98 L 250,80 L 255,58 Z',
        label: [272, 68],
    },
    {
        name: 'Jigawa',
        path: 'M 280,36 L 330,30 L 370,40 L 375,62 L 355,80 L 330,88 L 305,78 L 295,90 L 305,48 Z',
        label: [328, 60],
    },

    // North East
    {
        name: 'Yobe',
        path: 'M 370,40 L 440,34 L 490,42 L 495,65 L 475,82 L 450,85 L 415,78 L 390,72 L 375,62 Z',
        label: [425, 62],
    },
    {
        name: 'Borno',
        path: 'M 490,42 L 560,38 L 605,56 L 610,100 L 590,140 L 558,158 L 520,155 L 492,138 L 475,115 L 475,82 L 495,65 Z',
        label: [538, 102],
    },
    {
        name: 'Gombe',
        path: 'M 415,78 L 450,85 L 475,82 L 475,115 L 458,132 L 435,130 L 412,112 L 408,92 Z',
        label: [440, 108],
    },
    {
        name: 'Adamawa',
        path: 'M 475,115 L 492,138 L 520,155 L 530,190 L 515,225 L 490,248 L 462,252 L 440,238 L 435,210 L 445,185 L 458,160 L 458,132 Z',
        label: [490, 188],
    },
    {
        name: 'Bauchi',
        path: 'M 330,88 L 355,80 L 390,72 L 415,78 L 408,92 L 412,112 L 395,128 L 365,130 L 340,120 L 320,105 Z',
        label: [367, 105],
    },

    // North Central / Middle Belt
    {
        name: 'Kaduna',
        path: 'M 198,95 L 222,90 L 250,80 L 268,98 L 285,115 L 278,140 L 258,158 L 232,162 L 210,152 L 192,135 L 185,115 L 172,100 Z',
        label: [225, 128],
    },
    {
        name: 'Niger',
        path: 'M 90,130 L 110,135 L 140,145 L 165,140 L 192,135 L 210,152 L 210,180 L 196,205 L 170,220 L 145,225 L 118,218 L 95,202 L 78,178 L 72,155 Z',
        label: [145, 183],
    },
    {
        name: 'Nasarawa',
        path: 'M 258,158 L 278,140 L 305,148 L 320,165 L 312,188 L 295,200 L 272,202 L 248,192 L 240,175 Z',
        label: [278, 178],
    },
    {
        name: 'Plateau',
        path: 'M 285,115 L 320,105 L 340,120 L 365,130 L 368,155 L 355,172 L 330,185 L 305,185 L 285,175 L 278,158 L 282,140 Z',
        label: [320, 152],
    },
    {
        name: 'Taraba',
        path: 'M 412,112 L 435,130 L 458,132 L 458,160 L 445,185 L 435,210 L 440,238 L 418,255 L 390,262 L 365,252 L 348,228 L 355,200 L 370,178 L 375,155 L 390,140 L 395,128 Z',
        label: [400, 195],
    },
    {
        name: 'Benue',
        path: 'M 305,185 L 330,185 L 355,172 L 368,155 L 375,155 L 370,178 L 355,200 L 348,228 L 330,240 L 305,242 L 285,232 L 272,215 L 272,202 L 295,200 L 312,188 Z',
        label: [318, 212],
    },
    {
        name: 'Kogi',
        path: 'M 196,205 L 210,180 L 210,152 L 232,162 L 240,175 L 248,192 L 272,202 L 272,215 L 258,232 L 235,242 L 210,248 L 188,240 L 178,222 Z',
        label: [225, 218],
    },

    // South West
    {
        name: 'Kwara',
        path: 'M 118,218 L 145,225 L 170,220 L 196,205 L 178,222 L 162,240 L 145,255 L 122,255 L 102,245 L 98,228 Z',
        label: [148, 238],
    },
    {
        name: 'Oyo',
        path: 'M 80,245 L 98,228 L 122,255 L 145,255 L 145,278 L 130,295 L 108,302 L 85,298 L 68,282 L 65,262 Z',
        label: [105, 272],
    },
    {
        name: 'Osun',
        path: 'M 122,255 L 145,255 L 145,278 L 130,295 L 148,310 L 140,330 L 118,332 L 103,318 L 105,298 L 108,302 Z',
        label: [125, 305],
    },
    {
        name: 'Ekiti',
        path: 'M 145,255 L 162,240 L 178,255 L 185,272 L 175,290 L 155,295 L 148,310 L 130,295 L 145,278 Z',
        label: [160, 275],
    },
    {
        name: 'Ondo',
        path: 'M 155,295 L 175,290 L 198,298 L 208,316 L 200,338 L 182,348 L 162,342 L 148,325 L 148,310 Z',
        label: [175, 322],
    },
    {
        name: 'Ogun',
        path: 'M 68,282 L 85,298 L 108,302 L 105,318 L 90,332 L 68,335 L 50,325 L 48,308 L 55,292 Z',
        label: [76, 315],
    },
    {
        name: 'Lagos',
        path: 'M 68,335 L 90,332 L 105,345 L 102,358 L 80,360 L 62,352 L 58,342 Z',
        label: [80, 348],
    },

    // South South / Niger Delta
    {
        name: 'Edo',
        path: 'M 178,255 L 196,242 L 210,248 L 218,265 L 215,285 L 205,302 L 188,310 L 172,308 L 162,295 L 160,278 L 162,262 Z',
        label: [188, 282],
    },
    {
        name: 'Delta',
        path: 'M 160,320 L 172,308 L 188,310 L 205,302 L 215,315 L 210,335 L 196,350 L 178,355 L 162,348 L 155,332 Z',
        label: [183, 330],
    },
    {
        name: 'Anambra',
        path: 'M 235,242 L 258,232 L 272,245 L 270,268 L 255,280 L 235,282 L 220,270 L 218,255 Z',
        label: [245, 262],
    },
    {
        name: 'Enugu',
        path: 'M 258,232 L 285,232 L 299,248 L 295,270 L 278,282 L 258,280 L 245,268 L 255,252 Z',
        label: [272, 258],
    },
    {
        name: 'Imo',
        path: 'M 220,270 L 235,282 L 255,280 L 255,298 L 245,315 L 228,318 L 212,308 L 208,290 Z',
        label: [232, 295],
    },
    {
        name: 'Ebonyi',
        path: 'M 278,282 L 295,270 L 315,272 L 318,292 L 305,308 L 285,310 L 268,298 L 268,285 Z',
        label: [292, 292],
    },
    {
        name: 'Rivers',
        path: 'M 212,308 L 228,318 L 245,315 L 255,328 L 250,348 L 232,358 L 212,355 L 198,342 L 196,325 L 205,315 Z',
        label: [225, 335],
    },
    {
        name: 'Bayelsa',
        path: 'M 196,325 L 210,335 L 215,350 L 215,368 L 200,375 L 182,368 L 178,352 L 182,338 Z',
        label: [198, 352],
    },
    {
        name: 'Abia',
        path: 'M 255,298 L 268,285 L 285,290 L 290,308 L 282,325 L 265,328 L 252,318 L 248,305 Z',
        label: [270, 310],
    },
    {
        name: 'Cross River',
        path: 'M 295,270 L 318,262 L 345,265 L 360,285 L 355,315 L 338,335 L 315,340 L 295,330 L 285,312 L 290,292 L 315,290 Z',
        label: [322, 302],
    },
    {
        name: 'Akwa Ibom',
        path: 'M 285,310 L 305,308 L 318,318 L 318,340 L 304,355 L 282,355 L 268,342 L 265,325 L 272,312 Z',
        label: [292, 332],
    },
    // FCT Abuja (small central territory)
    {
        name: 'Abuja',
        path: 'M 210,180 L 232,162 L 248,170 L 248,192 L 235,202 L 218,205 Z',
        label: [228, 188],
    },
];

const getStateColor = (name: string) => {
    return LTR_STATES.includes(name) ? '#008753' : '#c8e6d4';
};

const NigeriaMapSVG: React.FC<{ className?: string }> = ({ className }) => {
    const [hovered, setHovered] = React.useState<string | null>(null);

    return (
        <svg
            viewBox="35 28 580 355"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ width: '100%', height: '100%' }}
        >
            <defs>
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#00000030" />
                </filter>
            </defs>
            {states.map((s) => {
                const isActive = LTR_STATES.includes(s.name);
                const isHovered = hovered === s.name;
                return (
                    <g key={s.name} onMouseEnter={() => setHovered(s.name)} onMouseLeave={() => setHovered(null)}>
                        <path
                            d={s.path}
                            fill={isHovered ? (isActive ? '#005f3b' : '#a8d5bd') : getStateColor(s.name)}
                            stroke="white"
                            strokeWidth="1.5"
                            filter="url(#shadow)"
                            style={{ transition: 'fill 0.2s ease', cursor: 'pointer' }}
                        />
                        <text
                            x={s.label[0]}
                            y={s.label[1]}
                            fontSize={s.name === 'Lagos' || s.name === 'Abuja' ? '5' : '6'}
                            fill={isActive ? 'white' : '#2d5a3e'}
                            fontWeight="600"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            style={{ pointerEvents: 'none', userSelect: 'none' }}
                        >
                            {s.name}
                        </text>
                    </g>
                );
            })}

            {/* Legend */}
            <g>
                <rect x="40" y="350" width="12" height="12" fill="#008753" rx="2" />
                <text x="56" y="359" fontSize="7" fill="#374151" fontWeight="600">LTR Active States</text>
                <rect x="40" y="367" width="12" height="12" fill="#c8e6d4" stroke="#a0c4b0" strokeWidth="0.5" rx="2" />
                <text x="56" y="376" fontSize="7" fill="#374151" fontWeight="600">Other States</text>
            </g>
        </svg>
    );
};

export default NigeriaMapSVG;
