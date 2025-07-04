import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boombox Design System Playground',
  description: 'Testing ground for Boombox Design System components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 