import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className,
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const directionClass = {
    up: '',
    left: 'animate-from-left',
    right: 'animate-from-right',
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll',
        directionClass,
        isVisible && 'visible',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
