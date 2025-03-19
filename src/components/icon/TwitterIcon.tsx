import { SVGProps } from "react";

const GithubIcon: React.FC<SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-[#B0B0B0] hover:fill-[#16E390] transition-colors duration-200 cursor-pointer"
    >
      <path d="M19.176 4H21.936L15.9061 10.7775L23 20H17.4454L13.0951 14.4065L8.11727 20H5.35539L11.805 12.7508L5 4H10.6953L14.6277 9.11254L19.176 4ZM18.2073 18.3753H19.7367L9.86432 5.5394H8.22323L18.2073 18.3753Z" />
    </svg>
  );
};
export default GithubIcon;
