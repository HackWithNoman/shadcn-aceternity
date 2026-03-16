import Features from "@/components/home/features/Index"
import Hero from "@/components/home/hero/Heor"
import HowItWorks from "@/components/home/howItWorks/Index"
import SocialProof from "@/components/home/socialProof/Index"

function Home() {
  return (
    <section>
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
    </section>
  )
}

export default Home
