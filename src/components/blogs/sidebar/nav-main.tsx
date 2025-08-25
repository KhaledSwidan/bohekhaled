'use client';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavMainProps } from '@/types/blogs';
import { Link } from 'react-router-dom';

export function NavMain({ items }: NavMainProps) {
  return (
    <SidebarGroup className='px-2'>
      <SidebarGroupLabel className='text-zinc-400 font-bold text-xs uppercase tracking-wider mb-3 px-2'>
        Platform
      </SidebarGroupLabel>
      <SidebarMenu className='space-y-1'>
        {items.map((item, idx) => (
          <SidebarMenuItem key={item.title ?? idx}>
            <SidebarMenuButton
              tooltip={item.title}
              className='hover:bg-gradient-to-r hover:from-zinc-800/50 hover:to-slate-800/30 transition-all duration-300 rounded-xl border border-transparent hover:border-zinc-700/30 group'
            >
              <Link
                to={item.url}
                className='flex items-center gap-3 text-zinc-300 font-medium w-full hover:text-zinc-100 transition-colors'
              >
                {item.icon && (
                  <div className='flex items-center justify-center rounded-lg bg-gradient-to-br from-zinc-800 to-slate-900 group-hover:from-zinc-700 group-hover:to-slate-800 transition-all duration-300 shadow-sm'>
                    <item.icon
                      size={16}
                      className='text-zinc-400 group-hover:text-zinc-200 transition-colors'
                    />
                  </div>
                )}
                <span className='truncate'>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
