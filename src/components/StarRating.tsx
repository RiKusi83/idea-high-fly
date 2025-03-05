
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
}

export const StarRating = ({ 
  value, 
  onChange, 
  readonly = false, 
  size = 'md', 
  className 
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
  
  return (
    <div 
      className={cn(
        'flex gap-1 items-center', 
        className
      )}
    >
      {stars.map((star) => {
        const isFilled = (hoverRating || value) >= star;
        const colorClass = `text-high-${star}`;
        
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
                isFilled ? colorClass : 'text-muted',
                'transition-all duration-300 ease-in-out'
              )} 
              fill={isFilled ? 'currentColor' : 'none'} 
            />
          </button>
        );
      })}
    </div>
  );
};
