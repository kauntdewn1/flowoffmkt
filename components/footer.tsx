import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80">
              <Zap className="h-6 w-6" />
              <span className="text-xl font-bold">FlowOFF</span>
            </Link>
            <p className="text-sm text-foreground">
              Connecting brands with the future through Web3 marketing, community
              growth, and cutting-edge digital strategies.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Stay updated with the latest in Web3 marketing.
            </p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mr-2"
              />
              <Button type="submit" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FlowOFF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}