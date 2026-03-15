import Logo from "./Logo"
import { Nav } from "./Nav"
import { Button } from "./ui/button"

function Header() {
  return (
    <header className="flex justify-between py-6">
      <section className="flex gap-10">
        <Logo />
        <Nav />
      </section>

      <div>
        <Button>Register</Button>
      </div>
    </header>
  )
}

export default Header
