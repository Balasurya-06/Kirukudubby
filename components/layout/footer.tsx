import Link from "next/link"
import { Fish, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Fish className="h-6 w-6" />
              <div>
                <h3 className="font-bold">Kirukku Dubby</h3>
                <p className="text-sm">Dryfish</p>
              </div>
            </div>
            <p className="text-amber-200 text-sm">
              Premium quality dry fish delivered fresh to your doorstep. Traditional taste with modern convenience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-amber-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-amber-200 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-amber-200">
              <li>Anchovy Dry Fish</li>
              <li>Sardine Dry Fish</li>
              <li>Mackerel Dry Fish</li>
              <li>Tuna Dry Fish</li>
              <li>King Fish Dry</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-amber-200">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9488345831</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>xyndrixinfo@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm text-amber-200">
          <p>&copy; 2024 Kirukku Dubby Dryfish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
