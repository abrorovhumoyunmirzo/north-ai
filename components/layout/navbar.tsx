"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { title: "Features", href: "#features" },
  { title: "How it works", href: "#how-it-works" },
  { title: "About", href: "#about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <Logo />
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Right: Desktop Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" asChild className="text-neutral-600 hover:text-neutral-900">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button size="sm" asChild className="bg-neutral-900 text-white shadow-sm hover:bg-neutral-800">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile: Hamburger Button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-neutral-600 hover:text-neutral-900"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-200 bg-white px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-neutral-100">
            <Button variant="outline" asChild className="w-full justify-center">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="w-full justify-center bg-neutral-900 text-white hover:bg-neutral-800">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}