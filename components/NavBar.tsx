"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "./ui/drawer";
import { Menu, X } from "lucide-react";
import tedxuiucLogo from "@/public/images/tedxuiuc-logo.png";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <div className="w-full h-16 px-4 py-2 flex items-center justify-between backdrop-blur-sm bg-white/80 shadow-sm sticky top-0 z-30">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image src={tedxuiucLogo} alt="tedxuiuc logo" width={150} height={150} />
        </Link>
        <div className="hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="24" fill="none" className="h-6">
            <g clipPath="url(#ted-white-logo_svg__a)">
              <path fill="#000" fillRule="evenodd" d="M20.966 0v6.151h-6.763V24h-7.44V6.151H0V0zM42.45 0v6.141l-12.918.01v2.946H42.45v5.73l-12.918-.009v3.03H42.45V24H22.092V0zm13.446 0c8.048 0 10.888 5.916 10.888 11.967 0 7.36-3.922 12.033-12.343 12.033H43.689V0zm-2.401 6.151h-2.367V17.85h2.908c4.633 0 5.31-3.731 5.31-5.983 0-1.513-.474-5.715-5.851-5.715" clipRule="evenodd"></path>
            </g>
            <defs>
              <clipPath id="ted-white-logo_svg__a">
                <path fill="#000" d="M0 0h67v24H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center">
        <nav className="mr-4">
          {siteConfig.nav.map((item) => (
            <Button key={item.href} variant="link" className={cn("hover:text-[#c90425]", pathname === item.href && "text-[#e70328] hover:text-[#c90425]")} asChild>
              <Link href={item.href}>{item.title}</Link>
            </Button>
          ))}
        </nav>
        <div className="space-x-4">
          <Button variant="secondary" asChild>
            <Link href="/details">Details</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tickets">Get Tickets</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        ...drawer goes here.
      </div>
    </div>
  )
}
