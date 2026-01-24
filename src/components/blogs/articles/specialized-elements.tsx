import type { ReactNode } from 'react';
import { contentStyle } from './styled-components';
import { AlertTriangle, CheckCircle2, Lightbulb } from 'lucide-react';

// ==================== Specialized Components ====================
export function CodeBlock({
  children,
  language = 'javascript',
  showLineNumbers = false,
}: {
  children: string;
  language?: string;
  showLineNumbers?: boolean;
}) {
  const lines = children.split('\n');

  return (
    <div className='relative group'>
      <pre className={`${contentStyle.code} ${showLineNumbers ? 'pl-12' : ''}`}>
        {showLineNumbers && (
          <div className='absolute left-0 top-0 bottom-0 w-10 bg-slate-700/50 flex flex-col text-slate-500 text-sm pt-4'>
            {lines.map((_, index) => (
              <span key={index} className='px-2 leading-6'>
                {index + 1}
              </span>
            ))}
          </div>
        )}
        <code className={`language-${language}`}>{children}</code>
      </pre>

      {/* Copy button */}
      <button
        onClick={() => navigator.clipboard.writeText(children)}
        className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600 text-slate-300 px-2 py-1 rounded text-xs'
        aria-label='نسخ الكود'
      >
        نسخ
      </button>
    </div>
  );
}

export function InfoBox({
  type = 'info',
  title,
  children,
}: {
  type?: 'info' | 'warning' | 'success';
  title?: string;
  children: ReactNode;
}) {
  const styles = {
    info: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    warning: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  };

  const icons = {
    info: Lightbulb,
    warning: AlertTriangle,
    success: CheckCircle2,
  };

  const Icon = icons[type];

  return (
    <div className={`border rounded-lg p-4 my-4 ${styles[type]}`}>
      {title && (
        <div className='flex items-center gap-2 font-semibold mb-2'>
          <Icon className='w-5 h-5' />
          {title}
        </div>
      )}
      <div className='text-sm'>{children}</div>
    </div>
  );
}
