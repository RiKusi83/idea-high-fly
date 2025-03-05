
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
  'picture',
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
  },
  {
    id: '12',
    content: 'Someone should make a joke book where all the punchlines are hidden under scratch-off material',
    category: 'jokes',
    highness: 3,
    author: 'StonedComedian',
    createdAt: new Date('2023-06-04'),
    likes: 73
  },
  {
    id: '13',
    content: 'What if clouds are actually just the Earth\'s thoughts?',
    category: 'random',
    highness: 5,
    author: 'CloudGazer420',
    createdAt: new Date('2023-06-03'),
    likes: 82
  },
  {
    id: '14',
    content: 'A smart speaker that translates what your pets are saying but it turns out they\'re just judging you all day',
    category: 'tech',
    highness: 4,
    author: 'PetWhisperer',
    createdAt: new Date('2023-06-02'),
    likes: 156
  },
  {
    id: '15',
    content: 'Imagine a movie where all the actors are replaced with their celebrity doppelgangers and nobody acknowledges it',
    category: 'movies',
    highness: 3,
    author: 'HighCinephile',
    createdAt: new Date('2023-06-01'),
    likes: 91
  },
  {
    id: '16',
    content: 'What if paintings in art museums come alive at night but only if you leave them weed as an offering',
    category: 'art',
    highness: 5,
    author: 'BakedArtist',
    createdAt: new Date('2023-05-31'),
    likes: 112
  },
  {
    id: '17',
    content: 'A cookbook with recipes that match your mood, like "slightly anxious pasta" or "existential crisis cookies"',
    category: 'food',
    highness: 4,
    author: 'EmotionalChef',
    createdAt: new Date('2023-05-30'),
    likes: 88
  },
  {
    id: '18',
    content: 'We should have telescopes that can look back in time so we can see what dinosaurs actually looked like',
    category: 'tech',
    highness: 5,
    author: 'DinoEnthusiast',
    createdAt: new Date('2023-05-29'),
    likes: 105
  },
  {
    id: '19',
    content: 'A joke book where none of the jokes make sense until you\'re high, then they\'re hilarious',
    category: 'jokes',
    highness: 5,
    author: 'GiggleWeed',
    createdAt: new Date('2023-05-28'),
    likes: 132
  },
  {
    id: '20',
    content: 'What if we could take pictures of smells? Like, capture a coffee aroma in the morning and view it later',
    category: 'picture',
    highness: 4,
    author: 'ScentShooter',
    createdAt: new Date('2023-05-27'),
    likes: 77
  },
  {
    id: '21',
    content: 'A book where each chapter is written from the perspective of a different household object',
    category: 'books',
    highness: 3,
    author: 'LitWit420',
    createdAt: new Date('2023-05-26'),
    likes: 65
  },
  {
    id: '22',
    content: 'What if we could taste music? Like, would jazz be spicy or sweet?',
    category: 'music',
    highness: 5,
    author: 'SensoryOverload',
    createdAt: new Date('2023-05-25'),
    likes: 94
  },
  {
    id: '23',
    content: 'A sketchbook that interprets your doodles and completes them while you\'re sleeping',
    category: 'art',
    highness: 4,
    author: 'DreamyArtist',
    createdAt: new Date('2023-05-24'),
    likes: 81
  },
  {
    id: '24',
    content: 'What if life is just one big video game and we forgot we\'re playing it?',
    category: 'life',
    highness: 5,
    author: 'SimulationToker',
    createdAt: new Date('2023-05-23'),
    likes: 145
  },
  {
    id: '25',
    content: 'Someone should create cereal boxes with philosophical questions on the back instead of games',
    category: 'food',
    highness: 3,
    author: 'BreakfastThinker',
    createdAt: new Date('2023-05-22'),
    likes: 72
  },
  {
    id: '26',
    content: 'A camera app that shows you what animals are thinking when you take their picture',
    category: 'picture',
    highness: 4,
    author: 'AnimalMindReader',
    createdAt: new Date('2023-05-21'),
    likes: 108
  },
  {
    id: '27',
    content: 'What if we told the same joke to people around the world and mapped how funny they thought it was?',
    category: 'jokes',
    highness: 3,
    author: 'GlobalHumor',
    createdAt: new Date('2023-05-20'),
    likes: 63
  },
  {
    id: '28',
    content: 'An app that translates your baby\'s cries into specific requests like "I\'m hungry" or "I\'m questioning the nature of reality"',
    category: 'tech',
    highness: 4,
    author: 'BabyLogic',
    createdAt: new Date('2023-05-19'),
    likes: 97
  },
  {
    id: '29',
    content: 'Why can\'t movie theaters have one night a month where everyone is allowed to talk during the movie?',
    category: 'movies',
    highness: 2,
    author: 'CinemaRebel',
    createdAt: new Date('2023-05-18'),
    likes: 49
  },
  {
    id: '30',
    content: 'A life coach who only gives advice based on fortune cookie messages',
    category: 'life',
    highness: 3,
    author: 'FortunateSoul',
    createdAt: new Date('2023-05-17'),
    likes: 86
  }
];
