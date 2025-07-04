import { CheckCircle } from "lucide-react"
import React from "react"
import Karuvadu3 from "../../public/karuvadu3.jpg"

const benefits = [
  "Sourced directly from coastal fishermen",
  "No artificial preservatives or chemicals",
  "Sun-dried using traditional methods",
  "Rich in protein and omega-3 fatty acids",
  "Vacuum packed for freshness",
  "Nationwide delivery available",
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-6">The Kirukku Dubby Difference</h2>
            <p className="text-amber-700 text-lg mb-8">
              Our commitment to quality and tradition sets us apart. We work directly with coastal communities to bring
              you the freshest, most authentic dry fish experience possible.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-amber-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/karuvadu3.jpg"
              alt="Traditional fish drying process"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-amber-900 bg-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
