import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  image?: string;
  tag?: string;
  aosDelay?: number;
}

export default function Card({
  title,
  description,
  icon,
  href,
  image,
  tag,
  aosDelay = 0,
}: CardProps) {
  const content = (
    <div 
      className="glass-card rounded-2xl p-6 h-full group"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {image && (
        <div className="relative h-48 -mx-6 -mt-6 mb-6 rounded-t-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 to-transparent" />
        </div>
      )}
      {tag && (
        <span className="inline-block bg-secondary/20 text-secondary-light text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-secondary/30">
          {tag}
        </span>
      )}
      {icon && (
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white mb-5 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-foreground mb-3 font-[family-name:var(--font-orbitron)] tracking-wide group-hover:text-primary-light transition-colors">
        {title}
      </h3>
      <p className="text-foreground-muted leading-relaxed">{description}</p>
      {href && (
        <div className="mt-5 pt-4 border-t border-primary/10">
          <span className="text-primary-light font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
