import Hero from "@/components/hero"
import WhySymple from "@/components/why-symple"
import Products from "@/components/products"
import Technology from "@/components/technology"
import Partners from "@/components/partners"
import Blog from "@/components/blog"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <WhySymple />
      <Products />
      <Technology />
      <Partners />
      <Blog />
      <FAQ />
      <CTA />
    </main>
  )
}
