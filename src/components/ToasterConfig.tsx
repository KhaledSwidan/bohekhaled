import { Toaster } from '@/components/ui/sonner';

const ToasterConfig = () => (
  <Toaster
    position='top-right'
    toastOptions={{
      duration: 4000,
      style: {
        background: 'hsl(var(--card))',
        color: 'hsl(var(--card-foreground))',
        border: '1px solid hsl(var(--border))',
      },
    }}
  />
);

export default ToasterConfig;
