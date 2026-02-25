import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MQ – Importadores Directos | Calidad Premium',
  description: 'Importadores directos de grifería y sanitarios metálicos de calidad internacional.',
  icons: {
    icon: [
      { url: '/Logo.png', type: 'image/png' },
    ],
    shortcut: '/Logo.png',
    apple: '/Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}


