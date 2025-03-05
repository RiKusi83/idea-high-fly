
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { IdeaCard } from '@/components/IdeaCard';
import { NewIdeaForm } from '@/components/NewIdeaForm';
import { Category, HighnessRating, Idea } from '@/utils/types';
import { IDEAS } from '@/utils/dummyData';

const Index = () => {
  const [ideas, setIdeas] = useState<Idea[]>(IDEAS);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showNewIdeaForm, setShowNewIdeaForm] = useState(false);
  const { toast } = useToast();

  const filteredIdeas = selectedCategory
    ? ideas.filter((idea) => idea.category === selectedCategory)
    : ideas;

  const handleAddIdea = (content: string, category: Category, highness: HighnessRating) => {
    const newIdea: Idea = {
      id: uuidv4(),
      content,
      category,
      highness,
      author: 'You',
      createdAt: new Date(),
      likes: 0,
    };

    setIdeas([newIdea, ...ideas]);
    setShowNewIdeaForm(false);
    
    toast({
      title: "Idea shared!",
      description: "Your high idea has been posted successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      
      <main className="container px-4 sm:px-6 mx-auto py-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="font-bold mb-2">Share Your Elevated Ideas</h1>
            <p className="text-muted-foreground">
              Post your best high thoughts, rate how elevated you were, and browse ideas from others.
            </p>
            
            {!showNewIdeaForm && (
              <button
                onClick={() => setShowNewIdeaForm(true)}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-200 ease-in-out"
              >
                Share a new idea
              </button>
            )}
          </div>
          
          {showNewIdeaForm && (
            <div className="mb-6">
              <NewIdeaForm onSubmit={handleAddIdea} />
            </div>
          )}
          
          {selectedCategory && (
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold">
                <span className="text-muted-foreground">Browsing</span> #{selectedCategory}
              </h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm text-primary hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
          
          <div className="space-y-4">
            {filteredIdeas.length > 0 ? (
              filteredIdeas.map((idea, index) => (
                <div 
                  key={idea.id}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <IdeaCard idea={idea} />
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg font-medium">No ideas found</p>
                <p className="text-muted-foreground mt-1">
                  {selectedCategory 
                    ? `Be the first to share a high idea in #${selectedCategory}!` 
                    : 'Be the first to share a high idea!'}
                </p>
                <button
                  onClick={() => setShowNewIdeaForm(true)}
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none"
                >
                  Share a new idea
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
