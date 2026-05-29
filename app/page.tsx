'use client'

import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Footer />
    </>
  )
}
