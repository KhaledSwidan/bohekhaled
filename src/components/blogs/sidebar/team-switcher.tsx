import * as React from 'react';
import { ChevronsUpDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import type { TeamSwitcherProps } from '@/types/blogs';

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-slate-800/50 data-[state=open]:text-zinc-100 hover:bg-slate-800/30 transition-all duration-300 backdrop-blur-sm border border-zinc-800/20 rounded-xl shadow-lg hover:shadow-zinc-900/50'
            >
              <div className='flex items-center justify-center w-10 h-10 rounded-xl text-zinc-100 shadow-inner bg-zinc-700 p-1'>
                <activeTeam.logo className='w-5 h-5' />
              </div>
              <div className='grid text-left text-sm leading-tight'>
                <span className='truncate font-bold text-zinc-100'>
                  {activeTeam.name}
                </span>
                <span className='truncate text-xs text-zinc-400 font-medium'>
                  {activeTeam.plan}
                </span>
              </div>
              <ChevronsUpDown className='ml-auto text-zinc-400 hover:text-zinc-200 transition-colors' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl bg-gradient-to-b from-zinc-800 to-slate-900 border border-zinc-700/50 backdrop-blur-xl shadow-2xl'
            align='start'
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className='text-xs text-zinc-400 font-semibold px-3 py-2'>
              What's Next
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name ?? index}
                onClick={() => setActiveTeam(team)}
                className='gap-3 p-3 hover:bg-zinc-800/50 rounded-lg mx-1 transition-all duration-200 cursor-pointer'
              >
                <div className='flex size-8 items-center justify-center rounded-lg border border-zinc-700 bg-gradient-to-br from-zinc-800 to-slate-900'>
                  <team.logo className='size-4 shrink-0 text-zinc-300' />
                </div>
                <span className='text-zinc-200 font-medium'>{team.name}</span>
                <DropdownMenuShortcut className='text-zinc-500'>
                  ⌘{index + 1}
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
