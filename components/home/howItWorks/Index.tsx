import { FileUser } from "lucide-react"

function HowItWorks() {
  return (
    <section className="mt-24 flex flex-col items-center text-center">
      <h2 className="mb-4 text-4xl">Get stareted in 3 esay steps</h2>
      <p className="max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        voluptates consectetur optio repellendus tempora eligendi reiciendis
        dolor nulla recusandae iure?
      </p>

      <div className="gridgrid-cols-1 mt-18 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border-2 border-gray-700 p-5">
          <div className="mb-4">
            <FileUser size={38} />
          </div>
          <h2>1. Apply</h2>
          <p>
            Consectetur adipisicing elit. Magnam voluptates consectetur optio
            repellendus tempora eligendi.
          </p>
        </div>
        <div className="rounded-xl border-2 border-gray-700 p-5">
          <div className="mb-4">
            <FileUser size={38} />
          </div>
          <h2>1. Apply</h2>
          <p>
            Consectetur adipisicing elit. Magnam voluptates consectetur optio
            repellendus tempora eligendi.
          </p>
        </div>
        <div className="rounded-xl border-2 border-gray-700 p-5">
          <div className="mb-4">
            <FileUser size={38} />
          </div>
          <h2>1. Apply</h2>
          <p>
            Consectetur adipisicing elit. Magnam voluptates consectetur optio
            repellendus tempora eligendi.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
