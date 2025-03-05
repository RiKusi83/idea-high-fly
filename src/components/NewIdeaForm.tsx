
import { useState } from 'react';
import { StarRating } from './StarRating';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Category, HighnessRating } from '@/utils/types';
import { CATEGORIES } from '@/utils/dummyData';
import { cn } from '@/lib/utils';
import { AlertCircle, Send } from 'lucide-react';

interface NewIdeaFormProps {
  onSubmit: (content: string, category: Category, highness: HighnessRating) => void;
  className?: string;
}

export const NewIdeaForm = ({ onSubmit, className }: NewIdeaFormProps) => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<Category>('random');
  const [highness, setHighness] = useState<HighnessRating>(3);
  const [error, setError] = useState('');
  
  const remainingChars = 140 - content.length;
  const isOverLimit = remainingChars < 0;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setError('Your idea cannot be empty');
      return;
    }
    
    if (isOverLimit) {
      setError('Your idea exceeds 140 characters');
      return;
    }
    
    onSubmit(content, category, highness);
    setContent('');
    setError('');
  };
  
  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        'glass-panel rounded-xl p-4 mb-6 animate-fade-in',
        className
      )}
    >
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Share your high idea</h3>
            <div className={cn(
              "text-sm font-medium",
              isOverLimit ? "text-destructive" : remainingChars <= 20 ? "text-orange-500" : "text-muted-foreground"
            )}>
              {remainingChars} characters left
            </div>
          </div>
          
          <div className="relative">
            <Input
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                if (error) setError('');
              }}
              placeholder="What's your high idea? (140 chars max)"
              className={cn(
                "w-full pr-10 resize-none border-2 transition-all", 
                isOverLimit && "border-destructive focus-visible:ring-destructive/50"
              )}
            />
            {isOverLimit && (
              <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-destructive" />
            )}
          </div>
          
          {error && <p className="text-sm text-destructive mt-1">{error}</p>}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-all",
                category === cat 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              #{cat}
            </button>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">How high were you?</span>
            <StarRating 
              value={highness} 
              onChange={setHighness} 
              size="md"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isOverLimit || !content.trim()}
            className="transition-all duration-300 ease-in-out"
          >
            <Send className="mr-2 h-4 w-4" />
            Share Idea
          </Button>
        </div>
      </div>
    </form>
  );
};
