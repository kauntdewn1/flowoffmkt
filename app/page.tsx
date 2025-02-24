import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="Marketing na Blockchain - FlowOFF ajuda empresas a expandirem sua presença no digital com Web3 e inovação." />
        <meta name="keywords" content="Web3, Blockchain, Marketing Digital, Flow360, Criação de Tokens, Tokenização" />
        <meta name="author" content="FlowOFF" />
        <title>FlowOFF - Marketing na Blockchain</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Brain,
  Users,
  Rocket,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Strategic Planning',
    description: 'Web3 & Web2 integration strategies tailored to your brand',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Community Growth',
    description: 'Build and nurture engaged Web3 communities',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Launch Campaigns',
    description: 'Successful token and NFT launch strategies',
    icon: Rocket,
    gradient: 'from-pink-500 to-orange-500',
  },
  {
    title: 'Analytics',
    description: 'Blockchain-based analytics and tracking',
    icon: BarChart3,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Security',
    description: 'Secure smart contract integration',
    icon: Shield,
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Innovation',
    description: 'Cutting-edge Web3 marketing solutions',
    icon: Zap,
    gradient: 'from-purple-500 to-indigo-500',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Hero animations
    const heroTimeline = gsap.timeline({
      defaults: { ease: 'power4.out' },
    });

    heroTimeline
      .from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
      })
      .from('.hero-description', {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.6,
      }, '-=0.3');

    // Service cards animation
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top center',
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    });

    // Features animation
    gsap.from('.feature-item', {
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top center',
      },
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-blue-900/30" />
        <div className="hero-content relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
            Marketing na Blockchain:
            <br />
            Elevate Your Brand with Web3
          </h1>
          <p className="hero-description mt-6 text-xl text-foreground max-w-3xl mx-auto">
            We connect brands with the future through Web3 marketing, community
            growth, tokenization, and cutting-edge digital strategies.
          </p>
          <div className="hero-cta mt-10">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 glow animate-float"
            >
              Let's Build the Future Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services-section py-24 bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card p-8 bg-card/50 backdrop-blur-sm card-hover relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <service.icon className="h-12 w-12 mb-4 text-primary animate-float" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="group-hover:text-primary transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="features-section py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">
            Why Choose FlowOFF?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              {[
                'Deep expertise in Web3 & Web2 marketing',
                'Blockchain-native campaigns & analytics',
                'Automation & gamification for engagement',
                'Decentralized community growth strategies',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="feature-item flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center animate-float">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground">{feature}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl" />
              <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-3xl card-hover">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Ready to Get Started?</h3>
                <p className="text-foreground mb-8">
                  Transform your brand's digital presence with our Web3 marketing
                  expertise. Let's create something extraordinary together.
                </p>
                <Button size="lg" className="glow">
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
