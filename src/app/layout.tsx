import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Curso de Computação',
  description: 'Curso de Ciência da Computação da Universidade Estadual da Paraíba',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta name="color-scheme" content='light only' />
      </Head>
      <body className={`${inter.className} bg-zinc-100 flex flex-col items-center justify-between h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
