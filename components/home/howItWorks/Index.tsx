import { PencilOff, Rocket, ShoppingBag } from "lucide-react"

function HowItWorks() {
  return (
    <section className="mt-24 flex flex-col items-center text-center mb-28">
      <h2 className="mb-4 text-4xl">Get stareted in 3 esay steps</h2>
      <p className="max-w-3xl">
        Launching your next SaaS has never been simpler. Follow these three
        steps and go from zero to a fully functional product in no time.
      </p>

      <div className="gridgrid-cols-1 mt-18 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border-2 border-gray-700 p-5">
          <div className="mb-4">
            <ShoppingBag size={38} />
          </div>
          <h2 className="mb-3 text-xl font-bold">1. Purchase the Kit</h2>
          <p>
            Grab the AI SaaS UI Kit and get instant access to 40+ pre-built
            sections, components, and full page templates.
          </p>
        </div>
        <div className="rounded-xl border-2 border-gray-700 p-5">
          <div className="mb-4">
            <PencilOff size={38} />
          </div>
          <h2 className="mb-3 text-xl font-bold">2. Customize Your Brand</h2>
          <p>
            Swap colors, fonts, and content using shadcn's theme variables. Make
            it yours in minutes, not days.
          </p>
        </div>
        <div className="rounded-xl border-2 border-gray-700 p-5">
          <div className="mb-4">
            <Rocket size={38} />
          </div>
          <h2 className="mb-3 text-xl font-bold">3. Launch Your Product </h2>
          <p>
            Deploy to Vercel with one click and share your product with the
            world. It's that simple.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
