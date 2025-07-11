import Hero from "@/components/Hero"
import StarsBackground from "@/components/StarsBackground"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <StarsBackground />
      <Hero />
    </div>
  )
}
