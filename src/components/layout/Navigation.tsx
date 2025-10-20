'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "logoText",
 *   "text-1": "signInButton",
 *   "link-0": "signInHref",
 *   "text-2": "getStartedButton",
 *   "link-1": "getStartedHref"
 * }
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  isTransparent?: boolean;
  lightText?: boolean;
  logoText?: string;
  signInButton?: string;
  signInHref?: string;
  getStartedButton?: string;
  getStartedHref?: string;
}

export default function Navigation({
  isTransparent = false,
  lightText = false,
  logoText = 'TechFlow',
  signInButton = 'Sign In',
  signInHref = '/signin',
  getStartedButton = 'Start Free Trial',
  getStartedHref = '/signup',
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Only track scroll if transparent mode is enabled
  useEffect(() => {
    if (!isTransparent) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransparent]);

  // Smart routing handlers
  const handleSignIn = () => {
    if (signInHref.startsWith('http://') || signInHref.startsWith('https://')) {
      window.open(signInHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(signInHref);
    }
  };

  const handleGetStarted = () => {
    if (getStartedHref.startsWith('http://') || getStartedHref.startsWith('https://')) {
      window.open(getStartedHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(getStartedHref);
    }
  };

  // Navigation items
  const navigation = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full',
        // DEFAULT: Normal nav with border and background
        !isTransparent && 'border-b bg-background/80 backdrop-blur-md',
        // TRANSPARENT MODE: Only when isTransparent is true
        isTransparent && !isScrolled && 'bg-transparent border-transparent',
        isTransparent && isScrolled && 'bg-background/80 backdrop-blur-md border-b',
        // Smooth transitions when switching states
        'transition-all duration-300'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  {logoText.charAt(0)}
                </span>
              </div>
              <span
                className={cn(
                  'font-bold text-xl transition-colors',
                  // Only apply light text in transparent mode when not scrolled
                  isTransparent && !isScrolled && lightText ? 'text-white' : 'text-foreground'
                )}
              >
                <span data-editable="logoText">{logoText}</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md',
                    // DEFAULT: Normal text colors
                    (!isTransparent || isScrolled) &&
                      'text-muted-foreground hover:text-accent-foreground hover:bg-accent',
                    // TRANSPARENT MODE: Light text only when transparent and not scrolled
                    isTransparent &&
                      !isScrolled &&
                      lightText &&
                      'text-white/90 hover:text-white hover:bg-white/10',
                    isTransparent &&
                      !isScrolled &&
                      !lightText &&
                      'text-muted-foreground hover:text-accent-foreground hover:bg-accent/50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant={isTransparent && !isScrolled && lightText ? 'ghost' : 'ghost'}
              size="sm"
              onClick={handleSignIn}
              data-editable-href="signInHref"
              data-href={signInHref}
              className={cn(
                isTransparent &&
                  !isScrolled &&
                  lightText &&
                  'text-white hover:text-white hover:bg-white/10'
              )}
            >
              <span data-editable="signInButton">{signInButton}</span>
            </Button>
            <Button
              size="sm"
              className={cn(
                'group',
                isTransparent && !isScrolled && lightText && 'bg-white text-black hover:bg-white/90'
              )}
              onClick={handleGetStarted}
              data-editable-href="getStartedHref"
              data-href={getStartedHref}
            >
              <span data-editable="getStartedButton">{getStartedButton}</span>
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={cn(
                isTransparent &&
                  !isScrolled &&
                  lightText &&
                  'text-white hover:text-white hover:bg-white/10'
              )}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div
            className={cn(
              'px-2 pt-2 pb-3 space-y-1 border-t',
              isTransparent && !isScrolled ? 'border-white/20' : 'border-border'
            )}
          >
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md',
                  (!isTransparent || isScrolled) &&
                    'text-muted-foreground hover:text-accent-foreground hover:bg-accent',
                  isTransparent &&
                    !isScrolled &&
                    lightText &&
                    'text-white/90 hover:text-white hover:bg-white/10',
                  isTransparent &&
                    !isScrolled &&
                    !lightText &&
                    'text-muted-foreground hover:text-accent-foreground hover:bg-accent/50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <Button
                variant="ghost"
                className={cn(
                  'justify-start',
                  isTransparent &&
                    !isScrolled &&
                    lightText &&
                    'text-white hover:text-white hover:bg-white/10'
                )}
                onClick={handleSignIn}
                data-editable-href="signInHref"
                data-href={signInHref}
              >
                <span data-editable="signInButton">{signInButton}</span>
              </Button>
              <Button
                className={cn(
                  'justify-start group',
                  isTransparent &&
                    !isScrolled &&
                    lightText &&
                    'bg-white text-black hover:bg-white/90'
                )}
                onClick={handleGetStarted}
                data-editable-href="getStartedHref"
                data-href={getStartedHref}
              >
                <span data-editable="getStartedButton">{getStartedButton}</span>
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
