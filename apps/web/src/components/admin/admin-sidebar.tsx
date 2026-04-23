'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Settings, Package, FileText, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UI_CONTENT } from '@/lib/content';

const { admin } = UI_CONTENT.navigation;

const adminNavItems = [
  { href: '/admin', icon: LayoutDashboard, label: admin.dashboard },
  { href: '/admin/users', icon: Users, label: admin.users.title },
  { href: '/admin/inventory', icon: Package, label: admin.inventory },
  { href: '/admin/reports', icon: FileText, label: admin.reports },
  { href: '/admin/settings', icon: Settings, label: admin.settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full py-4">
      <div className="px-6 mb-8 mt-2">
        <h2 className="text-xl font-black tracking-tighter text-primary">FINBOOKS <span className="text-foreground">{admin.title}</span></h2>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {adminNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className={cn('mr-3 h-5 w-5', isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground')} />
              <span className="flex-1">{item.label}</span>
              {isActive && <ChevronRight className="h-4 w-4 opacity-70" />}
            </Link>
          );
        })}
      </nav>
      <div className="px-4 mt-auto">
        <div className="p-4 bg-muted/50 rounded-2xl">
          <p className="text-xs font-medium text-muted-foreground mb-1">Status</p>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">{UI_CONTENT.common.status.live}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
