import {
  BrainCog,
  FileScan,
  Landmark,
  PhoneCall,
  TimerReset,
} from "lucide-react"

const data = [
  {
    id: 1,
    icon: <BrainCog />,
    heading: "Built for AI Products",
    description:
      "Everything you need to launch your AI-powered SaaS. From prompt interfaces to usage dashboards, every component is designed with AI workflows in mind.",
  },
  {
    id: 2,
    icon: <FileScan />,
    heading: "Developer First",
    description:
      "Clean TypeScript code, zero lock-in, fully customizable. Drop components into your project and own every line of code.",
  },
  {
    id: 3,
    icon: <TimerReset />,
    heading: "Ship in Days, Not Weeks",
    description:
      "Stop rebuilding the same UI from scratch. Our pre-built sections let you go from idea to production in record time.",
  },
]

function Features() {
  return (
    <section className="flex items-center justify-center">
      <div className="border-red-500-400 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id}>
            <div className="inline-block rounded-full bg-gray-800 p-3 text-white">
              {item.icon}
            </div>
            <h2 className="my-3 text-xl">{item.heading}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
