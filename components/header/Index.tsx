import Link from "next/link"
import Logo from "./Logo"
import { Nav } from "./Nav"
import { Button } from "../ui/button"
import { MobileNav } from "./MobileNav"

function Header() {
  return (
    <header className="flex py-6 md:justify-between">
      <section className="hidden gap-10 md:flex">
        <Link href={"/"}>
          <Logo />
        </Link>
        <Nav />
      </section>

      <div className="hidden items-center gap-2 md:flex">
        <Button variant="ghost" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Get started</Link>
        </Button>
      </div>

      {/*Mobile Nav*/}
      <div className="flex w-full justify-between md:hidden">
        <Link href={"/"}>
          <Logo />
        </Link>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
