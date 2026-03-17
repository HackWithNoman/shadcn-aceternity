import { Button } from "@/components/ui/button"
import Link from "next/link"

function Pricing() {
  return (
    <section className="mt-24">
      <h2 className="mb-4 text-center text-6xl">
        Simple plans. No Hidden Fees
      </h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        deserunt fuga magni fugiat itaque impedit! Est, mollitia eius?
      </p>
      <div className="mt-6 flex flex-col gap-6 rounded-2xl bg-gray-300 p-3 md:flex-row">
        <div className="flex flex-col gap-6 p-6">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">Starter</h2>
            <p className="rounded-full bg-amber-300 px-3 py-1">Basic</p>
          </div>
          <div>
            <p>$6/month</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <div>
            <Button asChild>
              <Link href={"/"}>Get Started</Link>
            </Button>
          </div>

          <div>
            <p>Included</p>
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-3 md:flex-row">
          <div className="p-3">
            <div>
              <h2>Starter</h2>
              <p>Basic</p>
            </div>
            <div>
              <p>$6/month</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <Button asChild>
              <Link href={"/"}>Get Started</Link>
            </Button>

            <div>
              <p>Included</p>
              <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
          <div className="p-3">
            <div>
              <h2>Starter</h2>
              <p>Basic</p>
            </div>
            <div>
              <p>$6/month</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <Button asChild>
              <Link href={"/"}>Get Started</Link>
            </Button>

            <div>
              <p>Included</p>
              <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
