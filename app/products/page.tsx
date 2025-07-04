import { ProductCard } from "@/components/products/product-card"
import React from "react"

const products = [
  {
    id: "1",
    name: "Premium Anchovy Dry Fish",
    price: 299,
    originalPrice: 349,
    image: "/karuvadu1.jpg",
    rating: 4.8,
    reviews: 124,
    description: "Fresh anchovy dried to perfection with traditional methods",
  },
  {
    id: "2",
    name: "King Fish Dry (Large)",
    price: 599,
    originalPrice: 699,
    image: "/karuvadu2.jpg",
    rating: 4.9,
    reviews: 89,
    description: "Premium king fish dried with authentic coastal techniques",
  },
  {
    id: "3",
    name: "Sardine Dry Fish",
    price: 249,
    originalPrice: 299,
    image: "/karuvadu3.jpg",
    rating: 4.7,
    reviews: 156,
    description: "Traditional sardine dry fish, rich in omega-3",
  },
  {
    id: "4",
    name: "Mackerel Dry Fish",
    price: 399,
    originalPrice: 449,
    image: "/karuvadu1.jpg",
    rating: 4.6,
    reviews: 98,
    description: "High-quality mackerel dried using traditional sun-drying methods",
  },
  {
    id: "5",
    name: "Tuna Dry Fish",
    price: 699,
    originalPrice: 799,
    image: "/karuvadu2.jpg",
    rating: 4.8,
    reviews: 67,
    description: "Premium tuna dry fish, perfect for curries and traditional dishes",
  },
  {
    id: "6",
    name: "Pomfret Dry Fish",
    price: 899,
    originalPrice: 999,
    image: "/karuvadu3.jpg",
    rating: 4.9,
    reviews: 45,
    description: "Delicate pomfret dried to preserve its natural flavor and nutrients",
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">Our Products</h1>
        <p className="text-amber-700 text-lg">Discover our complete range of premium quality dry fish products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
