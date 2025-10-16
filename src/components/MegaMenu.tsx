"use client";

import Link from "next/link";
import { useState } from "react";

interface MenuSection {
  title: string;
  href: string;
  description: string;
}

interface MegaMenuItem {
  label: string;
  href: string;
  sections?: MenuSection[];
}

const menuItems: MegaMenuItem[] = [
  {
    label: "About",
    href: "/about",
    sections: [
      { title: "Mission & Vision", href: "/about#mission", description: "Our purpose and direction" },
      { title: "Values", href: "/about#values", description: "Principles that guide us" },
      { title: "Founders", href: "/about#founders", description: "Meet the leadership team" },
      { title: "Part of CyberGlobal", href: "/about#cyberglobal", description: "Our parent company" },
    ]
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    sections: [
      { title: "Financial Services", href: "/case-studies#finance", description: "KYC automation" },
      { title: "Healthcare", href: "/case-studies#healthcare", description: "Regulatory Q&A" },
      { title: "Software", href: "/case-studies#software", description: "Workflow automation" },
      { title: "Business Impact", href: "/business-impact", description: "How AI drives value" },
    ]
  },
  {
    label: "AI Services",
    href: "/services",
    sections: [
      { title: "Document Processing", href: "/services#document-processing", description: "IDP, OCR, extraction" },
      { title: "On-Prem LLM", href: "/services#onprem-llm", description: "Private AI deployment" },
      { title: "Document Search", href: "/services#search", description: "RAG, semantic search" },
      { title: "Workflow Automation", href: "/services#automation", description: "n8n + Python" },
      { title: "Legal & Compliance", href: "/services#compliance", description: "Audit-ready AI" },
    ]
  },
  {
    label: "Products",
    href: "/products/pentx",
  },
  {
    label: "Partners",
    href: "/partners",
    sections: [
      { title: "CyberGlobal", href: "/partners#cyberglobal", description: "Digital transformation" },
      { title: "PentX AI", href: "/partners#pentx", description: "Security testing" },
      { title: "CTDefense", href: "/partners#ctdefense", description: "Cyber defense" },
      { title: "Cube-Enterprise", href: "/partners#cube", description: "Business intelligence" },
      { title: "CyberLegal", href: "/partners#cyberlegal", description: "Legal tech" },
    ]
  },
];

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  // Determine if menu should align right (for last 2 items)
  const getMenuAlignment = (label: string) => {
    const index = menuItems.findIndex(item => item.label === label);
    const isRightSide = index >= menuItems.length - 2; // Last 2 items
    return isRightSide;
  };

  return (
    <nav aria-label="Main navigation" className="hidden lg:block relative">
      <ul className="flex items-center gap-8">
        {menuItems.map((item) => {
          const alignRight = getMenuAlignment(item.label);
          
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.sections && setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                prefetch={true}
                className="text-sm text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-sm px-1 py-2 flex items-center gap-1"
              >
                <span>{item.label}</span>
                {item.sections && (
                  <svg 
                    className={`w-4 h-4 transition-transform ${activeMenu === item.label ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Horizontal Mega Menu */}
              {item.sections && activeMenu === item.label && (
                <div className={`absolute top-full pt-4 z-50 ${alignRight ? 'right-0' : 'left-0'}`}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 to-violet-500/30 rounded-2xl blur-xl"></div>
                  <div className="relative rounded-xl border border-white/20 backdrop-blur-2xl shadow-2xl" style={{ backgroundColor: 'rgba(11, 11, 15, 0.95)' }}>
                    {/* Header */}
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-white/20">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="font-semibold text-lg text-white">{item.label}</div>
                    </div>
                    
                    {/* Grid of sections */}
                    <div 
                      className="grid gap-3 p-6"
                      style={{ 
                        gridTemplateColumns: `repeat(${Math.min(item.sections.length, 2)}, 1fr)`,
                        minWidth: item.sections.length > 3 ? '600px' : '400px'
                      }}
                    >
                      {item.sections.map((section) => (
                        <Link
                          key={section.title}
                          href={section.href}
                          prefetch={true}
                          className="block p-4 rounded-lg hover:bg-white/10 transition-all group/link border border-transparent hover:border-blue-400/30"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 rounded-full bg-blue-400 group-hover/link:bg-violet-400 transition-colors"></div>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-white group-hover/link:text-blue-400 transition-colors mb-1">
                                {section.title}
                              </div>
                              <div className="text-sm text-neutral-300 leading-relaxed">
                                {section.description}
                              </div>
                            </div>
                            <svg 
                              className="w-4 h-4 text-neutral-500 group-hover/link:text-blue-400 group-hover/link:translate-x-1 transition-all flex-shrink-0 mt-1" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              )}
            </li>
          );
        })}
        
        {/* Contact Button */}
        <li>
          <Link
            href="/contact"
            prefetch={true}
            className="inline-flex items-center rounded-lg border border-white/20 hover:border-blue-400/50 px-4 py-2 text-sm font-medium hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

