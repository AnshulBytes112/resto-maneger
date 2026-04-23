'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingCart,
  Receipt,
  Users,
  Calendar,
  UtensilsCrossed,
  Package,
  CreditCard,
  FileBarChart,
  Settings,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { UI_CONTENT } from '@/lib/content';

const { user } = UI_CONTENT.navigation;

const userNavItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: user.dashboard },
  { href: '/pos', icon: ShoppingCart, label: user.pos },
  { href: '/orders', icon: Receipt, label: user.orders },
  { href: '/tables', icon: UtensilsCrossed, label: user.tables },
  { href: '/reservations', icon: Calendar, label: user.reservations },
  { href: '/inventory', icon: Package, label: user.inventory },
  { href: '/customers', icon: Users, label: user.customers },
  { href: '/payments', icon: CreditCard, label: user.payments },
  { href: '/reports', icon: FileBarChart, label: user.reports },
];

export function UserSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-card overflow-y-auto scrollbar-hide py-4">
      {/* Brand */}
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 text-primary-foreground font-black text-xl italic">
          B
        </div>
        <div>
          <h2 className="text-lg font-black tracking-tighter text-foreground">FINBOOKS</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground -mt-1">RestoPOS</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 space-y-1">
        {userNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className={cn('mr-3 h-5 w-5', isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground')} />
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Nav */}
      <div className="px-4 mt-8 pb-4">
        <Link
          href="/settings"
          className="flex items-center px-4 py-3 text-sm font-medium text-muted-foreground rounded-xl hover:bg-muted hover:text-foreground transition-all"
        >
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </Link>
      </div>
    </div>
  );
}
