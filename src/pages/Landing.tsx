
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { StarRating } from '@/components/StarRating';
import { HighnessRating } from '@/utils/types';

const Landing = () => {
  const [highness, setHighness] = useState<HighnessRating>(3);
  const [ageVerified, setAgeVerified] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEnterSite = () => {
    toast({
      title: "Welcome to High_Idea420!",
      description: `You're browsing with a highness level of ${highness}/5. Enjoy the ideas!`,
    });
    
    navigate('/home');
  };

  const handleUnder18 = () => {
    window.location.href = 'https://www.wizardingworld.com/'; // Redirect to Harry Potter site
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-200 p-4">
      <div className="glass-panel max-w-md w-full p-8 rounded-xl animate-fade-in">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">High_Idea420</h1>
        
        <div className="space-y-8">
          {ageVerified === null ? (
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-semibold text-green-700">Are you over 18 years old?</h2>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => setAgeVerified(true)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Yes, I am
                </Button>
                <Button 
                  onClick={handleUnder18}
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50"
                >
                  No, I am not
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-center animate-fade-in">
              <h2 className="text-2xl font-semibold text-green-700">How high are you right now?</h2>
              
              <div className="flex justify-center py-4">
                <StarRating 
                  value={highness} 
                  onChange={setHighness} 
                  size="lg" 
                  className="scale-125"
                />
              </div>
              
              <div className="text-sm text-green-700 font-medium">
                {highness === 1 && "Just a little buzz..."}
                {highness === 2 && "Feeling nice and relaxed."}
                {highness === 3 && "Definitely feeling it."}
                {highness === 4 && "Woah, things are getting interesting!"}
                {highness === 5 && "I am one with the cosmos..."}
              </div>
              
              <Button 
                onClick={handleEnterSite}
                className="bg-green-600 hover:bg-green-700 mt-4 w-full"
              >
                Enter High_Idea420
              </Button>
            </div>
          )}
          
          <div className="text-center text-green-600 text-xs mt-8">
            <p>Share your elevated ideas with the world.</p>
            <p>This site is for entertainment purposes only.</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 text-green-700/50 text-sm">
        © {new Date().getFullYear()} High_Idea420 - Elevate Your Thoughts
      </div>
    </div>
  );
};

export default Landing;
