'use client';

import type { Photo } from '@/lib/photos';
import Image from 'next/image';
import { Download } from 'lucide-react';

interface PhotoCardProps {
  photo: Photo;
  onPhotoSelect: (photo: Photo) => void;
}

export function PhotoCard({ photo, onPhotoSelect }: PhotoCardProps) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl"
      onClick={() => onPhotoSelect(photo)}
      onKeyDown={(e) => e.key === 'Enter' && onPhotoSelect(photo)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${photo.alt}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        data-ai-hint={photo.dataAiHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 p-4 w-full flex justify-between items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-semibold text-sm truncate">{photo.photographer}</p>
        <Download className="h-5 w-5" />
      </div>
    </div>
  );
}
