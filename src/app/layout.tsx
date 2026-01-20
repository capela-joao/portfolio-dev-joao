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

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://portfolio.dev-joao.app.br',
    title: 'João Paulo Goulart Cavalheiro | Desenvolvedor Front-End',
    description:
      'Desenvolvedor Front-End com 4+ anos de experiência em React, TypeScript, Next.js e TailwindCSS',
    siteName: 'Dev-João Portfolio',
    images: [
      {
        url: 'https://portfolio.dev-joao.app.br/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'João Paulo Goulart - Desenvolvedor Front-End',
        type: 'image/jpeg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-foreground antialiased font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
