import { FaqAccordion } from "./Accordion"

function FAQ() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-6xl">
        Freequently asked questions <br /> Everything you need to know!
      </h2>

      <FaqAccordion />
    </section>
  )
}

export default FAQ
