import { Shield, Truck, Award, Heart } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every product is carefully inspected and meets our high-quality standards",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery to ensure freshness reaches your doorstep",
  },
  {
    icon: Award,
    title: "Traditional Methods",
    description: "Dried using time-tested traditional methods passed down through generations",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Rich in protein, omega-3, and essential nutrients for a healthy lifestyle",
  },
]

export function AboutSection() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">Why Choose Kirukku Dubby?</h2>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            We bring you the finest quality dry fish with a commitment to tradition, quality, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">{feature.title}</h3>
              <p className="text-amber-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
