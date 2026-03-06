import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white transition-colors duration-300 relative group"
    >
      {title}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;
