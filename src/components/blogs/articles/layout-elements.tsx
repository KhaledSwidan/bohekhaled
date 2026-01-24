import type { ReactNode } from "react";

// ==================== Layout Components ====================
export function BlogGrid({ children }: { children: ReactNode }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>{children}</div>
  );
}

export function BlogCard({
  title,
  children,
  icon,
  iconColor = 'text-slate-400',
}: {
  title: string;
  children: ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor?: string;
}) {
  return (
    <div className='border rounded-lg p-4 flex flex-col gap-2'>
      {icon &&
        (() => {
          const Icon = icon;
          return <Icon className={`w-6 h-6 ${iconColor}`} aria-hidden='true' />;
        })()}
      <h4 className='font-bold text-slate-200'>{title}</h4>
      <div>{children}</div>
    </div>
  );
}
