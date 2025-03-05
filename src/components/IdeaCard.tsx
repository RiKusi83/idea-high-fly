
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Idea, Comment } from '@/utils/types';
import { cn } from '@/lib/utils';
import { StarRating } from './StarRating';
import { Heart, MessageCircle, Share2, Send } from 'lucide-react';

interface IdeaCardProps {
  idea: Idea;
  className?: string;
}

export const IdeaCard = ({ idea, className }: IdeaCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(idea.likes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>(idea.comments || []);
  const [newComment, setNewComment] = useState('');
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  const handleSubmitComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      content: newComment,
      author: 'You',
      createdAt: new Date(),
    };
    
    setComments([...comments, comment]);
    setNewComment('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitComment();
    }
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
          <StarRating value={idea.highness} readonly size="sm" colorScheme="yellow" />
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
          
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{comments.length > 0 ? comments.length : 'Comment'}</span>
          </button>
          
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {showComments && (
        <div className="mt-4 pt-4 border-t">
          {comments.length > 0 ? (
            <div className="space-y-3 mb-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold">
                    {comment.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted/50 rounded-lg p-2 px-3">
                      <p className="font-medium text-sm">{comment.author}</p>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mb-3">Be the first to comment!</p>
          )}

          <div className="flex items-center gap-2 mt-2">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
              Y
            </div>
            <div className="flex-1 relative">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Write a comment..."
                className="w-full rounded-lg bg-muted/30 border border-border px-3 py-2 text-sm min-h-[40px] max-h-[120px] resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                rows={1}
              />
              <button
                onClick={handleSubmitComment}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 disabled:text-muted-foreground"
                disabled={!newComment.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
