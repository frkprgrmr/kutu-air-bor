"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const menuItems: { href: string; label: string }[] = [
  { href: "/", label: "Beranda" },
  { href: "#about-us", label: "Tentang Kami" },
  { href: "#services", label: "Layanan Kami" },
  { href: "#pricing", label: "Biaya" },
];

export default function NavBar() {
  const [scrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handler = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
  }, []);

  useLayoutEffect(() => {
    handler();
  }, [handler]);

  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [handler]);

  return (
    <header
      className={cn(
        "fixed top-0 bg-transparent z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-background"
          : "from-black-800/0 to-black-800/50 bg-gradient-to-t"
      )}
    >
      <div className="container flex justify-between items-center mx-auto px-4 my-6">
        <Link href="/">
          <div className="relative w-[70px] h-12">
            <Image
              fill
              alt="Hydro Prime Services Logo"
              className="object-cover w-full h-full drop-shadow-md"
              src="./kutu-air-bor-logo.png"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="md:flex hidden">
          <NavigationMenuList>
            {menuItems.map((it) => (
              <NavigationMenuItem key={it.href}>
                <Link href={it.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-white font-bold text-md drop-shadow-md",
                      scrolled && "text-black"
                    )}
                  >
                    {it.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "text-white text-2xl focus:outline-none",
              scrolled && "text-black"
            )}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6">
          <ul className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg font-bold text-black hover:text-blue-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-black text-2xl focus:outline-none"
          >
            <HiOutlineX />
          </button>
        </div>
      )}
    </header>
  );
}
