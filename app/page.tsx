import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";

import GridMotion from "./modules/home/components/GridMotion";

import PageContent from "./modules/home/components/PageContent";

// Function to get all files from home-artworks directory
async function getArtworkFiles() {
  const artworkDirectory = path.join(process.cwd(), "public", "home-artworks");
  const fileNames = await fs.readdir(artworkDirectory);

  // Filter only image files (you can add more extensions if needed)
  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  return fileNames.filter((fileName) =>
    imageExtensions.some((ext) => fileName.toLowerCase().endsWith(ext))
  );
}

// Generate responsive artwork components
async function generateArtworkItems() {
  const artworkFiles = await getArtworkFiles();

  // Shuffle the array to randomize the order
  const shuffledFiles = [...artworkFiles].sort(() => Math.random() - 0.5);

  return shuffledFiles.map((fileName) => (
    <Image
      key={fileName}
      draggable={false}
      src={`/home-artworks/${fileName}`}
      alt={fileName.replace(/\.[^/.]+$/, "")}
      fill
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  ));
}

export default async function Home() {
  const items = await generateArtworkItems();

  return (
    <div className="relative min-h-screen">
      {/* Background GridMotion */}
      <div className="fixed inset-0 -z-10">
        <GridMotion items={items} gradientColor="red" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="flex bg-background/20 backdrop-blur-xs p-4">
          <Image
            src="/century-assets/CENTURY_LOGO_negatif.png"
            alt="logo-century"
            width={100}
            height={100}
          />
        </header>
        <main className="flex-1 p-4 container mx-auto">
          <PageContent />
        </main>
        <footer className="bg-background/10 backdrop-blur-xs p-4 text-center">
          <p>&copy; 2025 CENTURY-Baylife. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  );
}
