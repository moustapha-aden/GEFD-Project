import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'primary';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const variantClasses = {
  default: 'bg-background',
  muted: 'bg-muted',
  primary: 'bg-primary/10',
};

const paddingClasses = {
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 md:py-20',
  lg: 'py-16 sm:py-20 md:py-24 lg:py-28',
  xl: 'py-20 sm:py-24 md:py-28 lg:py-32',
};

export function Section({
  children,
  className,
  variant = 'default',
  padding = 'md',
}: SectionProps) {
  return (
    <section
      className={cn(
        'w-full transition-colors',
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </section>
  );
}
