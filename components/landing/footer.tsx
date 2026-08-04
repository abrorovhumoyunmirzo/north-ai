import Link from "next/link";
import { Logo } from "@/components/common/logo";

const footerLinks = [
  { title: "Features", href: "#features" },
  { title: "How it works", href: "#how-it-works" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "mailto:contact@northai.com" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/80 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Left: Logo & Tagline */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
              <Logo />
            </Link>
            <p className="text-sm text-neutral-500">
              Build your future with AI.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Right: Copyright */}
          <div className="text-sm text-neutral-500">
            <p>© 2026 North AI.</p>
            <p className="text-xs text-neutral-400">Built with ambition.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}