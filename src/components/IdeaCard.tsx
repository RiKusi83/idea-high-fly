
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Idea } from '@/utils/types';
import { cn } from '@/lib/utils';
import { StarRating } from './StarRating';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface IdeaCardProps {
  idea: Idea;
  className?: string;
}

export const IdeaCard = ({ idea, className }: IdeaCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(idea.likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  const timeAgo = formatDistanceToNow(idea.createdAt, { addSuffix: true });
  
  return (
    <div 
      className={cn(
        'glass-panel rounded-xl p-4 mb-4 idea-transition animate-fade-in',
        'hover:shadow-md',
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {idea.author.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{idea.author}</p>
            <p className="text-sm text-muted-foreground">{timeAgo}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">High Level:</span>
          <StarRating value={idea.highness} readonly size="sm" />
        </div>
      </div>
      
      <div className="mt-3 mb-4">
        <p className="text-base/relaxed">{idea.content}</p>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
            #{idea.category}
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={handleLike}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Heart className={cn(
              "h-4 w-4 transition-all", 
              liked ? "fill-destructive text-destructive" : "fill-none"
            )} />
            <span>{likeCount}</span>
          </button>
          
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-4 w-4" />
            <span>Comment</span>
          </button>
          
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};
