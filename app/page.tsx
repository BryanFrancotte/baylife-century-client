import { promises as fs } from 'fs';
import path from 'path';
import Image from "next/image";

import GridMotion from "./modules/home/components/GridMotion";

// Function to get all files from home-artworks directory
async function getArtworkFiles() {
  const artworkDirectory = path.join(process.cwd(), 'public', 'home-artworks');
  const fileNames = await fs.readdir(artworkDirectory);
  
  // Filter only image files (you can add more extensions if needed)
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  return fileNames.filter(fileName => 
    imageExtensions.some(ext => fileName.toLowerCase().endsWith(ext))
  );
}

// Generate responsive artwork components
async function generateArtworkItems() {
  const artworkFiles = await getArtworkFiles();
  
  // Shuffle the array to randomize the order
  const shuffledFiles = [...artworkFiles].sort(() => Math.random() - 0.5);
  
  return shuffledFiles.map(fileName => (
    <Image 
      key={fileName}
      draggable={false} 
      src={`/home-artworks/${fileName}`} 
      alt={fileName.replace(/\.[^/.]+$/, "")} 
      fill
      style={{
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    />
  ));
}

export default async function Home() {
  const items = await generateArtworkItems();
  
  return (
    <GridMotion items={items} gradientColor="red"/>
  );
}