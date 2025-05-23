import '@/app/ui/global.css';
import { Inter } from 'next/font/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='{`${inter.classname} antialised`}'>{children}</body>
    </html>
  );
}
