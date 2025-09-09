'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Loader2 } from 'lucide-react';
import { photos as allPhotos, type Photo } from '@/lib/photos';
import { PhotoCard } from './photo-card';
import { PhotoModal } from './photo-modal';

const PHOTOS_PER_PAGE = 12;

export function PhotoGallery() {
  const [query, setQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_PAGE);

  const filteredPhotos = useMemo(() => {
    const lowercasedQuery = query.toLowerCase();
    if (!lowercasedQuery) {
      return allPhotos;
    }
    return allPhotos.filter(
      (p) =>
        p.alt.toLowerCase().includes(lowercasedQuery) ||
        p.tags.some((t) => t.toLowerCase().includes(lowercasedQuery)) ||
        p.photographer.toLowerCase().includes(lowercasedQuery)
    );
  }, [query]);

  const visiblePhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setVisibleCount(PHOTOS_PER_PAGE);
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + PHOTOS_PER_PAGE);
  };

  return (
    <>
      <section className="py-20 md:py-32 bg-card border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4">
            Discover Your Next Favorite Photo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our curated collection of high-quality, royalty-free stock photos. Find the
            perfect image for your next project.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for photos by keywords, tags, or colors..."
              className="w-full pl-12 h-12 text-base rounded-full shadow-inner"
              value={query}
              onChange={handleSearch}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-6 space-y-6">
          {visiblePhotos.map((photo) => (
            <div key={photo.id} className="break-inside-avoid">
              <PhotoCard photo={photo} onPhotoSelect={setSelectedPhoto} />
            </div>
          ))}
        </div>
        {visiblePhotos.length === 0 && (
            <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">No photos found for &quot;{query}&quot;.</p>
                <p className="text-muted-foreground mt-2">Try a different search term.</p>
            </div>
        )}

        {visibleCount < filteredPhotos.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMore} size="lg">
              Load More Photos
            </Button>
          </div>
        )}
      </div>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          isOpen={!!selectedPhoto}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setSelectedPhoto(null);
            }
          }}
        />
      )}
    </>
  );
}
