import { Github, MoreHorizontal, Trash2, TvMinimalPlay } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import type { NavProjectsProps } from '@/types/blogs';

export function NavProjects({ projects }: NavProjectsProps) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className='group-data-[collapsible=icon]:hidden px-2'>
      <SidebarGroupLabel className='text-zinc-400 font-bold text-xs uppercase tracking-wider mb-3 px-2'>
        Projects
      </SidebarGroupLabel>
      <SidebarMenu className='space-y-2'>
        {projects.map((item, idx) => (
          <SidebarMenuItem key={item.name ?? idx} className='group'>
            <div className='flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-zinc-900/50 to-slate-900/30 border border-zinc-800/30 hover:border-zinc-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/20'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-gradient-to-r from-zinc-500 to-slate-400 shadow-sm'></div>
                <span className='text-zinc-200 font-medium truncate'>
                  {item.name}
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <DropdownMenuShortcut className='text-zinc-500 text-xs font-mono mr-3'>
                  ⌘{idx + 1}
                </DropdownMenuShortcut>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction
                      showOnHover
                      className='opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-zinc-700/50 rounded-lg mt-2'
                    >
                      <MoreHorizontal className='text-zinc-400 hover:text-zinc-200' />
                      <span className='sr-only'>More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className='w-48 rounded-xl bg-gradient-to-b from-zinc-900 to-slate-950 border border-zinc-700/50 backdrop-blur-xl shadow-2xl'
                    side={isMobile ? 'bottom' : 'right'}
                    align={isMobile ? 'end' : 'start'}
                  >
                    <DropdownMenuItem className='hover:bg-zinc-800/50 rounded-lg mx-1 cursor-pointer'>
                      <TvMinimalPlay className='text-emerald-400 mr-2' />
                      <a
                        href={item.urlLive}
                        className='text-zinc-200 hover:text-emerald-300'
                      >
                        Live Demo
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='hover:bg-zinc-800/50 rounded-lg mx-1 cursor-pointer'>
                      <Github className='text-blue-400 mr-2' />
                      <a
                        href={item.urlDemo}
                        className='text-zinc-200 hover:text-blue-300'
                      >
                        Source Code
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className='bg-zinc-700/50' />
                    <DropdownMenuItem className='hover:bg-red-900/20 rounded-lg mx-1 cursor-pointer'>
                      <Trash2 className='text-red-400 mr-2' />
                      <span className='text-zinc-200 hover:text-red-300'>
                        Delete Project
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
