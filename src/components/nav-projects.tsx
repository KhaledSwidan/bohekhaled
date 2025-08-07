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
    <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item, idx) => (
          <SidebarMenuItem key={item.name ?? idx}>
            <h4 className='flex items-center justify-start'>
              <span className='ml-1'>{item.name}</span>
              <DropdownMenuShortcut className='mr-8'>
                ⌘{idx + 1}
              </DropdownMenuShortcut>
            </h4>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className='sr-only'>More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className='w-48 rounded-lg'
                side={isMobile ? 'bottom' : 'right'}
                align={isMobile ? 'end' : 'start'}
              >
                <DropdownMenuItem>
                  <TvMinimalPlay className='text-muted-foreground' />
                  <a href={item.urlLive}>Live Demo</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Github className='text-muted-foreground' />
                  <a href={item.urlDemo}>Source Code</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className='text-muted-foreground' />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
