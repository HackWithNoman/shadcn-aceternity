import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

function CtaBanner() {
  return (
    <section className="mt-24 text-center">
      <h1 className="mb-3 text-4xl">Ready to Build Your Inteligent Future?</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className="mt-6 flex gap-6">
        <Input placeholder="Enter text" />
        <Button asChild>
          <Link href={"/"}>Learn More</Link>
        </Button>
      </div>
    </section>
  )
}

export default CtaBanner
