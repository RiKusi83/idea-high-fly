import { Category, Idea, Comment } from './types';

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

// Helper function to create comments with proper dates
const createComment = (content: string, author: string, daysAgo: number): Comment => ({
  id: Math.random().toString(36).substring(2, 9),
  content,
  author,
  createdAt: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000)
});

export const IDEAS: Idea[] = [
  {
    id: '1',
    content: 'What if the Star Wars prequels were actually a dream Darth Vader had while in his meditation chamber?',
    category: 'movies',
    highness: 4,
    author: 'DarthToker',
    createdAt: new Date('2023-06-15'),
    likes: 42,
    comments: [
      createComment('This would explain so much about Jar Jar Binks', 'ForceUser420', 2),
      createComment('I\'d watch an extended edition with this theory explained', 'SkywalkerKush', 1),
      createComment('My mind is blown right now 🤯', 'YodaBongz', 0)
    ]
  },
  {
    id: '2',
    content: 'A cookbook where all measurements are "a bit" or "a splash" and every recipe ends with "trust your instincts"',
    category: 'food',
    highness: 3,
    author: 'ChefBoyarWeed',
    createdAt: new Date('2023-06-14'),
    likes: 127,
    comments: [
      createComment('This is literally how my grandma cooks and her food slaps', 'MunchieMonster', 3),
      createComment('Would buy this in a heartbeat 😂', 'BakedBaker', 2),
      createComment('Add a chapter about what to cook when you have the munchies', 'SnackAttack', 1),
      createComment('Maybe call it "High Cuisine: A Stoner\'s Cookbook"', 'CulinaryStoner', 0)
    ]
  },
  {
    id: '3',
    content: 'Why do we park on driveways and drive on parkways? Who came up with this system?',
    category: 'random',
    highness: 5,
    author: 'PhilosophicalToker',
    createdAt: new Date('2023-06-13'),
    likes: 89,
    comments: [
      createComment('Bro, I think about this EVERY time I park my car', 'DeepThoughts', 2),
      createComment('English is wild man', 'WordWizard', 1),
      createComment('Now I can\'t unsee this', 'MindBlown420', 0)
    ]
  },
  {
    id: '4',
    content: 'A horror movie where the monster is student loan debt and it just follows you forever',
    category: 'movies',
    highness: 2,
    author: 'BrokeGradStudent',
    createdAt: new Date('2023-06-12'),
    likes: 231,
    comments: [
      createComment('The scariest movie ever made', 'DebtRidden', 3),
      createComment('Too real man, too real', 'JobHunter', 2),
      createComment('I\'m already living in this horror movie 😭', 'RamenBudget', 1),
      createComment('Plot twist: there\'s no escape', 'CapitalismVictim', 0)
    ]
  },
  {
    id: '5',
    content: 'What if plants get sad when we don\'t talk to them but they just can\'t say anything',
    category: 'random',
    highness: 4,
    author: 'PlantWhisperer',
    createdAt: new Date('2023-06-11'),
    likes: 56,
    comments: [
      createComment('I\'m gonna go apologize to my plants right now', 'GreenThumb', 2),
      createComment('This explains why my plants always die... they\'re depressed 😔', 'PlantKiller', 1),
      createComment('Maybe that\'s why some people\'s gardens thrive - they\'re giving good vibes', 'GardenGuru', 0)
    ]
  },
  {
    id: '6',
    content: 'A book about a detective who solves crimes by time traveling, but every trip changes the future slightly',
    category: 'books',
    highness: 5,
    author: 'TimeCop420',
    createdAt: new Date('2023-06-10'),
    likes: 78,
    comments: []
  },
  {
    id: '7',
    content: 'What if we\'re all just characters in someone\'s dream and when they wake up we cease to exist?',
    category: 'random',
    highness: 5,
    author: 'ExistentialDread',
    createdAt: new Date('2023-06-09'),
    likes: 101,
    comments: []
  },
  {
    id: '8',
    content: 'A dating app that matches people based on what\'s in their refrigerator',
    category: 'tech',
    highness: 3,
    author: 'FridgeMatcher',
    createdAt: new Date('2023-06-08'),
    likes: 45,
    comments: []
  },
  {
    id: '9',
    content: 'Why don\'t we have restaurants where you pay what you think the meal was worth?',
    category: 'food',
    highness: 2,
    author: 'FairFoodie',
    createdAt: new Date('2023-06-07'),
    likes: 67,
    comments: []
  },
  {
    id: '10',
    content: 'A music app that creates playlists based on your current level of highness',
    category: 'music',
    highness: 4,
    author: 'MellowDJ',
    createdAt: new Date('2023-06-06'),
    likes: 134,
    comments: []
  },
  {
    id: '11',
    content: 'What if phones could take pictures of your dreams while you sleep and save them to a special dream album?',
    category: 'picture',
    highness: 5,
    author: 'DreamShooter',
    createdAt: new Date('2023-06-05'),
    likes: 98,
    comments: []
  },
  {
    id: '12',
    content: 'Someone should make a joke book where all the punchlines are hidden under scratch-off material',
    category: 'jokes',
    highness: 3,
    author: 'StonedComedian',
    createdAt: new Date('2023-06-04'),
    likes: 73,
    comments: []
  },
  {
    id: '13',
    content: 'What if clouds are actually just the Earth\'s thoughts?',
    category: 'random',
    highness: 5,
    author: 'CloudGazer420',
    createdAt: new Date('2023-06-03'),
    likes: 82,
    comments: []
  },
  {
    id: '14',
    content: 'A smart speaker that translates what your pets are saying but it turns out they\'re just judging you all day',
    category: 'tech',
    highness: 4,
    author: 'PetWhisperer',
    createdAt: new Date('2023-06-02'),
    likes: 156,
    comments: []
  },
  {
    id: '15',
    content: 'Imagine a movie where all the actors are replaced with their celebrity doppelgangers and nobody acknowledges it',
    category: 'movies',
    highness: 3,
    author: 'HighCinephile',
    createdAt: new Date('2023-06-01'),
    likes: 91,
    comments: []
  },
  {
    id: '16',
    content: 'What if paintings in art museums come alive at night but only if you leave them weed as an offering',
    category: 'art',
    highness: 5,
    author: 'BakedArtist',
    createdAt: new Date('2023-05-31'),
    likes: 112,
    comments: []
  },
  {
    id: '17',
    content: 'A cookbook with recipes that match your mood, like "slightly anxious pasta" or "existential crisis cookies"',
    category: 'food',
    highness: 4,
    author: 'EmotionalChef',
    createdAt: new Date('2023-05-30'),
    likes: 88,
    comments: []
  },
  {
    id: '18',
    content: 'We should have telescopes that can look back in time so we can see what dinosaurs actually looked like',
    category: 'tech',
    highness: 5,
    author: 'DinoEnthusiast',
    createdAt: new Date('2023-05-29'),
    likes: 105,
    comments: []
  },
  {
    id: '19',
    content: 'A joke book where none of the jokes make sense until you\'re high, then they\'re hilarious',
    category: 'jokes',
    highness: 5,
    author: 'GiggleWeed',
    createdAt: new Date('2023-05-28'),
    likes: 132,
    comments: []
  },
  {
    id: '20',
    content: 'What if we could take pictures of smells? Like, capture a coffee aroma in the morning and view it later',
    category: 'picture',
    highness: 4,
    author: 'ScentShooter',
    createdAt: new Date('2023-05-27'),
    likes: 77,
    comments: []
  },
  {
    id: '21',
    content: 'A book where each chapter is written from the perspective of a different household object',
    category: 'books',
    highness: 3,
    author: 'LitWit420',
    createdAt: new Date('2023-05-26'),
    likes: 65,
    comments: []
  },
  {
    id: '22',
    content: 'What if we could taste music? Like, would jazz be spicy or sweet?',
    category: 'music',
    highness: 5,
    author: 'SensoryOverload',
    createdAt: new Date('2023-05-25'),
    likes: 94,
    comments: []
  },
  {
    id: '23',
    content: 'A sketchbook that interprets your doodles and completes them while you\'re sleeping',
    category: 'art',
    highness: 4,
    author: 'DreamyArtist',
    createdAt: new Date('2023-05-24'),
    likes: 81,
    comments: []
  },
  {
    id: '24',
    content: 'What if life is just one big video game and we forgot we\'re playing it?',
    category: 'life',
    highness: 5,
    author: 'SimulationToker',
    createdAt: new Date('2023-05-23'),
    likes: 145,
    comments: []
  },
  {
    id: '25',
    content: 'Someone should create cereal boxes with philosophical questions on the back instead of games',
    category: 'food',
    highness: 3,
    author: 'BreakfastThinker',
    createdAt: new Date('2023-05-22'),
    likes: 72,
    comments: []
  },
  {
    id: '26',
    content: 'A camera app that shows you what animals are thinking when you take their picture',
    category: 'picture',
    highness: 4,
    author: 'AnimalMindReader',
    createdAt: new Date('2023-05-21'),
    likes: 108,
    comments: []
  },
  {
    id: '27',
    content: 'What if we told the same joke to people around the world and mapped how funny they thought it was?',
    category: 'jokes',
    highness: 3,
    author: 'GlobalHumor',
    createdAt: new Date('2023-05-20'),
    likes: 63,
    comments: []
  },
  {
    id: '28',
    content: 'An app that translates your baby\'s cries into specific requests like "I\'m hungry" or "I\'m questioning the nature of reality"',
    category: 'tech',
    highness: 4,
    author: 'BabyLogic',
    createdAt: new Date('2023-05-19'),
    likes: 97,
    comments: []
  },
  {
    id: '29',
    content: 'Why can\'t movie theaters have one night a month where everyone is allowed to talk during the movie?',
    category: 'movies',
    highness: 2,
    author: 'CinemaRebel',
    createdAt: new Date('2023-05-18'),
    likes: 49,
    comments: []
  },
  {
    id: '30',
    content: 'A life coach who only gives advice based on fortune cookie messages',
    category: 'life',
    highness: 3,
    author: 'FortunateSoul',
    createdAt: new Date('2023-05-17'),
    likes: 86,
    comments: []
  },
  {
    id: '31',
    content: 'What if we could take pictures of our dreams and create galleries of our subconscious adventures?',
    category: 'picture',
    highness: 5,
    author: 'DreamCatcher',
    createdAt: new Date('2023-05-16'),
    likes: 119,
    comments: [
      createComment('I\'d have a whole gallery of flying dreams', 'NightFlyer', 3),
      createComment('My dream gallery would be wild. Half awesome adventures, half being late for exams I graduated from years ago', 'SleepyHead', 2),
      createComment('Imagine being able to share dream photos with friends', 'DreamTeam', 1),
      createComment('Add dream filters to make them even trippier', 'PsychedelicSleeper', 0)
    ]
  },
  {
    id: '32',
    content: 'An app that lets you take pictures of colors in real life and then tells you the exact color code so you can use it in designs',
    category: 'picture',
    highness: 3,
    author: 'ColorHunter',
    createdAt: new Date('2023-05-15'),
    likes: 87,
    comments: [
      createComment('That would be so useful for my design projects!', 'DigitalArtist', 2),
      createComment('I think this actually exists but I can never find it when I need it', 'ForgetfulCreator', 1),
      createComment('Add a feature that suggests complementary colors too', 'PaletteProdigy', 0)
    ]
  },
  {
    id: '33',
    content: 'A social network where you can only communicate through pictures of your pets doing silly things',
    category: 'picture',
    highness: 4,
    author: 'PetMeme',
    createdAt: new Date('2023-05-14'),
    likes: 143,
    comments: [
      createComment('I would finally have a reason to make my cat wear funny hats', 'CatParent', 3),
      createComment('Best. Social. Network. Ever.', 'DoggoLover', 2),
      createComment('My hamster would be an influencer for sure', 'RodentWhisperer', 1),
      createComment('I\'d sign up in a heartbeat!', 'PetPortraitist', 0)
    ]
  }
];
