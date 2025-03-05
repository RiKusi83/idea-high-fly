
import { Category, Idea } from './types';

export const CATEGORIES: Category[] = [
  'movies',
  'jokes',
  'books',
  'food',
  'life',
  'tech',
  'music',
  'art',
  'random'
];

export const IDEAS: Idea[] = [
  {
    id: '1',
    content: 'What if the Star Wars prequels were actually a dream Darth Vader had while in his meditation chamber?',
    category: 'movies',
    highness: 4,
    author: 'DarthToker',
    createdAt: new Date('2023-06-15'),
    likes: 42
  },
  {
    id: '2',
    content: 'A cookbook where all measurements are "a bit" or "a splash" and every recipe ends with "trust your instincts"',
    category: 'food',
    highness: 3,
    author: 'ChefBoyarWeed',
    createdAt: new Date('2023-06-14'),
    likes: 127
  },
  {
    id: '3',
    content: 'Why do we park on driveways and drive on parkways? Who came up with this system?',
    category: 'random',
    highness: 5,
    author: 'PhilosophicalToker',
    createdAt: new Date('2023-06-13'),
    likes: 89
  },
  {
    id: '4',
    content: 'A horror movie where the monster is student loan debt and it just follows you forever',
    category: 'movies',
    highness: 2,
    author: 'BrokeGradStudent',
    createdAt: new Date('2023-06-12'),
    likes: 231
  },
  {
    id: '5',
    content: 'What if plants get sad when we don\'t talk to them but they just can\'t say anything',
    category: 'random',
    highness: 4,
    author: 'PlantWhisperer',
    createdAt: new Date('2023-06-11'),
    likes: 56
  },
  {
    id: '6',
    content: 'A book about a detective who solves crimes by time traveling, but every trip changes the future slightly',
    category: 'books',
    highness: 5,
    author: 'TimeCop420',
    createdAt: new Date('2023-06-10'),
    likes: 78
  },
  {
    id: '7',
    content: 'What if we\'re all just characters in someone\'s dream and when they wake up we cease to exist?',
    category: 'random',
    highness: 5,
    author: 'ExistentialDread',
    createdAt: new Date('2023-06-09'),
    likes: 101
  },
  {
    id: '8',
    content: 'A dating app that matches people based on what\'s in their refrigerator',
    category: 'tech',
    highness: 3,
    author: 'FridgeMatcher',
    createdAt: new Date('2023-06-08'),
    likes: 45
  },
  {
    id: '9',
    content: 'Why don\'t we have restaurants where you pay what you think the meal was worth?',
    category: 'food',
    highness: 2,
    author: 'FairFoodie',
    createdAt: new Date('2023-06-07'),
    likes: 67
  },
  {
    id: '10',
    content: 'A music app that creates playlists based on your current level of highness',
    category: 'music',
    highness: 4,
    author: 'MellowDJ',
    createdAt: new Date('2023-06-06'),
    likes: 134
  },
  {
    id: '11',
    content: 'What if phones could take pictures of your dreams while you sleep and save them to a special dream album?',
    category: 'picture',
    highness: 5,
    author: 'DreamShooter',
    createdAt: new Date('2023-06-05'),
    likes: 98
  }
];
