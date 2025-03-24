interface ButtonProps {
  width?: string;
  text?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  width = "max-content",
  text = "Get Started",
  className,
}) => {
  return (
    <div className="rounded-full p-[1px] hover:bg-linear-(--button-gradient)">
      <button
        className={`relative bg-palatinateBlue px-6 rounded-full transition-all duration-300 group h-[32px] ${width} ${className}`}
      >
        <span className="relative z-10 text-[14px] font-medium text-white ">
          {text}
        </span>
        {/* Glow effect that appears on hover */}
        <span className="absolute inset-0 rounded-full bg-palatinateBlue opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
        {/* Inner glow for more realistic effect */}
        <span className="absolute inset-0 -z-10 rounded-full bg-palatinateBlue opacity-0 group-hover:opacity-70 blur-sm transition-opacity duration-300"></span>
        {/* Outer glow for extended effect */}
        <span className="absolute -inset-2 -z-20 rounded-full bg-palatinateBlue opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></span>
      </button>
    </div>
  );
};
export default Button;
