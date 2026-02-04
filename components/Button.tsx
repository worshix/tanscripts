import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 overflow-hidden";

  const variants = {
    primary:
      "btn-neon text-white hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5",
    secondary:
      "btn-neon-orange text-white hover:shadow-lg hover:shadow-secondary/50 hover:-translate-y-0.5",
    outline:
      "btn-neon-outline border-2 border-primary text-primary-light hover:text-white hover:bg-primary",
    ghost:
      "bg-transparent text-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/30",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm tracking-wide",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wider",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} disabled={disabled}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
