import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex justify-between px-6 shadow-md">
      <div className="flex items-center font-bold text-3xl ml-26">
        <Link href="/">Dev-Joao</Link>
      </div>
      <div className="flex gap-4 px-6 items-center">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="">
          <span>About Me</span>
        </Link>
        <Link href="">
          <span>Contact Me</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
