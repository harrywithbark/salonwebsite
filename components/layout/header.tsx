'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Salon
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#services" className="text-sm hover:text-primary">Services</Link>
          <Link href="#about" className="text-sm hover:text-primary">About</Link>
          <Link href="#contact" className="text-sm hover:text-primary">Contact</Link>
          <Button>Book Now</Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container flex flex-col gap-4 py-4">
            <Link href="#services" className="text-sm hover:text-primary">Services</Link>
            <Link href="#about" className="text-sm hover:text-primary">About</Link>
            <Link href="#contact" className="text-sm hover:text-primary">Contact</Link>
            <Button className="w-full">Book Now</Button>
          </div>
        </div>
      )}
    </header>
  )
}
