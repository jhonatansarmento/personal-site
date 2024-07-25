import StyledComponentsRegistry from '@/lib/registry';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jhonatan Sarmento - Desenvolvedor Full Stack',
  description:
    'Portfólio de Jhonatan Sarmento, Desenvolvedor Full Stack especializado em React, Angular, Node.js, e mais. Confira meus projetos e experiências.',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}
