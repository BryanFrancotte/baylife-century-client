"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../shared/shadcn/components/ui/card";
import { AudioLines, HandMetal, Headphones } from "lucide-react";
import Link from "next/link";
import { Button } from "../../shared/shadcn/components/ui/button";

export default function PageContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-gradient-to-br from-muted/30 via-background to-muted/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-6 max-w-7xl h-full"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Century Music</h1>
          <p className="text-muted-foreground">
            &ldquo;There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...&rdquo;
          </p>
        </motion.div>

        {/* Three Cards Layout */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Card */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-center">Music Discovery</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col space-y-4">
              <p className="text-sm text-muted-foreground text-center flex-1">
                Discover new music and artists from around the world. Explore curated playlists and recommendations tailored to your taste.
              </p>
              <div className="flex justify-center">
                <Image
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  src="/placeholder.svg"
                  alt="Music Discovery"
                  width={200}
                  height={150}
                />
              </div>
              <div className="flex justify-center mt-auto pt-4">
                <Link href="/discover">
                  <Button size="sm" className="gap-2">
                    <AudioLines className="w-4 h-4" />
                    Explore
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Middle Card - Swapped layout */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-center">Premium Experience</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col space-y-4">
              <div className="flex justify-center">
                <Image
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  src="/placeholder.svg"
                  alt="Premium Features"
                  width={200}
                  height={150}
                />
              </div>
              <p className="text-sm text-muted-foreground text-center flex-1">
                Enjoy ad-free listening, high-quality audio, and exclusive content with our premium subscription.
              </p>
              <div className="flex justify-center mt-auto pt-4">
                <Link href="/premium">
                  <Button size="sm" className="gap-2">
                    <Headphones className="w-4 h-4" />
                    Listen
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Right Card */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-center">Community</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col space-y-4">
              <p className="text-sm text-muted-foreground text-center flex-1">
                Connect with fellow music lovers, share playlists, and discover what others are listening to.
              </p>
              <div className="flex justify-center">
                <Image
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  src="/placeholder.svg"
                  alt="Community"
                  width={200}
                  height={150}
                />
              </div>
              <div className="flex justify-center mt-auto pt-4">
                <Link href="/community">
                  <Button size="sm" className="gap-2">
                    <HandMetal className="w-4 h-4" />
                    Join
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
