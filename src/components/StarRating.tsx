
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import { HighnessRating } from '@/utils/types';

interface StarRatingProps {
  value: HighnessRating;
  onChange?: (rating: HighnessRating) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  colorScheme?: 'green' | 'yellow';
}

export const StarRating = ({ 
  value, 
  onChange, 
  readonly = false, 
  size = 'md', 
  className,
  colorScheme = 'green'
}: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  
  const stars = [1, 2, 3, 4, 5] as const;
  
  const handleClick = (rating: HighnessRating) => {
    if (!readonly && onChange) {
      onChange(rating);
    }
  };
  
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const getColorClass = (star: number, isFilled: boolean) => {
    if (!isFilled) return 'text-muted';
    
    if (colorScheme === 'yellow') {
      // Use yellow color scale
      const intensity = Math.min(100 - (5 - star) * 10, 100);
      return `text-yellow-${intensity}`;
    } else {
      // Use green color scale (default)
      return `text-high-${star}`;
    }
  };
  
  return (
    <div 
      className={cn(
        'flex gap-1 items-center', 
        className
      )}
    >
      {stars.map((star) => {
        const isFilled = (hoverRating || value) >= star;
        const colorClass = getColorClass(star, isFilled);
        
        return (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => !readonly && setHoverRating(star)}
            onMouseLeave={() => !readonly && setHoverRating(null)}
            className={cn(
              'focus:outline-none transition-transform duration-200 ease-in-out', 
              !readonly && 'hover:scale-110',
              readonly && 'cursor-default'
            )}
            disabled={readonly}
          >
            <Star 
              className={cn(
                sizeClasses[size],
                colorClass,
                'transition-all duration-300 ease-in-out'
              )} 
              fill={isFilled ? (colorScheme === 'yellow' ? '#FEF08A' : 'currentColor') : 'none'} 
            />
          </button>
        );
      })}
    </div>
  );
};
