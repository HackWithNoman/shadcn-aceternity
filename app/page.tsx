import CtaBanner from "@/components/home/ctaBanner/Index"
import FAQ from "@/components/home/faq/Index"
import Features from "@/components/home/features/Index"
import Footer from "@/components/home/footer/Index"
import Hero from "@/components/home/hero/Heor"
import HowItWorks from "@/components/home/howItWorks/Index"
import Pricing from "@/components/home/pricing/Index"
import SocialProof from "@/components/home/socialProof/Index"

function Home() {
  return (
    <section>
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CtaBanner />
      <Footer />
    </section>
  )
}

export default Home
