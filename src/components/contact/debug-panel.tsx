'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EMAILJS_CONFIG, validateEmailJSConfig } from '@/lib/emailjs';

export default function EmailJSDebugPanel() {
  const [showConfig, setShowConfig] = useState(false);
  const isConfigValid = validateEmailJSConfig();

  const configStatus = {
    SERVICE_ID: !!EMAILJS_CONFIG.SERVICE_ID,
    TEMPLATE_ID: !!EMAILJS_CONFIG.TEMPLATE_ID,
    PUBLIC_KEY: !!EMAILJS_CONFIG.PUBLIC_KEY,
    AUTOREPLY_TEMPLATE_ID: !!EMAILJS_CONFIG.AUTOREPLY_TEMPLATE_ID,
  };

  const testEmailJS = () => {
    console.log('🔍 Testing EmailJS Configuration...');
    console.log('Environment Variables:', {
      VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID
        ? '✓ Set'
        : '✗ Missing',
      VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        ? '✓ Set'
        : '✗ Missing',
      VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ? '✓ Set'
        : '✗ Missing',
      VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID: import.meta.env
        .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID
        ? '✓ Set'
        : '✗ Missing',
    });
    console.log('Config Status:', configStatus);
    console.log('Is Valid:', isConfigValid);
  };

  return (
    <Card className='w-full max-w-2xl mx-auto mt-8'>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          EmailJS Debug Panel (Vite)
          <Badge variant={isConfigValid ? 'default' : 'destructive'}>
            {isConfigValid ? 'Valid' : 'Invalid'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex gap-2'>
          <Button
            onClick={() => setShowConfig(!showConfig)}
            variant='outline'
            className='flex-1'
          >
            {showConfig ? 'Hide' : 'Show'} Configuration Status
          </Button>
          <Button onClick={testEmailJS} variant='secondary'>
            Test Config
          </Button>
        </div>

        {showConfig && (
          <div className='space-y-2'>
            {Object.entries(configStatus).map(([key, isSet]) => (
              <div
                key={key}
                className='flex justify-between items-center p-2 bg-slate-50 rounded'
              >
                <span className='font-mono text-sm'>VITE_{key}</span>
                <Badge variant={isSet ? 'default' : 'destructive'}>
                  {isSet ? 'Set' : 'Missing'}
                </Badge>
              </div>
            ))}
          </div>
        )}

        <div className='text-sm text-slate-600 space-y-2'>
          <p>
            <strong>Vite Environment Variables:</strong>
          </p>
          <div className='bg-slate-100 p-3 rounded font-mono text-xs'>
            <div>VITE_EMAILJS_SERVICE_ID=your_service_id</div>
            <div>VITE_EMAILJS_TEMPLATE_ID=your_template_id</div>
            <div>VITE_EMAILJS_PUBLIC_KEY=your_public_key</div>
            <div>VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_id</div>
          </div>
          <p>
            <strong>Common Issues:</strong>
          </p>
          <ul className='list-disc list-inside space-y-1'>
            <li>
              Environment variables must start with <code>VITE_</code>
            </li>
            <li>Restart dev server after adding env variables</li>
            <li>Check .env file is in project root</li>
            <li>EmailJS service not configured properly</li>
            <li>Template IDs don't match your EmailJS dashboard</li>
            <li>CORS issues (check EmailJS dashboard settings)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
