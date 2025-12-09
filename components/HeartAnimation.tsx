import React from 'react';

interface HeartAnimationProps {
  size?: number; // Size in px for width and height
}

const HeartAnimation: React.FC<HeartAnimationProps> = ({ size = 150 }) => {
  const viewBoxSize = 100; // Consistent viewBox for SVG internal scaling
  // Updated heart path for a more classic, rounded heart shape
  const heartPathD = "M50 85 C50 85, 10 65, 10 40 C10 15, 30 0, 50 20 C70 0, 90 15, 90 40 C90 65, 50 85, 50 85 Z";
  
  // ECG wave path: A more realistic P-QRS-T complex within a 40-unit horizontal span.
  // Revised for sharper QRS complex and more natural flow.
  // The path starts slightly to the left of 0 to allow for smooth entry into the heart.
  const ecgWavePatternSegment = `
    M-10 50 L0 50 L5 48 C7 46, 9 46, 11 48 L13 50
    L15 55 L16 45 L17 55 L18 45 L19 60
    L21 50 C23 48, 25 48, 27 50 L35 50 L45 50
  `.replace(/\s+/g, ' ').trim(); // Clean up whitespace for a single line string
  
  // The horizontal span of one complete ECG complex segment.
  const animationSegmentWidth = 45; // Increased to accommodate the new path and ensure coverage

  // Repeat the segment enough times to ensure continuous visual coverage and seamless animation.
  // We need to cover at least viewBoxSize + animationSegmentWidth for a perfect loop.
  // Using 4 segments (4 * 45 = 180 units) to cover the 100-unit viewBox, allowing for smooth scrolling.
  const ecgWaveD = Array(4).fill(ecgWavePatternSegment)
                         .map((segment, i) => segment.replace(/(\d+(\.\d+)?)/g, 
                           (match, p1) => (parseFloat(p1) + i * animationSegmentWidth).toString()))
                         .join(' ');

  return (
    <div className={`relative flex justify-center items-center`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        xmlns="http://www.w3.org/2000/svg"
        className="block"
        aria-label="Animated heart with ECG wave"
      >
        <defs>
          {/* Define heart shape as a path for reuse and masking */}
          <path id="heartShape" d={heartPathD} />
        </defs>

        {/* Heart background with red fill, blue border, and pulsating animation */}
        <use
          href="#heartShape"
          fill="red"
          stroke="blue"
          strokeWidth="2"
          className="origin-center"
        >
          {/* Heartbeat animation: scales the heart slightly */}
          <animate
            attributeName="transform"
            type="scale"
            values="1;1.15;1" // More pronounced beat for "latiendo constantemente"
            keyTimes="0;0.5;1"
            dur="0.8s" // Faster, more realistic beat rate
            repeatCount="indefinite"
            additive="sum"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
        </use>

        {/* 'S' in the center of the heart */}
        <text
          x="50"
          y="52" // Adjusted for visual centering within the heart shape
          fontSize="40"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-sans" /* Using a generic sans-serif font provided by Tailwind */
        >
          S
        </text>

        {/* Mask to ensure the ECG wave is only visible inside the heart shape */}
        <mask id="heartMask">
          <use href="#heartShape" fill="white" />
        </mask>

        {/* ECG Wave path, placed within the masked group */}
        <g mask="url(#heartMask)">
          <path
            d={ecgWaveD}
            stroke="lime" // Green color for ECG wave
            strokeWidth="2"
            fill="none"
          >
            {/* ECG wave animation: translates the path from right to left, then wrapped, to simulate left-to-right movement within a fixed view */}
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              from={`${viewBoxSize} 0`} // Start off-screen right
              to={`-${animationSegmentWidth - viewBoxSize / 2} 0`} // Move to the left, adjusted to loop smoothly
              dur="2s" // Duration for one complete cycle of the wave movement, adjusted for smoother flow
              repeatCount="indefinite"
              calcMode="linear"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default HeartAnimation;