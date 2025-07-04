import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { AboutSection } from "@/components/home/about-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <WhyChooseUs />
    </div>
  )
}
