"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../ui/Logo";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 bg-black 
                 lg:px-16 h-16 flex items-center justify-between"
    >
      <Link className="flex items-center justify-center" href="/#">
        <Logo />
      </Link>
      <NavDesktop />
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-16">
          <NavMobile setMobileMenuOpen={setMobileMenuOpen} />
        </div>
      )}
    </header>
  );
}
