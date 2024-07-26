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
      <head>
        <meta
          property='og:title'
          content='Jhonatan Sarmento - Desenvolvedor Full Stack'
        />
        <meta
          property='og:description'
          content='Portfólio de Jhonatan Sarmento, Desenvolvedor Full Stack especializado em React, Angular, Node.js, e mais. Confira meus projetos e experiências.'
        />
        <meta property='og:url' content='https://www.jsarmento.dev/' />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico?v=4' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png?v=4' />
        <link rel='shortcut icon' href='apple-touch-icon.png' />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}
