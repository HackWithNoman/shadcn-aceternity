import Link from "next/link"

function Footer() {
  return (
    <footer className="mt-24">
      <div className="flex flex-col justify-between gap-6 py-36 md:flex-row">
        <div>
          <p className="text-lg text-gray-500">(+880)1458764</p>
          <h2 className="text-5xl text-gray-600">hello@aisass.com</h2>
        </div>
        <div>
          <p className="text-lg text-gray-400">Pages</p>
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/"}>
              <li>About</li>
            </Link>
            <Link href={"/"}>
              <li>Licenses</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-lg text-gray-400">Socials</p>
          <ul>
            <Link href={"/"}>
              <li>Facebook</li>
            </Link>
            <Link href={"/"}>
              <li>Youtube</li>
            </Link>
            <Link href={"/"}>
              <li>Instagram</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6 border-t border-t-gray-400 py-12 text-center md:flex-row md:text-left">
        <p>
          Developed by
          <Link href={"/"} className="font-bold">
            {" "}
            @hackwithnoman
          </Link>
        </p>
        <p>
          Powerd by
          <Link href={"/"} className="font-bold">
            {" "}
            webflow
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
