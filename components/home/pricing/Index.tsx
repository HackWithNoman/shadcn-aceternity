import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"
import Link from "next/link"

function Pricing() {
  return (
    <section>
      <h2 className="mb-4 text-center text-6xl">
        Simple plans. No Hidden Fees
      </h2>
      <p className="text-center">
        One purchase, lifetime access. No subscriptions, no upsells, just clean
        code ready to ship.
      </p>
      <div className="flex flex-col gap-6 rounded-2xl bg-[#ECEFEB] p-3 md:flex-row">
        <div className="flex flex-col gap-6 p-6">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Starter</h2>
            <p className="rounded-full bg-amber-300 px-3 py-1">Basic</p>
          </div>
          <div>
            <p className="mb-2">
              <span className="text-3xl font-bold">$49</span>/month
            </p>
            <p>
              Perfect for indie hackers and solo founders launching their first
              product.
            </p>
          </div>

          <div>
            <Button asChild>
              <Link href={"/"}>Get Started</Link>
            </Button>
          </div>

          <Separator className="bg-gray-400" />

          <div>
            <p className="mb-3">Included</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <Star className="text-amber-600" size={18} />
                40+ pre-built sections
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-amber-600" size={18} />
                Light & dark mode
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-amber-600" size={18} />
                TypeScript support
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-amber-600" size={18} />6 months of updates
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-amber-600" size={18} />
                Community support
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl bg-white md:flex-row">
          <div className="flex w-1/2 flex-col gap-6 p-6">
            <div>
              <h2 className="text-xl font-bold">Pro</h2>
            </div>
            <div>
              <p className="mb-2">
                <span className="text-3xl font-bold">$89</span>/month
              </p>
              <p>
                Everything in Starter plus the Figma source file and priority
                support.
              </p>
            </div>

            <div>
              <Button asChild>
                <Link href={"/"}>Get Started</Link>
              </Button>
            </div>

            <Separator className="bg-gray-400" />

            <div>
              <p className="mb-3">Included</p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />
                  40+ pre-built sections
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />
                  Light & dark mode
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />
                  TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />6 months of
                  updates
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />
                  Community support
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-6 p-6">
            <div>
              <h2 className="text-xl font-bold">Agency</h2>
            </div>
            <div>
              <p className="mb-2">
                <span className="text-3xl font-bold">$149</span>/month
              </p>
              <p>
                Unlimited client projects, team license, and full commercial
                rights.
              </p>
            </div>

            <div>
              <Button asChild>
                <Link href={"/"}>Get Started</Link>
              </Button>
            </div>

            <Separator className="bg-gray-400" />

            <div>
              <p className="mb-3">Included</p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />
                  40+ pre-built sections
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />
                  Light & dark mode
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />
                  TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />6 months of
                  updates
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-amber-600" size={18} />
                  Community support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
