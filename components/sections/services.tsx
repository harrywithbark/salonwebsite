import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    id: 1,
    title: 'Hair Styling',
    description: 'Professional haircuts and styling for all hair types',
    price: '$50 - $100',
  },
  {
    id: 2,
    title: 'Hair Coloring',
    description: 'Vibrant colors and highlights with premium products',
    price: '$75 - $150',
  },
  {
    id: 3,
    title: 'Manicure & Pedicure',
    description: 'Relaxing nail care services with quality finishes',
    price: '$30 - $60',
  },
  {
    id: 4,
    title: 'Facial Treatments',
    description: 'Deep cleansing and rejuvenating facial services',
    price: '$60 - $120',
  },
  {
    id: 5,
    title: 'Massage Therapy',
    description: 'Therapeutic massage to relieve stress and tension',
    price: '$80 - $150',
  },
  {
    id: 6,
    title: 'Waxing Services',
    description: 'Smooth and long-lasting hair removal solutions',
    price: '$25 - $75',
  },
]

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="max-w-[600px] text-gray-600 md:text-xl">
            Discover our full range of professional salon services
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardDescription>{service.description}</CardDescription>
                <p className="font-semibold text-primary">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
