import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <div className="w-full h-16 px-4 py-2 flex items-center justify-between backdrop-blur-sm bg-white/80 shadow-sm">
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
          <div className="flex items-center">
            <nav className="mr-4">
              <Button variant="link" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/speakers">Speakers</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/sponsors">Sponsors</Link>
              </Button>
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
        </div>
      </header>
      <main className="">
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
