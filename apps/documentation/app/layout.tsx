import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boombox Design System Documentation',
  description: 'Documentation for the Boombox Design System',
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