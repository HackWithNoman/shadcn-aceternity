import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

function CtaBanner() {
  return (
    <section className="flex flex-col items-center text-center">
      <h1 className="mb-3 text-4xl">Ready to Build Your Inteligent Future?</h1>
      <p>Subscribe to our news letter.</p>
      <div className="mt-6 flex gap-6">
        <Input placeholder="Enter text" className="max-w-56" />
        <Button asChild>
          <Link href={"/"}>Submit</Link>
        </Button>
      </div>
    </section>
  )
}

export default CtaBanner
