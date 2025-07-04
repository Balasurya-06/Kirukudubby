"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/components/cart/cart-context"

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-amber-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-amber-900 mb-4">Your cart is empty</h1>
          <p className="text-amber-700 mb-8">Add some delicious dry fish to get started!</p>
          <Link href="/products">
            <Button className="bg-amber-700 hover:bg-amber-800">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="border-amber-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-amber-900">{item.name}</h3>
                      <p className="text-amber-700">₹{item.price}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-amber-900">₹{item.price * item.quantity}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card className="border-amber-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-amber-900 mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-amber-700">Subtotal</span>
                  <span className="text-amber-900">₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-700">Shipping</span>
                  <span className="text-amber-900">₹50</span>
                </div>
                <div className="border-t border-amber-200 pt-2">
                  <div className="flex justify-between font-semibold">
                    <span className="text-amber-900">Total</span>
                    <span className="text-amber-900">₹{total + 50}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">Proceed to Checkout</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
