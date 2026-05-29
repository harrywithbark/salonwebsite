import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Salon</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted salon for professional beauty and wellness services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary">Hair Styling</Link></li>
              <li><Link href="#" className="hover:text-primary">Coloring</Link></li>
              <li><Link href="#" className="hover:text-primary">Nails</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Mon - Fri: 9am - 6pm</li>
              <li>Sat: 10am - 5pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@salon.com</li>
              <li>Address: 123 Main St</li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 Salon. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
