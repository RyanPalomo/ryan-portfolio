"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  FolderKanban,
  Home,
  Layers3,
  Mail,
  Moon,
  Sun,
  UserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Dock, { type DockItemData } from "@/components/ui/dock";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/technologies", label: "Technologies", icon: Layers3 },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(mountTimer);
  }, []);

  const items: DockItemData[] = navLinks.map(({ href, label, icon: Icon }) => ({
    href,
    label,
    icon: <Icon size={20} strokeWidth={1.9} />,
    active: href === "/" ? pathname === href : pathname.startsWith(href),
  }));

  items.push({
    label: theme === "dark" ? "Use light theme" : "Use dark theme",
    icon:
      mounted && theme === "light" ? (
        <Moon size={20} strokeWidth={1.9} />
      ) : (
        <Sun size={20} strokeWidth={1.9} />
      ),
    onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    separatorBefore: true,
  });

  return <Dock items={items} />;
}
