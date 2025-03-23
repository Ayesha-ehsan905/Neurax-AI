import { SVGProps } from "react";

const Arrow: React.FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.375 1.3125L12.4566 8.18878C11.5212 9.11841 11.0536 9.58313 10.4736 9.58313C9.89344 9.58303 9.42591 9.11812 8.49085 8.18831L8.26641 7.96519C7.33051 7.03453 6.86254 6.56916 6.28208 6.56944C5.70162 6.56962 5.23399 7.03528 4.29875 7.96659L0.625 11.625M19.375 1.3125V6.51169M19.375 1.3125H14.1417"
        stroke="#FE6B94"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default Arrow;
