import Hero from "@/components/Hero";
import StarsBackground from "@/components/StarsBackground";
import CursorTrail from "@/components/CursorTrail";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <StarsBackground />
      <CursorTrail />
      <Hero />
    </div>
  );
}