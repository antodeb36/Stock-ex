import { Header } from '@/components/header';
import { PhotoGallery } from '@/components/photo-gallery';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  );
}
