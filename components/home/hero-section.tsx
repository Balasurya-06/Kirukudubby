import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import React from "react"
import Karuvadu2 from "../../public/karuvadu2.jpg"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-100 to-amber-200 hero-pattern">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-amber-700 font-medium">Premium Quality</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6">
              Fresh <span className="text-amber-700">Dry Fish</span> Delivered to Your Door
            </h1>

            <p className="text-lg text-amber-800 mb-8 leading-relaxed">
              Experience the authentic taste of coastal tradition with our premium quality dry fish. Carefully selected,
              naturally dried, and packed with nutrients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-amber-300 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
              <img
                src="/karuvadu2.jpg"
                alt="Premium Dry Fish"
                className="w-80 h-80 object-cover rounded-full shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold">
              100% Natural
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
