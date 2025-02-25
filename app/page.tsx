"use client"; // Certifique-se de que está no topo

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Users,
  Rocket,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Strategic Planning",
    description: "Web3 & Web2 integration strategies tailored to your brand",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Community Growth",
    description: "Build and nurture engaged Web3 communities",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Launch Campaigns",
    description: "Successful token and NFT launch strategies",
    icon: Rocket,
    gradient: "from-pink-500 to-orange-500",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="relative">
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
          Marketing na Blockchain:
          <br />
          Elevate Your Brand with Web3
        </h1>
        <p className="hero-description mt-6 text-xl text-foreground max-w-3xl mx-auto">
          We connect brands with the future through Web3 marketing, community growth, tokenization, and cutting-edge digital strategies.
        </p>
      </section>
    </div>
  );
}
