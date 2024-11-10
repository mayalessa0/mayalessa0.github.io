import Link from "next/link";
import { FaCloudArrowDown } from "react-icons/fa6";
import module from "./Header.module.css";

const Header = () => {
  return (
    <header className={module.Header_style}>
      <nav>
        <div>
          <Link href='/' className={module.logo}>
          <FaCloudArrowDown />
          Cloud Hosting
          </Link>
        </div>
        <ul className={module.navLinks}>
            <Link href='/'>Home</Link>
            <Link href='/articals'>Articals</Link>
            <Link href='/about'>About</Link>
            <Link href='/'>Admin dashboard</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header