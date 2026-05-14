"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";

type NavLink = {
  name: string;
  /** Shorter label for compact desktop UI; full `name` is always used on mobile and in `title` when set */
  shortLabel?: string;
  href: string;
  isHash: boolean;
  id: string;
};

function isLinkActive(pathname: string, href: string, isHash: boolean) {
  if (isHash) return false;
  return pathname === href;
}

function groupHasActive(pathname: string, links: NavLink[]) {
  return links.some((l) => isLinkActive(pathname, l.href, l.isHash));
}

type NavDropdownProps = {
  label: string;
  menuId: string;
  items: NavLink[];
  pathname: string;
  barSolid: boolean;
  isOpen: boolean;
  onToggle: () => void;
  align?: "start" | "end";
};

function NavDropdown({
  label,
  menuId,
  items,
  pathname,
  barSolid,
  isOpen,
  onToggle,
  align = "start",
}: NavDropdownProps) {
  const activeInGroup = groupHasActive(pathname, items);
  const muted = barSolid ? "text-white/90" : "text-white";
  const activeTrigger =
    activeInGroup || isOpen ? "text-[#f3e5ab]" : `${muted} hover:text-[#f3e5ab]`;

  return (
    <div className="relative">
      <button
        type="button"
        id={`nav-dropdown-${menuId}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`nav-dropdown-panel-${menuId}`}
        onClick={onToggle}
        className={`flex items-center gap-0.5 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeTrigger}`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 opacity-90 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div
          id={`nav-dropdown-panel-${menuId}`}
          role="menu"
          className={`absolute top-full z-[60] mt-2 min-w-[14.5rem] max-w-[min(18rem,calc(100vw-2rem)))] rounded-lg border border-[#d4af37]/35 bg-[#3a0607]/98 py-1 shadow-xl backdrop-blur-md ${
            align === "end" ? "right-0" : "left-0"
          }`}
        >
          {items.map((link) => {
            const active = isLinkActive(pathname, link.href, link.isHash);
            const display = link.shortLabel ?? link.name;
            return (
              <Link
                key={link.id}
                id={`${link.id}-dropdown`}
                role="menuitem"
                href={link.href}
                title={link.shortLabel ? link.name : undefined}
                onClick={onToggle}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-[#7b1113] font-semibold text-[#f3e5ab]"
                    : "text-white/90 hover:bg-white/10 hover:text-[#f3e5ab]"
                }`}
              >
                <span className="leading-snug">{display}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  const navLinks = useMemo((): NavLink[] => {
    return [
      { name: "Home", href: "/", isHash: false, id: "nav-home" },
      {
        name: "Student Profile",
        href: pathname === "/" ? "#profile" : "/#profile",
        isHash: true,
        id: "nav-profile",
      },
      {
        name: "Preface",
        href: pathname === "/" ? "#preface" : "/#preface",
        isHash: true,
        id: "nav-preface",
      },
      { name: "Acknowledgement", href: "/acknowledgement", isHash: false, id: "nav-ack" },
      { name: "Kick Off", href: "/kickoff", isHash: false, id: "nav-kickoff" },
      { name: "Maka-Diyos", href: "/maka-diyos", isHash: false, id: "nav-diyos" },
      { name: "Maka-Tao", href: "/maka-tao", isHash: false, id: "nav-tao" },
      {
        name: "Maka-Kalikasan",
        href: "/maka-kalikasan",
        isHash: false,
        id: "nav-kalikasan",
      },
      { name: "Maka-Bansa", href: "/maka-bansa", isHash: false, id: "nav-bansa" },
      { name: "Culminating", href: "/culminating", isHash: false, id: "nav-culminating" },
      {
        name: "Preparation for Completion and Graduation",
        shortLabel: "Completion & Graduation",
        href: "/preparation-completion-graduation",
        isHash: false,
        id: "nav-prep",
      },
      {
        name: "Assisting Students",
        href: "/assisting-students",
        isHash: false,
        id: "nav-assisting",
      },
      { name: "Garden", href: "/garden", isHash: false, id: "nav-garden" },
    ];
  }, [pathname]);

  const aboutLinks = useMemo(
    () => navLinks.filter((l) => ["nav-profile", "nav-preface", "nav-ack"].includes(l.id)),
    [navLinks],
  );
  const makaLinks = useMemo(
    () => navLinks.filter((l) => ["nav-diyos", "nav-tao", "nav-kalikasan", "nav-bansa"].includes(l.id)),
    [navLinks],
  );
  const completionLinks = useMemo(
    () =>
      navLinks.filter((l) =>
        ["nav-culminating", "nav-prep", "nav-assisting", "nav-garden"].includes(l.id),
      ),
    [navLinks],
  );

  const homeLink = navLinks[0]!;
  const kickoffLink = navLinks.find((l) => l.id === "nav-kickoff")!;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!openMenu && !mobileMenuOpen) return;
    const handlePointerDown = (e: MouseEvent | PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [openMenu, mobileMenuOpen]);

  const barSolid = scrolled || openMenu !== null || mobileMenuOpen;

  const desktopLinkClass = (active: boolean) =>
    `relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
      active
        ? "text-[#f3e5ab]"
        : barSolid
          ? "text-white/90 hover:text-[#f3e5ab]"
          : "text-white hover:text-[#f3e5ab]"
    }`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        barSolid
          ? "bg-[#7b1113]/95 py-3 shadow-lg backdrop-blur-md border-b border-[#d4af37]/30"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div ref={headerRef} className="w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            id="navbar-brand-logo"
            href="/"
            className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3e5ab] text-[#580a0b] shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="font-serif text-base font-bold tracking-wide text-white transition-colors group-hover:text-[#f3e5ab] sm:text-lg">
                M.A.K.A.
              </span>
              <span className="hidden text-[10px] tracking-widest text-white/80 uppercase sm:block sm:-mt-0.5">
                E-Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop: grouped nav */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            <Link
              id={homeLink.id}
              href={homeLink.href}
              className={desktopLinkClass(
                isLinkActive(pathname, homeLink.href, homeLink.isHash),
              )}
            >
              {homeLink.name}
              <span
                className={`absolute bottom-1 left-3 right-3 h-0.5 origin-left bg-[#d4af37] transition-transform duration-300 ${
                  isLinkActive(pathname, homeLink.href, homeLink.isHash)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            <NavDropdown
              label="About"
              menuId="about"
              items={aboutLinks}
              pathname={pathname}
              barSolid={barSolid}
              isOpen={openMenu === "about"}
              onToggle={() => setOpenMenu((prev) => (prev === "about" ? null : "about"))}
            />

            <Link
              id={kickoffLink.id}
              href={kickoffLink.href}
              className={desktopLinkClass(
                isLinkActive(pathname, kickoffLink.href, kickoffLink.isHash),
              )}
            >
              {kickoffLink.name}
              <span
                className={`absolute bottom-1 left-3 right-3 h-0.5 origin-left bg-[#d4af37] transition-transform duration-300 ${
                  isLinkActive(pathname, kickoffLink.href, kickoffLink.isHash)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            <NavDropdown
              label="Maka"
              menuId="maka"
              items={makaLinks}
              pathname={pathname}
              barSolid={barSolid}
              isOpen={openMenu === "maka"}
              onToggle={() => setOpenMenu((prev) => (prev === "maka" ? null : "maka"))}
            />

            <NavDropdown
              label="Completion"
              menuId="completion"
              items={completionLinks}
              pathname={pathname}
              barSolid={barSolid}
              isOpen={openMenu === "completion"}
              onToggle={() =>
                setOpenMenu((prev) => (prev === "completion" ? null : "completion"))
              }
              align="end"
            />
          </nav>

          <div className="lg:hidden">
            <button
              id="navbar-mobile-toggle"
              type="button"
              onClick={() => {
                setOpenMenu(null);
                setMobileMenuOpen((v) => !v);
              }}
              aria-expanded={mobileMenuOpen}
              aria-controls="navbar-mobile-panel"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="rounded-md p-2 text-white hover:text-[#f3e5ab] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/60"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="navbar-mobile-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
              className="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto border-b border-[#d4af37]/30 bg-[#580a0b] lg:hidden"
            >
              <div className="space-y-0.5 px-4 pt-2 pb-6 sm:px-6">
                <p className="px-3 pb-2 text-xs font-medium tracking-wider text-[#d4af37]/90 uppercase">
                  Menu
                </p>
                {navLinks.map((link) => {
                  const active = isLinkActive(pathname, link.href, link.isHash);
                  return (
                    <Link
                      key={link.id}
                      id={`${link.id}-mobile`}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                        active
                          ? "border-l-4 border-[#d4af37] bg-[#7b1113] font-semibold text-[#f3e5ab]"
                          : "text-white/90 hover:bg-white/5 hover:text-[#f3e5ab]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
