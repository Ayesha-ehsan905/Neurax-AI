import { SVGProps } from "react";

const Bullet: React.FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_200_2144)">
        <circle cx="24.5" cy="24" r="8" fill="#3A4ADB" />
      </g>
      <defs>
        <filter
          id="filter0_dd_200_2144"
          x="0.5"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.227451 0 0 0 0 0.290196 0 0 0 0 0.858824 0 0 0 0.72 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_200_2144"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.227451 0 0 0 0 0.290196 0 0 0 0 0.858824 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_200_2144"
            result="effect2_dropShadow_200_2144"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_200_2144"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default Bullet;
