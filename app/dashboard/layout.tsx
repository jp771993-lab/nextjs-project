'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Icon = ({ name, active }: { name: string; active?: boolean }) => {
  const color = active ? 'text-figma-primary' : 'text-[#8b8d97] group-hover:text-[#1f3161]'
  const strokeW = active ? '2.5' : '2'

  switch (name) {
    case 'Dashboard':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>
    case 'Content Repository':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    case 'Trust':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    case 'FTUE':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    case 'Devices':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    case 'Coach Review':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    case 'Tags':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
    case 'Admin Management':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/><path d="M12 11v4"/></svg>
    case 'Affiliate Marketing':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
    case 'Reports':
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    default:
      return <svg className={`w-5 h-5 ${color} transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
  }
}

const SIDEBAR_ITEMS = [
  { name: 'Dashboard', href: '/dashboard', icon: 'Dashboard' },
  { name: 'SYSTEM MANAGEMENT', isHeader: true },
  { name: 'Content Repository', href: '/dashboard/content', icon: 'Content Repository' },
  { name: 'Trust', href: '/dashboard/trust', icon: 'Trust' },
  { name: 'FTUE', href: '/dashboard/ftue', icon: 'FTUE' },
  { name: 'Devices', href: '/dashboard/devices', icon: 'Devices' },
  { name: 'Coach Review', href: '/dashboard/coach', icon: 'Coach Review' },
  { name: 'Tags', href: '/dashboard/tags', icon: 'Tags' },
  { name: 'Admin Management', href: '/dashboard/admin', icon: 'Admin Management' },
  { name: 'Affiliate Marketing', href: '/dashboard/affiliates', icon: 'Affiliate Marketing' },
  { name: 'Reports', href: '/dashboard/reports', icon: 'Reports' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-[#fafafa] overflow-hidden font-sans">
      {/* Sidebar Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-indigo-900/20 backdrop-blur-sm lg:hidden transition-opacity" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation - Exact 280px width from Figma standard desktop sizes */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-[260px] bg-white flex flex-col transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center gap-[12px] px-[24px] pt-[28px] pb-[16px] shrink-0 bg-white">
          <div className="w-[42px] h-[42px] rounded-[10px] bg-figma-primary flex justify-center items-center text-white font-bold text-[20px]">
            C
          </div>
          <div>
            <h1 className="text-[16px] font-bold text-figma-text-dark tracking-tight leading-tight">Clean Interface</h1>
            <p className="text-[11px] font-semibold text-[#848a95] uppercase tracking-widest mt-0.5">Horizontal Dashboard</p>
          </div>
        </div>

        {/* Sidebar Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-[16px] py-[24px] custom-scrollbar bg-white">
          <nav className="space-y-[4px]">
            {SIDEBAR_ITEMS.map((item, idx) => {
              if (item.isHeader) {
                return (
                  <div key={idx} className="px-[12px] pt-[24px] pb-[8px]">
                    <p className="text-[12px] font-bold tracking-wider text-[#9a99a2]">
                      {item.name}
                    </p>
                  </div>
                )
              }

              const isActive = pathname === item.href
              return (
                <Link
                  key={idx}
                  href={item.href || '#'}
                  className={`group flex items-center gap-[12px] px-[12px] py-[10px] rounded-[8px] transition-all relative ${
                    isActive 
                      ? 'bg-[#eef0fa] text-figma-primary font-bold shadow-none' 
                      : 'text-[#8b8d97] hover:bg-[#fafafa] hover:text-[#1f3161] font-medium'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-[0px] top-1/2 -translate-y-1/2 w-[4px] h-[32px] bg-figma-primary rounded-r-[4px]"></div>
                  )}
                  <Icon name={item.icon as string} active={isActive} />
                  <span className="text-[14px] leading-tight">{item.name}</span>
                  
                  {item.name === 'Admin Management' && (
                    <span className="ml-auto bg-[#ffebeb] text-figma-accent-red py-[2px] px-[8px] rounded-[12px] text-[10px] font-bold">New</span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
        
        {/* Sidebar Footer User Info */}
        <div className="px-[24px] py-[24px] bg-white shrink-0">
          <div className="rounded-[16px] p-[16px] flex flex-col gap-[16px] bg-[#fafafa] border border-[#e4e5e7]/60">
            <div className="flex items-center gap-[12px]">
              <div className="w-[38px] h-[38px] rounded-full bg-[#fef8ed] text-figma-primary flex items-center justify-center font-bold text-[14px] relative shrink-0">
                U
                <span className="absolute bottom-[2px] right-[2px] w-[8px] h-[8px] bg-[#00c853] border-[1.5px] border-white rounded-full"></span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-figma-text-dark truncate">Esther Howard</p>
                <p className="text-[11px] text-[#8b8d97] truncate">Admin Privileges</p>
              </div>
              <svg className="w-[18px] h-[18px] text-[#8b8d97] shrink-0 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#fafafa]">
        
        {/* Header Ribbon exactly matching Figma */}
        <header className="h-[80px] bg-white border-b border-[#f5f5f5] px-8 flex items-center justify-between shrink-0 sticky top-0 z-10">
          <div className="flex items-center gap-[16px]">
            <button 
              className="lg:hidden p-2 text-[#8b8d97] hover:bg-[#fafafa] rounded-[8px] transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>

            {/* Exact Breadcrumb Style from Figma Image */}
            <nav className="hidden sm:flex text-[13px] font-medium items-center gap-[8px]">
              <span className="text-[#8b8d97] hover:text-figma-primary cursor-pointer flex items-center gap-[6px]">
                <svg className="w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Home
              </span>
              <svg className="w-[14px] h-[14px] text-[#dad2dd]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              <span className="text-figma-text-dark font-semibold bg-[#eef0fa]/50 px-[12px] py-[6px] rounded-full">User Dashboard</span>
            </nav>
          </div>

          <div className="flex items-center gap-[24px]">
            <button className="relative text-[#8b8d97] hover:text-figma-primary transition-colors">
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span className="absolute top-[0px] right-[0px] w-[8px] h-[8px] bg-figma-accent-red rounded-full border-[1.5px] border-white"></span>
            </button>
            <button className="relative text-[#8b8d97] hover:text-figma-primary transition-colors">
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span className="absolute top-[0px] right-[2px] w-[8px] h-[8px] bg-figma-accent-red rounded-full border-[1.5px] border-white"></span>
            </button>
          </div>
        </header>

        {/* Dashboard Content Container */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
