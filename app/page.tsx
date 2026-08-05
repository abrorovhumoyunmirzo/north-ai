import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-work"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  )
}

export default function LoginPage() {
  return <div>Login</div>;
}