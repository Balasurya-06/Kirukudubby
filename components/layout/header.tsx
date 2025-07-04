"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X, Fish } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart/cart-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items } = useCart()

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-amber-100 border-b border-amber-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-amber-700" />
            <div>
              <h1 className="text-xl font-bold text-amber-900">Kirukku Dubby</h1>
              <p className="text-xs text-amber-700">Dryfish</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-amber-800 hover:text-amber-900 font-medium">
              Home
            </Link>
            <Link href="/products" className="text-amber-800 hover:text-amber-900 font-medium">
              Products
            </Link>
            <Link href="/about" className="text-amber-800 hover:text-amber-900 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-amber-800 hover:text-amber-900 font-medium">
              Contact
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <Button variant="outline" size="sm" className="relative bg-transparent">
                <ShoppingCart className="h-4 w-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-amber-800 hover:text-amber-900 font-medium py-2">
                Home
              </Link>
              <Link href="/products" className="text-amber-800 hover:text-amber-900 font-medium py-2">
                Products
              </Link>
              <Link href="/about" className="text-amber-800 hover:text-amber-900 font-medium py-2">
                About
              </Link>
              <Link href="/contact" className="text-amber-800 hover:text-amber-900 font-medium py-2">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
