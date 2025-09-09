
'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Info, User, ExternalLink } from 'lucide-react';
import type { Photo } from '@/lib/photos';
import { useToast } from '@/hooks/use-toast';

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

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl p-0">
        <div className="flex flex-col">
            <div className="relative w-full h-[80vh] bg-black/90 flex items-center justify-center">
                <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-contain"
                    data-ai-hint={photo.dataAiHint}
                />
            </div>
            <div className="flex flex-col p-6">
                <DialogHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <DialogTitle className="text-2xl font-bold font-headline mb-2 pr-8">{photo.alt}</DialogTitle>
                            <DialogDescription className="flex items-center gap-2 text-base">
                                <User className="h-4 w-4" />
                                <span>Photo by {photo.photographer}</span>
                            </DialogDescription>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                                    <Download className="mr-2 h-5 w-5" /> Free Download
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleDownload(getDownloadUrl(640, Math.round(640 * (photo.height/photo.width))), `photosphere-${photo.id}-small.jpg`)}>Small (640w)</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleDownload(getDownloadUrl(1920, Math.round(1920 * (photo.height/photo.width))), `photosphere-${photo.id}-medium.jpg`)}>Medium (1920w)</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleDownload(photo.src, `photosphere-${photo.id}-original.jpg`)}>Original Size</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </DialogHeader>

                <div className="my-6">
                    <h3 className="font-semibold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                    {photo.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-sm cursor-pointer hover:bg-muted">
                        {tag}
                        </Badge>
                    ))}
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t">
                    <h3 className="font-semibold flex items-center gap-2 mb-2"><Info className="h-4 w-4" /> License Information</h3>
                    <p className="text-sm text-muted-foreground">
                        All photos on PhotoSphere are free to use. Attribution is not required but appreciated.
                        <a href="#" className="inline-flex items-center text-accent/80 hover:text-accent ml-2">
                            Learn More <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
