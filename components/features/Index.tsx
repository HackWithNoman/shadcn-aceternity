import { Landmark, PhoneCall, Users } from "lucide-react"

const data = [
  {
    id: 1,
    icon: <Users />,
    heading: "Consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptates consectetur optio repellendus tempora eligendi reiciendis dolor nulla recusandae iure?",
  },
  {
    id: 2,
    icon: <Landmark />,
    heading: "Consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptates consectetur optio repellendus tempora eligendi reiciendis dolor nulla recusandae iure?",
  },
  {
    id: 3,
    icon: <PhoneCall />,
    heading: "Consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptates consectetur optio repellendus tempora eligendi reiciendis dolor nulla recusandae iure?",
  },
]

function Features() {
  return (
    <section className="mt-14 flex items-center justify-center">
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
