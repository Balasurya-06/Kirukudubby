import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/product-card";

const featuredProducts = [
  {
    id: "1",
    name: "Premium Anchovy Dry Fish",
    price: 299,
    originalPrice: 349,
    image: "/karuvadu1.jpg", // Changed to string path for consistency
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
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
            Featured Products
          </h2>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            Discover our most popular dry fish varieties, loved by customers for
            their exceptional quality and authentic taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white bg-transparent"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}