import React from "react";
import '../styles/AnimatedFace.css';

const AnimatedFace = ({speaking}) => {
    return (
        <div className={`face ${speaking ? 'speaking' : ''}`}>
            <div className="eye left-eye"></div>
            <div className="eye right-eye"></div>
            <div className="eyebrow left-eyebrow"></div>
            <div className="eyebrow right-eyebrow"></div>
            <div className="mouth"></div>
        </div>
    );
};

// const AnimatedFace = ({ speaking }) => {
//     const mouthRef = useRef(null);

//     useEffect(() => {
//         if (speaking) {
//             const mouthAnimation = mouthRef.current.animate([
//             { d: 'M70,130 Q100,160 130,130' },
//             { d: 'M70,130 Q100,180 130,130' },
//             { d: 'M70,130 Q100,190 130,130' },
//             { d: 'M70,130 Q100,160 130,130' },
//             ], {
//                 duration: 200,
//                 iterations: Infinity,
//             });
//             return () => mouthAnimation.cancel();
//         }
//     }, [speaking]);
//     return (
//         <div className="face">
//             <svg viewBox="0 0 200 200">
//                 <circle cx="100" cy="100" r="90" fill="#ffcc99" />
//                 <g className="eye left-eye">
//                     <circle className="white-part" cx="60" cy="80" r="20" fill="white" />
//                     <circle className="pupil" cx="60" cy="80" r="10" fill="black" />
//                 </g>
//                 <g className="eye right-eye">
//                     <circle className="white-part" cx="140" cy="80" r="20" fill="white" />
//                     <circle className="pupil" cx="140" cy="80" r="10" fill="black" />
//                 </g>
//                 <path ref={mouthRef} className={`mouth`} d="M70,130 Q100,160 130,130" fill="black" />
//                 <line className="eyebrow left-eyebrow" x1="40" y1="60" x2="80" y2="60" stroke="black" strokeWidth="5" />
//                 <line className="eyebrow right-eyebrow" x1="120" y1="60" x2="160" y2="60" stroke="black" strokeWidth="5" />
//             </svg>
//         </div>
//     );
// };

export default AnimatedFace;