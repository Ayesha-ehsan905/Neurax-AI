import { SVGProps } from "react";

const Play: React.FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_200_1957)">
        <path
          d="M5.83301 3.3335V16.6668L16.6663 10.0002L5.83301 3.3335Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_200_1957">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Play;
