import Link from "next/link"
import { Button } from "../../ui/button"
import Image from "next/image"

function Hero() {
  return (
    <div className="mt-16 flex w-full flex-col items-center px-6 text-center">
      <h1 className="mt-12 mb-4 max-w-xl text-5xl">
        Ship AI Products Faster Than Ever Before
      </h1>
      <p className="max-w-3xl">
        The complete UI kit for modern SaaS teams. Pre-built sections, clean
        code, and a design system that scales with your product.
      </p>

      <div className="mt-8 mb-4 flex gap-4">
        <Button asChild variant="ghost">
          <Link href={"/"}>See Components</Link>
        </Button>
        <Button asChild>
          <Link href={"/"}>Get the Kit</Link>
        </Button>
      </div>

      <Image
        className="mt-16 mb-6 rounded-xl"
        src={"/hero-bg.jpg"}
        width={900}
        height={400}
        alt="hero-dashboard"
      ></Image>
    </div>
  )
}

export default Hero
