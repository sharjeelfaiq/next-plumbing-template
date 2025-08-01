// Button.tsx - Consistent button component system
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emergency';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  target,
  rel,
  type = 'button',
  fullWidth = false,
  ariaLabel,
}) => {
  // Base styles that apply to all buttons
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-lg 
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
    ${fullWidth ? 'w-full' : 'w-auto'}
  `;

  // Size variants
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Variant styles
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary 
      text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30
      hover:-translate-y-0.5 hover:scale-105 focus:ring-primary/50
    `,
    secondary: `
      bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300
      text-slate-900 border border-slate-300 hover:border-slate-400
      hover:-translate-y-0.5 hover:scale-105 focus:ring-slate-400/50
      dark:from-slate-700 dark:to-slate-600 dark:text-white dark:border-slate-600 dark:hover:border-slate-500
    `,
    outline: `
      border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground
      hover:-translate-y-0.5 hover:scale-105 focus:ring-primary/50 bg-transparent
    `,
    ghost: `
      text-slate-700 hover:bg-slate-100 hover:text-slate-900 bg-transparent
      hover:-translate-y-0.5 hover:scale-105 focus:ring-slate-400/50
      dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white
    `,
    emergency: `
      bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800
      text-white shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/30
      hover:-translate-y-0.5 hover:scale-105 focus:ring-red-500/50
    `,
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  // If href is provided, render as Link or anchor
  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || target) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={combinedStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;

// WhatsAppButton.tsx - Specialized WhatsApp button
interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = '',
  children,
  size = 'md',
  className = '',
  fullWidth = false,
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  
  return (
    <Button
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant="primary"
      size={size}
      fullWidth={fullWidth}
      className={className}
      ariaLabel={`Contact us on WhatsApp`}
    >
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.886 3.488"/>
      </svg>
      {children}
    </Button>
  );
};

// CallButton.tsx - Specialized call button
interface CallButtonProps {
  phoneNumber: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'emergency';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export const CallButton: React.FC<CallButtonProps> = ({
  phoneNumber,
  children,
  variant = 'outline',
  size = 'md',
  className = '',
  fullWidth = false,
}) => {
  return (
    <Button
      href={`tel:${phoneNumber}`}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      ariaLabel={`Call ${phoneNumber}`}
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      {children}
    </Button>
  );
};