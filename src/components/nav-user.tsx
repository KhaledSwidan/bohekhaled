'use client';

import { ChevronsUpDown, Facebook, Github, Linkedin } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import type { NavUserProps } from '@/types/blogs';

export function NavUser({ user }: NavUserProps) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-zinc-800/50 data-[state=open]:text-zinc-100 hover:bg-slate-800/30 transition-all duration-300 backdrop-blur-sm border border-zinc-800/20 rounded-xl shadow-lg hover:shadow-zinc-900/50 p-3'
            >
              <Avatar className='h-10 w-10 rounded-xl border-2 border-zinc-700 shadow-lg'>
                <AvatarImage
                  src={user.avatar}
                  alt={user.name}
                  className='rounded-xl'
                />
                <AvatarFallback className='rounded-xl bg-gradient-to-br from-zinc-700 to-slate-800 text-zinc-100 font-bold'>
                  KY
                </AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-bold text-zinc-100'>
                  {user.name}
                </span>
                <span className='truncate text-xs text-zinc-400 font-medium'>
                  BohemianCoder
                </span>
              </div>
              <ChevronsUpDown className='ml-auto size-4 text-zinc-400 hover:text-zinc-200 transition-colors' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl bg-gradient-to-b from-zinc-900 to-slate-950 border border-zinc-700/50 backdrop-blur-xl shadow-2xl'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='h-8 w-8 rounded-lg'>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>{user.name}</span>
                  <span className='truncate text-xs'>BohemianCoder</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <a href={user.facebook} className='flex items-center w-full'>
                  <Facebook className='mr-2 p-1 border border-zinc-600 rounded-md' />
                  Facebook
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href={user.github} className='flex items-center w-full'>
                  <Github className='mr-2 p-1 border border-zinc-600 rounded-md' />
                  Github
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href={user.linkdin} className='flex items-center w-full'>
                  <Linkedin className='mr-2 p-1 border border-zinc-600 rounded-md' />
                  LinkedIn
                </a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className='bg-zinc-800' />
            <DropdownMenuItem className='p-3 hover:bg-gradient-to-r hover:from-emerald-900/20 hover:to-violet-900/20 rounded-lg cursor-pointer transition-all duration-300'>
              <div className='text-center w-full'>
                <span className='text-transparent bg-gradient-to-r from-indigo-400 to-purple-800 bg-clip-text font-bold text-sm'>
                  Let's build something amazing together!
                </span>{' '}
                🚀
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
