import { FaqAccordion } from "./Accordion"

function FAQ() {
  return (
    <section className="mt-24 flex flex-col items-center text-center">
      <h2 className="mb-16 text-6xl">
        Freequently asked questions <br /> Everything you need to know!
      </h2>

      <FaqAccordion />
    </section>
  )
}

export default FAQ
