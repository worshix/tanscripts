interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-orbitron)] tracking-wide"
        data-aos="fade-up"
      >
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p
          className={`text-lg text-foreground-muted max-w-3xl leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {subtitle}
        </p>
      )}
      <div 
        className={`mt-6 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-12 h-0.5 bg-primary rounded-full shadow-sm shadow-primary" />
        <div className="w-3 h-3 rounded-full bg-secondary shadow-sm shadow-secondary" />
        <div className="w-12 h-0.5 bg-primary rounded-full shadow-sm shadow-primary" />
      </div>
    </div>
  );
}
