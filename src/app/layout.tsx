import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Dev-João | Desenvolvedor Front-End',
  description:
    'Desenvolvedor Front-End especializado em React, TypeScript, Next.js e TailwindCSS. Mais de 4 anos de experiência criando interfaces modernas e escaláveis.',
  keywords: [
    'desenvolvedor front-end',
    'react',
    'nextjs',
    'typescript',
    'tailwindcss',
    'joão paulo goulart cavalheiro',
  ],
  authors: [{ name: 'João Paulo Goulart Cavalheiro' }],
  creator: 'João Paulo Goulart Cavalheiro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
