import * as React from 'react';
import { NavMain } from '@/components/blogs/sidebar/nav-main';
// import { NavProjects } from '@/components/blogs/sidebar/nav-projects';
import { NavUser } from '@/components/blogs/sidebar/nav-user';
import { TeamSwitcher } from '@/components/blogs/sidebar/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { data } from '@/db/blogs';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader className='bg-gradient-to-r from-slate-950 via-zinc-950 to-neutral-950 border-b border-zinc-800/50'>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className='bg-gradient-to-br from-slate-950 via-zinc-900 to-neutral-950 backdrop-blur-xl border-r border-zinc-800/30 sidebar-custom-scroll'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-neutral-900/20 pointer-events-none' />
        <div className='relative z-10'>
          <NavMain items={data.navMain} />
          {/* <NavProjects projects={data.projects} /> */}
        </div>
      </SidebarContent>
      <SidebarFooter className='bg-gradient-to-t from-stone-950 via-zinc-950 to-slate-950 border-t border-zinc-800/50'>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
