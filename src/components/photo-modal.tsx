
'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Info, User, ExternalLink, X, Heart, Bookmark, Share2, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { Photo } from '@/lib/photos';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

interface PhotoModalProps {
  photo: Photo;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function PhotoModal({ photo, isOpen, onOpenChange }: PhotoModalProps) {
  const { toast } = useToast();

  const getDownloadUrl = (width: number, height: number) => {
    const baseUrl = photo.src.split('/').slice(0, -2).join('/');
    return `${baseUrl}/${width}/${height}`;
  }

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok.');
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
      toast({
        title: "Download Started",
        description: `${filename} is being downloaded.`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Could not download the image. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`;
    }
    return name.substring(0, 2);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-transparent border-0 shadow-none p-0 w-full h-full max-w-none flex items-center justify-center">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
        
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 text-white hover:bg-white/20 hover:text-white z-50 h-12 w-12" onClick={() => onOpenChange(false)}>
          <X className="h-8 w-8" />
        </Button>

        <Button variant="ghost" size="icon" className="fixed left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-50 h-12 w-12 hidden md:flex">
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button variant="ghost" size="icon" className="fixed right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-50 h-12 w-12 hidden md:flex">
          <ChevronRight className="h-8 w-8" />
        </Button>

        <div className="relative bg-card rounded-lg w-full max-w-7xl max-h-[95vh] flex flex-col mx-4">
          <header className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={`https://i.pravatar.cc/150?u=${photo.photographer}`} />
                <AvatarFallback>{getInitials(photo.photographer)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{photo.photographer}</p>
                <div className="text-sm text-muted-foreground">
                  <Link href="#" className="hover:underline">Follow</Link>
                  <span className="mx-1">·</span>
                  <Link href="#" className="hover:underline">Donate</Link>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
               <Button variant="outline" size="icon" className="hidden sm:inline-flex">
                <Bookmark />
              </Button>
              <Button variant="outline" size="icon" className="hidden sm:inline-flex">
                <Heart />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <span className="hidden sm:inline">Free Download</span>
                        <Download className="sm:hidden" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleDownload(getDownloadUrl(640, Math.round(640 * (photo.height/photo.width))), `photosphere-${photo.id}-small.jpg`)}>Small (640w)</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDownload(getDownloadUrl(1920, Math.round(1920 * (photo.height/photo.width))), `photosphere-${photo.id}-medium.jpg`)}>Medium (1920w)</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDownload(photo.src, `photosphere-${photo.id}-original.jpg`)}>Original Size</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <div className="flex-grow flex items-center justify-center p-4 min-h-0">
             <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="max-w-full max-h-[70vh] h-auto w-auto object-contain"
                data-ai-hint={photo.dataAiHint}
                priority
            />
          </div>

          <footer className="flex items-center justify-between p-4 border-t text-sm">
            <div>
              <p className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500"/> Free to use
              </p>
              <p className="mt-1 text-foreground font-medium">{photo.alt}</p>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline"><Info className="mr-2" /> More Info</Button>
                <Button variant="outline"><Share2 className="mr-2" /> Share</Button>
            </div>
          </footer>
        </div>
      </DialogContent>
    </Dialog>
  );
}
