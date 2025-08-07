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
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, idx) => (
          <SidebarMenuItem key={item.title ?? idx}>
            <SidebarMenuButton tooltip={item.title}>
              <Link to={item.url} className='flex justify-between'>
                {item.icon && (
                  <item.icon size={18} className='flex items-center' />
                )}
                <span className='ml-3'>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
