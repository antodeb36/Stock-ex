export type Photo = {
  id: number;
  width: number;
  height: number;
  photographer: string;
  src: string;
  alt: string;
  tags: string[];
  dataAiHint: string;
};

const photographers = [
  'Alexandre Godreau', 'Casey Horner', 'Ilya Pavlov', 'John Doe', 'Jane Smith', 'Peter Jones', 'Maria Garcia', 'Satoshi Nakamoto', 'Laura Evans', 'Chris Williams'
];

const allTags = [
  'nature', 'water', 'sky', 'mountain', 'travel', 'landscape', 'city', 'urban', 'people', 'animal', 'food', 'tech', 'abstract', 'dark', 'light', 'forest', 'beach', 'ocean', 'winter', 'summer', 'fall', 'spring', 'architecture', 'street', 'road', 'car', 'building', 'work', 'coffee', 'art'
];

// Seeded random number generator
function createSeededRandom(seed: number) {
  let state = seed;
  return function() {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
}

function getRandomElements<T>(arr: T[], count: number, random: () => number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - random());
  return shuffled.slice(0, count);
}

function generatePhotos(count: number): Photo[] {
  const photos: Photo[] = [];
  const seed = 123; // A fixed seed to ensure consistent "random" generation
  
  for (let i = 1; i <= count; i++) {
    const seededRandom = createSeededRandom(seed + i);
    const width = Math.floor(seededRandom() * 400) + 600;
    const height = Math.floor(seededRandom() * 400) + 400;
    const tags = getRandomElements(allTags, Math.floor(seededRandom() * 5) + 4, seededRandom);
    
    // Create a more descriptive alt text
    const mainSubject = tags[0];
    const context = tags.slice(1, 3).join(' and ');
    const alt = `A high-quality photo of ${mainSubject} with elements of ${context}`;

    photos.push({
      id: i,
      width,
      height,
      photographer: photographers[Math.floor(seededRandom() * photographers.length)],
      src: `https://picsum.photos/seed/${i + 100}/${width}/${height}`,
      alt,
      tags,
      dataAiHint: tags.slice(0, 2).join(' '),
    });
  }
  return photos;
}

export const photos: Photo[] = generatePhotos(50);
