import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'default' | 'narrow' | 'wide';
  spacing?: 'default' | 'large' | 'small';
}

export function Section({ 
  children, 
  className, 
  containerSize = 'default',
  spacing = 'default' 
}: SectionProps) {
  const spacings = {
    small: 'py-12 sm:py-16',
    default: 'py-16 sm:py-24',
    large: 'py-24 sm:py-32',
  };

  return (
    <section className={cn(spacings[spacing], className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

