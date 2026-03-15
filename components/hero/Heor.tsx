import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

function Hero() {
  return (
    <div className="mt-16 flex w-full flex-col items-center px-6 text-center">
      <h1 className="mb-4 max-w-lg text-3xl">
        Move, Manage & access your your money globally
      </h1>
      <p className="max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        voluptates consectetur optio repellendus tempora eligendi reiciendis
        dolor nulla recusandae iure?
      </p>

      <div className="mt-8 flex gap-4">
        <Button asChild variant="ghost">
          <Link href={"/"}>Get Started Now</Link>
        </Button>
        <Button asChild>
          <Link href={"/"}>How it Works</Link>
        </Button>
      </div>

      <Image
        className="mt-16 rounded-xl"
        src={"/hero-dashboard.jpg"}
        width={900}
        height={400}
        alt="hero-dashboard"
      ></Image>
    </div>
  )
}

export default Hero
