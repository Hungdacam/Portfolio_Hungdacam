"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]
export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">HUNGDACAM</Link>
      <div className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "text-sm hover:underline",
              pathname === link.href && "font-semibold text-blue-600"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}