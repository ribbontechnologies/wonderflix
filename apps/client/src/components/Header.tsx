import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center gap-7">
      <h1 className="relative text-3xl text-red-600 font-bold after:bg-black after:w-full after:h-[2px] after:absolute after:left-0 after:top-5 italic -translate-y-[2px]">
        Wonderflix
      </h1>

      <nav>
        <ul className="flex gap-3">
          <li>
            <Link
              to="/home"
              className="hover:brightness-75 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/actors"
              className="hover:brightness-75 transition-all duration-300"
            >
              Actors
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
