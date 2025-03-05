
import { useState, useEffect } from 'react';
import { Category } from '@/utils/types';
import { CATEGORIES } from '@/utils/dummyData';
import { cn } from '@/lib/utils';
import { Menu, X, PlusCircle, User, LogOut, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

export const Header = ({ selectedCategory, onSelectCategory }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border" 
          : "bg-transparent"
      )}
    >
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-primary bg-clip-text text-transparent animate-pulse-slow">High_Idea420</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant={selectedCategory === null ? "default" : "ghost"}
              onClick={() => onSelectCategory(null)}
              className="text-sm font-medium transition-all"
              size="sm"
            >
              All
            </Button>
            
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => onSelectCategory(category)}
                className="text-sm font-medium transition-all"
                size="sm"
              >
                #{category}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              <span>Sign In</span>
            </Button>
            
            <Button size="sm" className="hidden md:flex">
              <PlusCircle className="h-4 w-4 mr-2" />
              <span>New Idea</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel animate-fade-in px-4 py-3 border-t border-border">
          <nav className="flex flex-col space-y-2">
            <Button
              variant={selectedCategory === null ? "default" : "ghost"}
              onClick={() => {
                onSelectCategory(null);
                setMobileMenuOpen(false);
              }}
              className="justify-start"
            >
              All Ideas
            </Button>
            
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => {
                  onSelectCategory(category);
                  setMobileMenuOpen(false);
                }}
                className="justify-start"
              >
                #{category}
              </Button>
            ))}
            
            <div className="h-px bg-border my-2" />
            
            <Button variant="outline" className="justify-start">
              <LogIn className="h-4 w-4 mr-2" />
              <span>Sign In</span>
            </Button>
            
            <Button className="justify-start">
              <PlusCircle className="h-4 w-4 mr-2" />
              <span>New Idea</span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
