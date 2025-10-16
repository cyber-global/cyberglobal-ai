"use client";
import Link from "next/link";
import Image from "next/image";
import { MegaMenu } from "./MegaMenu";
import { events } from "@/lib/events";

export const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10" style={{ backgroundColor: 'rgba(11, 11, 15, 0.7)' }}>
    <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
      <Link 
        href="/" 
        onClick={() => events.linkClick("/", "Logo - Header")}
        className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-sm"
      >
        <Image
          src="/Logo WHITE - CyberGlobal AI.png"
          alt="CyberGlobal AI"
          width={180}
          height={40}
          className="h-8 w-auto"
          priority
        />
      </Link>
      <MegaMenu />
    </div>
  </header>
);

