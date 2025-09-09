export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-background border-t mt-12">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-sm leading-loose text-center text-muted-foreground">
          © {new Date().getFullYear()} PhotoSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
