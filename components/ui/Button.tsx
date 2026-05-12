// components/ui/Button.tsx
import Link from 'next/link';
import { ButtonProps } from '../../types';

export default function Button({ 
  children, 
  primary = false, 
  href = "#", 
  className = "",
  target = "",
  onClick,
}: ButtonProps) {
  
  const baseClasses = "inline-flex items-center rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base px-5 md:px-8 py-2.5 md:py-4";
  
  const primaryClasses = "bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg hover:shadow-xl";
  const secondaryClasses = "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50";
  
  const classes = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;
  
  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }
  
  if (target === "_blank") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}